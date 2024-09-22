<div align="center">

<img src="https://yt2tweets.worksmarter.lol/worksmarter-logo.png" width="150" height="150" alt="WorkSmarter Logo" />

# `Yt2Tweets`

<strong>Turn YouTube Videos into Twitter Threads with AI</strong>
</div>

<div align="center">
    <br>
    <a href="https://yt2tweets.worksmarter.lol/"><b>yt2tweets.worksmarter.lol</b></a>
    <br><br>
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
$ yt2tweets -k "<your-open-ai-key>"
```

## Usage

```sh
$ yt2tweets https://youtu.be/1-TZqOsVCNM
# Result:
# 🚀 Want to unlock the secrets of wealth creation and personal empowerment? Let’s dive into timeless principles that can transform your life! 🧵👇
# 1/13 💡 **Wealth isn't just money; it’s freedom!** True wealth allows you to escape the rat race, giving you the liberty to pursue what you love, not just what pays the bills. It buys you time and options. 🌍✨ #WealthCreation
# 2/13 🔑 **Invest in specific knowledge.** Focus on what you are genuinely passionate about. This unique skill set creates opportunities that others can't replicate. It’s about being the best at what you do! 🎓💪 #ContinuousLearning
# ...

$ yt2tweets -h
# Print: Help messages
```
