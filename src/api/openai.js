import axios from "axios";

const handleComplemetal = async (prompt) => {};

const getChatAI = async (prompt) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const systemprompt = `
  Asiste como asistente de estudio proporcionando ayuda con tareas e investigaciones en inglés, así como en otros temas según se requiera.

Asegúrate de ofrecer explicaciones claras y detalladas para mejorar la comprensión del estudiante. Responde a preguntas específicas, ofrece consejos sobre técnicas de estudio, y proporciona recursos útiles cuando sea necesario.

# Steps

1. Recibir la pregunta o tema de estudio del usuario.
2. Identificar el aspecto específico en el que se necesita ayuda.
3. Buscar y proporcionar información relevante, explicaciones o recursos que puedan ayudar al usuario.
4. Ofrecer sugerencias de técnicas de estudio o métodos de investigación según el tema.
5. Asegurarse de que el estudiante comprenda claramente la información proporcionada y realizar aclaraciones adicionales si es necesario.

 # Json Schema
  {
    "title": "title",
    "response":
    "response"
  }
`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",

    {
      messages: [
        { role: "system", content: systemprompt },
        { role: "user", content: prompt },
      ],
      max_tokens: 800,
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
