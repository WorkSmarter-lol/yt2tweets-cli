// Import necessary modules
import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import readline from 'readline';
import { YoutubeTranscript } from 'youtube-transcript';
import extractTweets from '~services/extractTweets.js';
import prompts from '~constants/prompts.js';
const spinner = ora('Loading...');

// Initialize the command line interface
const program = new Command();

// Define the version of the CLI
program.version('0.0.1');

// Define the config file path
const configFilePath = path.join('./api-key.json');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to read API key from config file
function readApiKey() {
  try {
    const config = JSON.parse(fs.readFileSync(configFilePath));
    return config['open_ai_key'] || '';
  } catch (error) {
    return '';
  }
}

// Function to write API key to config file
function writeApiKey(apiKey) {
  const config = { open_ai_key: apiKey };
  fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2));
}

// Function to authenticate with OpenAI API Key
function authenticate(apiKey) {
  if (apiKey) return true;
  else return false;
}

// Command to accept a YouTube URL
program
  .command('yt2tweets <url>')
  .description('Print a YouTube URL after authenticating with OpenAI API Key')
  .action(async url => {
    const apiKey = readApiKey(); // Read the saved API key

    // If no API key is found, prompt for it
    if (!apiKey) {
      rl.question('Please enter your OpenAI API Key: ', async apiKey => {
        spinner.start();
        const isValid = authenticate(apiKey);
        if (isValid) {
          writeApiKey(apiKey); // Save the new API key
          await convertYt2Tweets(url, apiKey); // Print URL with new key
        } else {
          console.error(chalk.red('Invalid API Key. Please provide a valid OpenAI API Key.'));
        }
        spinner.stop();
        rl.close();
      });
    } else {
      // If an API key exists, use it directly
      spinner.start();
      await convertYt2Tweets(url, apiKey);
    }
  });

// Function to print YouTube URL after authentication
async function convertYt2Tweets(url, apiKey) {
  const isValid = authenticate(apiKey);
  if (isValid) {
    const youtubeRegex = /^https?:\/\/(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    if (youtubeRegex.test(url)) {
      spinner.succeed('YouTube URL is valid');
      spinner.start('Fetching transcript ...');
      try {
        let transcript = await YoutubeTranscript.fetchTranscript(url);
        transcript = transcript.map(item => item.text).join(' ');
        spinner.succeed('Transcript retrieved');

        // Extract tweets
        spinner.start('Converting to Tweets ...');
        const { result } = await extractTweets({
          identity: prompts.IDENTITY,
          steps: prompts.STEPS,
          formats: prompts.FORMATS,
          input: transcript,
          apiKey,
        });
        spinner.succeed('Conversion completed');
        console.log('');
        console.log(chalk.green(result));
      } catch (err) {
        console.error(chalk.red(err));
      }
    } else {
      spinner.fail('Invalid YouTube URL');
      console.error(chalk.red('Please enter a valid YouTube URL to proceed'));
    }
  } else {
    spinner.fail('Invalid API Key');
    console.error(chalk.red('Invalid API Key. Please provide a valid OpenAI API Key.'));
  }

  // Close readline interface and exit process after printing or error
  spinner.stop();
  rl.close();
  process.exit(0);
}

// Command to set the OpenAI API Key using --key or -k
program.option('-k, --key <apiKey>', 'Set your OpenAI API Key').action(options => {
  if (options.key) {
    writeApiKey(options.key);
    console.log(chalk.green('API Key has been updated successfully.'));
  }

  // Close readline interface and exit process after printing or error
  rl.close();
  process.exit(0);
});

// Help command enhancement
program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ yt2tweets https://youtu.be/1-TZqOsVCNM');
  console.log('  $ yt2tweets https://www.youtube.com/watch?v=1-TZqOsVCNM');
  console.log('');
  console.log('To change your OpenAI API Key:');
  console.log('  $ yt2tweets --key YOUR_NEW_API_KEY');
  console.log('  $ yt2tweets -k YOUR_NEW_API_KEY');
});

// Parse the command line arguments
program.parse(process.argv);

// If no command is provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
