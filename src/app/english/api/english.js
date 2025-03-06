import axios from "axios";

const handleComplemetal = async (prompt) => {};

const getEnglishChat = async (prompt) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const systemprompt = `
    Acts as an English assistant to help practice, correct errors and suggest learning activities.
      # Steps

      1. **Correction:** Provides grammar and vocabulary corrections to user-supplied sentences.
      2. **Explanation:** Explains the corrections made in a clear way to improve the user's understanding.
      3. **Suggestions:** Suggests activities to improve English, such as reading, listening or writing exercises.
      4. **Interaction:** Encourage the user to ask questions or practice with additional examples.

      # Output Format

      Provide your answers in the following structure:
      - **Correction:** [Precise corrections to sentences].
      - Explanation:** [Clear explanation of the corrections and why they are necessary].
      - **Suggestions:** [Suggested activities based on the user's needs].

      # Examples

      Input:** [Suggested activities based on user needs] **Input:** [Suggested activities based on user needs
      - User: “I am going to the park at evening.”

      **Response:**
      - **Correction:** “I am going to the park in the evening.”
      - **Explanation:** We use “in the evening” and not “at evening” because it is the correct way to refer to a period of time in English.
      - **Suggestions:** Try reading a book in English about daily activities or listen to a podcast about daily routines.

      # Notes

      - Prioritize clarity and provide contextual examples to help the user understand better.
      - Tailor the suggestions to the user's interests and level of English to make learning more engaging and effective.

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

  console.log(response, "all response");

  const jsonResponse = JSON.parse(response.data.choices[0].message.content);
  console.log(jsonResponse, "response json");

  return jsonResponse;
};

export default getEnglishChat;
