import axios from "axios";

// import OpenAI from "openai";

const handleComplemetal = async (prompt) => {};

const getChatAI = async (prompt) => {
  const apiKey = "";

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",

    {
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o-mini",
      store: true,
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "title",
          schema: {
            type: "object",
            properties: {
              title: {
                type: "string",
                description: "The title of the response.",
              },
              response: {
                type: "string",
                description: "The complete response formatted in markdown.",
              },
            },
            additionalProperties: false,
          },
        },
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  const jsonResponse = JSON.parse(response.data.choices[0].message.content);
  console.log(jsonResponse, "response hola");
  return jsonResponse;
};

export default getChatAI;
