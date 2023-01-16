# justbrowse.io

A nodejs package to interact with the <a href="https://justbrowse.io">justbrowse.io</a>

## Installation

```
npm i justbrowse.io
pnpm add justbrowse.io
yarn add justbrowse.io
```

## Usage

- <a href="#chatgpt">ChatGPT</a>
- <a href="#crawler">Crawler</a>

### ChatGPT

We create our client:

```js
import { ChatGPT } from "justbrowse.io";
const sessionToken = "Read Bellow how to get your chatgpt session token";
const apiToken = "Go to https://justbrowse.io to get your api token"; // API token is now optional

(async () => {
  var client = new Client(sessionToken);
  // var client = new Client(sessionToken, apiToken);
  await client.init();
  // check status:
  var status = await client.status();
  if (status == "ready") {
    // Send a message:
    var response = await client.chat("message");
    console.log(response);
    // Create a new conversation:
    var conversation = await client.createConversation();
    // send a message to the conversation:
    var res = await conversation.sendMessage("message", message);
    console.log(res);
  }
})();
```

## Get your session token:

1. Go to https://chat.openai.com/chat
2. Log in to your account
3. Open developer tools
4. Go to the application section
5. Go to the cookies section
6. And get your session token which is the cookie with the name: "\_\_Secure-next-auth.session-token"

### Crawler (Beta)

```javascript
import { Crawl } from "justbrowse.io";

(async () => {
  var client = new Crawl();
  var url = "https://google.com?q=news+for+today";
  var html = await client.html(url);
  console.log(html);
  var text = await client.text(url);
  console.log(text);
})();
```
