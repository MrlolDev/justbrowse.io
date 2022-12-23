import Conversation from "./Conversation.js";
const API_URL = "https://justbrowse.io/api/chatgpt";

export default class Client {
  apiToken: string;
  sessionId: string;
  sessionToken: string;

  constructor(sessionToken: string, apiToken: string) {
    this.apiToken = apiToken;
    this.sessionToken = sessionToken;
  }

  async init() {
    try {
      var response = await fetch(
        `${API_URL}/connect?sessionToken=${this.sessionToken}`,
        {
          headers: {
            authorization: `Bearer ${this.apiToken}`,
          },
        }
      );
      if (response.status != 200) {
        throw response.status;
      }
      var json = await response.json();
      this.sessionId = json.sessionId;
    } catch (err) {
      throw err;
    }
  }

  async status() {
    try {
      var response = await fetch(
        `${API_URL}/status?sessionId=${this.sessionId}`,
        {
          headers: {
            authorization: `Bearer ${this.apiToken}`,
          },
        }
      );
      var json = await response.json();
      return json.status;
    } catch (err) {
      throw err;
    }
  }

  async chat(message: string) {
    try {
      var response = await fetch(`${API_URL}/chat/${this.sessionId}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${this.apiToken}`,
        },
        body: JSON.stringify({
          message: message,
        }),
      });
      var json = await response.json();
      return json.reply[0];
    } catch (err) {
      throw err;
    }
  }

  createConversation() {
    var conversation = new Conversation(this.sessionId, this.apiToken);
    return conversation;
  }
}
