import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const getChatAI = async (prompt, chatHistory = []) => {
  const completion = await client.chat.completions.create({
    max_tokens: 800,
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Asistente increible" },
      ...chatHistory,
      { role: "user", content: prompt },
    ],
  });

  console.log(completion.choices[0].message.content, "complemeentation ");
  return completion.choices[0].message.content;
};

export const GetComplementationAPI = async (
  prompt,
  chatHistory = [],
  systemprompt
) => {
  const completion = await client.chat.completions.create({
    max_tokens: 800,
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemprompt || "Asistente increible" },
      ...chatHistory,
      { role: "user", content: prompt },
    ],
  });

  console.log(completion.choices[0].message.content, "complemeentation ");
  return completion.choices[0].message.content;
};

export const AdvanceSearch = async (prompt, chatHistory = []) => {
  const completion = await client.responses.create({
    model: "gpt-4o-mini",
    tools: [
      {
        type: "web_search_preview",
        user_location: {
          type: "approximate",
          country: "US",
          city: "Boston",
          region: "Boston",
        },
      },
    ],
    input: prompt,
  });

  console.log(completion, "total response ");
  return completion.output_text;
};

export const SupportChatAI = async (prompt, chatHistory = []) => {
  const formattedChatHistory = chatHistory.map((message) => ({
    ...message,
    content: message.content.map((item) => ({
      ...item,
      text: String(item.text), // Asegúrate de que text sea una cadena
    })),
  }));

  const completion = await client.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: 'Actúa como un chat de soporte para dar asistencia a los usuarios. Cuando el usuario ingrese por primera vez, preséntate cortésmente, pregunta en qué puedes ayudarle, y proporciona una lista de servicios o áreas de asistencia basadas en la información contenida en el documento PDF de la empresa.\n\n# Steps\n\n1. **Presentación Inicial**: Presentarte de manera educada y amistosa.\n   - "¡Hola! Soy tu asistente de soporte. Estoy aquí para ayudarte."\n   \n2. **Consulta Inicial**: Pregunta cómo puedes ayudar al usuario.\n   - "¿En qué podemos ayudarte hoy?"\n\n3. **Listado de Servicios**: Ofrece una lista de servicios basados en la información del PDF de la empresa.\n   - Asegúrate de que la lista esté clara y deriva de la información más relevante del PDF.\n\n# Output Format\n\n- Formato de diálogo en párrafos cortos.\n- La presentación y consulta iniciales deben ser breves y claras.\n- La lista de servicios o áreas de asistencia debe estar enumerada o en formato de lista.\n\n# Examples\n\n**Ejemplo de interacción:**\n\n- **Usuario Primer Ingreso:**\n  - "¡Hola! Soy tu asistente de soporte. Estoy aquí para ayudarte. ¿En qué podemos ayudarte hoy?"\n  - "Aquí tienes una lista de cosas en las que podemos ayudarte:\n    1. [Servicio 1]\n    2. [Servicio 2]\n    3. [Servicio 3]"\n  \n  (La lista de servicios debe basarse en la información proporcionada en el PDF)\n\n# Notes\n\n- Asegúrate de que el tono sea siempre amigable y profesional.\n- Revisa el PDF para obtener la información más relevante al crear la lista de servicios.\n- Considera proporcionar enlaces o más detalles si el usuario pregunta sobre un tema específico.',
          },
        ],
      },
      ...formattedChatHistory,
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: String(prompt), // Asegúrate de que prompt sea una cadena
          },
        ],
      },
    ],
    reasoning: {},
  });

  return completion;
};
