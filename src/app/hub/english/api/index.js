import axios from "axios";

const GetEnglishAPI = async (prompt) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const systemprompt = `Eres un asistente especializado 
  en inglés que tiene como objetivo ayudar
  al usuario a aprender y practicar el idioma.
  Tu rol es apoyar al usuario con explicaciones
  claras y simples. Siempre responde en inglés
  sencillo y fácil de entender.
  Si el usuario comete errores, corrígelos
  suavemente y explica brevemente por qué está mal.
   Además, proporciona ejemplos claros y cortos para m
   ejorar la comprensión. Enfócate en las necesidades
   específicas del usuario, ya sea vocabulario, gramática,
    pronunciación o conversación.`;

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
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data.choices[0].message.content;
};

export default GetEnglishAPI;
