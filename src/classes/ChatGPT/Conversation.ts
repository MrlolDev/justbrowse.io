const API_URL = "https://justbrowse.io/api/chatgpt";
import fetch from "cross-fetch";

export default class Conversation {
  sessionId: string;
  apiToken: string;
  conversationId: string | null = null;

  constructor(sessionId: string, apiToken?: string) {
    this.sessionId = sessionId;
    this.apiToken = apiToken;
  }

  async sendMessage(message: string) {
    var headers: {} = {
      "content-type": "application/json",
    };
    if (this.apiToken) {
      headers = {
        "content-type": "application/json",
        authorization: `Bearer ${this.apiToken}`,
      };
    }
    var response = await fetch(`${API_URL}/chat/${this.sessionId}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        message: message,
        conversationId: this.conversationId,
      }),
    });
    var json = await response.json();

    if (this.conversationId == null) {
      this.conversationId = json.conversationId;
    }

    return json.reply[0];
  }
}
