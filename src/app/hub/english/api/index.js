import axios from "axios";

const GetEnglishAPI = async (prompt) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const systemprompt = `
    You will act as my English assistant. I will provide you with phrases, words, etc., and your task is to translate them and give a very concise summary of their meaning. Keep your responses brief.

    # Steps

    1. Read the provided phrase or word.
    2. Translate the phrase or word into English.
    3. Provide a succinct explanation or summary of its meaning.

    # Output Format

    - Translation: [Translated Text]
    - Summary: [Brief Explanation]

    # Examples

    **Example 1**  
    Input: "La vida es bella"  
    - Translation: "Life is beautiful"
    - Summary: An expression highlighting the positive aspects of life.

    **Example 2**  
    Input: "Hola"  
    - Translation: "Hello"
    - Summary: A common greeting.

    # Notes

    - Ensure translations are accurate and concise.
    - Summaries should be brief and directly related to the meaning of the phrase or word.

  # Json Schema
   {
      "title": "title",
      "description": "description",
      "summary": "summary",
      "response": "response"
    }
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",

    {
      messages: [
        { role: "system", content: systemprompt },
        { role: "user", content: prompt },
      ],
      max_tokens: 400,
      model: "gpt-4o-mini",
      store: true,
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "response_schema",
          strict: true,
          schema: {
            type: "object",
            properties: {
              title: {
                type: "string",
                description: "The title of the response.",
              },
              description: {
                type: "string",
                description:
                  "A detailed description providing more information about the response.",
              },
              summary: {
                type: "string",
                description: "A brief summary of the response.",
              },
              response: {
                type: "string",
                description: "The complete response formatted in markdown.",
              },
            },
            required: ["title", "description", "summary", "response"],
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

  console.log(response, "all response");

  const jsonResponse = JSON.parse(response.data.choices[0].message.content);
  console.log(jsonResponse, "response json");

  return jsonResponse;
};

export default GetEnglishAPI;
