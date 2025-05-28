import axios from "axios";

export const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
};

export const getSummary = async (url) => {
  try {
    const res = await axios.get("https://r.jina.ai/" + encodeURIComponent(url), {
      responseType: "text",
    });

    const text = res.data;
    const titleMatch = text.match(/Title:\s*(.*)/);
    const title = titleMatch ? titleMatch[1].trim() : "Untitled";

    let summary = text.replace(/Title:.*(\r?\n)+/, "").trim();

    summary = summary
      .replace(/URL Source:/gi, "")            
      .replace(/Markdown Content:/gi, "")      
      .trim();

    return { title, summary };
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 451) {
        throw new Error("This URL is blocked due to abuse or rate-limiting.");
      } else if (status === 404) {
        throw new Error("URL not found (404).");
      } else {
        throw new Error("Failed to fetch summary. Server returned an error.");
      }
    } else if (error.request) {
      throw new Error("Network error. Please try again later.");
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
