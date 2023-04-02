import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
const API_KEY = process.env.API_KEY; // Replace with your actual API key

interface OpenAIResponse {
  data: {
    url: string;
  }[];
}

async function generateImage(prompt: string): Promise<OpenAIResponse> {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "image-alpha-001",
      prompt: prompt,
      num_images: 1,
      size: "256x256",
    }),
  });
  // const data = await response.json();
  const data = (await response.json()) as OpenAIResponse;
  return data;
}

export { generateImage };
