# justbrowse.io

A nodejs package to interact with the justbrowse.io

## Installation

Required node 18 or higher since we use native fetch.

```
npm i justbrowse.io
pnpm add justbrowse.io
yarn add justbrowse.io
```

## Usage

We create our client:

```js
import Client from "justbrowse.io";
const sessionToken = "Read Bellow how to get your chatgpt session token";
const apiToken = "Go to https://justbrowse.io to get your api token";

(async () => {
  var client = new Client(sessionToken, apiToken);
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
