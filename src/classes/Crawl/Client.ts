const API_URL = "https://justbrowse.io/api/crawl";
import fetch from "cross-fetch";

export default class Crawl {
  private apiToken: string;

  constructor(apiToken?: string) {
    this.apiToken = apiToken;
  }
  async html(url: string) {
    var res = await fetch(`${API_URL}/html`, {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    });
    var json = await res.json();
    return json;
  }

  async text(url: string) {
    var res = await fetch(`${API_URL}/text`, {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    });
    var json = await res.json();
    return json;
  }
}
