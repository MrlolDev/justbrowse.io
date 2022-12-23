const API_URL = "https://justbrowse.io/api/chatgpt";
import fetch from "cross-fetch";

export default class Conversation {
  sessionId: string;
  apiToken: string;
  conversationId: string | null = null;

  constructor(sessionId: string, apiToken: string) {
    this.sessionId = sessionId;
    this.apiToken = apiToken;
  }

  async sendMessage(message: string) {
    var response = await fetch(`${API_URL}/chat/${this.sessionId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${this.apiToken}`,
      },
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
