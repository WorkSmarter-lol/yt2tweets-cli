<div align="center">

<img src="https://raw.githubusercontent.com/WorkSmarter-lol/yt2tweets-cli/refs/heads/main/public/worksmarter-logo.png" width="100" height="100" alt="WorkSmarter Logo" />

# `Yt2Tweets`

<strong>Turn YouTube Videos into Twitter Threads with AI</strong>

<img src="https://raw.githubusercontent.com/WorkSmarter-lol/yt2tweets-cli/refs/heads/main/public/demo.webp" alt="WorkSmarter Logo" />

</div>

<div align="center">
    <a href="https://yt2tweets.worksmarter.lol/"><b>yt2tweets.worksmarter.lol</b></a>
    <br>
    <a href="https://x.com/WorkSmarterLOL"><b>Contact</b></a>
    •
    <a href="https://github.com/WorkSmarter-lol/yt2tweets-cli/issues/new"><b>Issues</b></a>
</div>

## Installation

```sh
$ yarn global add yt2tweets
```

## Insert OpenAI Key

Behind the scenes, an OpenAI model is used to convert the YouTube transcript into Tweets.

```sh
$ yt2tweets set-key "<your-open-ai-key>"
```

## Usage

```sh
$ yt2tweets "https://youtu.be/1-TZqOsVCNM"
# Result:
# 🚀 Want to unlock the secrets of wealth creation and personal empowerment? Let’s dive into timeless principles that can transform your life! 🧵👇
# 1/13 💡 **Wealth isn't just money; it’s freedom!** True wealth allows you to escape the rat race, giving you the liberty to pursue what you love, not just what pays the bills. It buys you time and options. 🌍✨ #WealthCreation
# 2/13 🔑 **Invest in specific knowledge.** Focus on what you are genuinely passionate about. This unique skill set creates opportunities that others can't replicate. It’s about being the best at what you do! 🎓💪 #ContinuousLearning
# 3/13 🌱 **Embrace accountability.** Don’t shy away from responsibility. It’s the cornerstone of growth. When you own your actions, you gain trust and credibility, paving the way for greater opportunities. 📈🤝 #Leadership
# ... and so on

$ yt2tweets -h
# Print: Help messages
```

## Configure System Prompt

Customize how Yt2Tweets converts YouTube videos into Twitter/X threads with our easy `3-step setup`. Adjust tone, length, and style to fit your needs. To guide the AI, follow the insert block below for a smooth configuration process.

Feel free to edit the file at `src/constants/prompts.js`.

### 1. Identity and purpose

Set the AI’s role and goals with the Identity and Purpose block. Define its function and objectives to ensure it generates content that aligns with your needs and desired outcomes.

### 2. Steps

Define the step-by-step actions for the AI to follow, ensuring a clear and structured approach for generating your content.

### 3. Output formats

Specify the formats in which the AI should deliver content.

Example:

<img src="https://raw.githubusercontent.com/WorkSmarter-lol/yt2tweets-cli/refs/heads/main/public/prompt.png" alt="Example prompts for Yt2tweets" />
