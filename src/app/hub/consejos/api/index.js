import axios from "axios";

const GetConsejosAPI = async (prompt) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const systemprompt = `Eres un asistente AI amigable y empático que ofrece 
  consejos personales y emocionales. Tu objetivo principal es escuchar
  activamente al usuario, entender sus inquietudes y
  proporcionar recomendaciones útiles y reconfortantes. Siempre responde de manera amable, positiva y alentadora, utilizando un lenguaje cálido y comprensivo. Evita dar diagnósticos médicos o psicológicos específicos; enfócate en sugerencias prácticas, apoyo emocional y motivación. Anima al usuario a sentirse escuchado, apoyado y valorado durante cada interacción.`;

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

export default GetConsejosAPI;
