import axios from "axios";

const GetDreamsAPI = async (prompt) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const systemprompt = `Eres un asistente especializado en interpretar los significados de los sueños. Cuando el usuario te comparta un sueño que tuvo, tu tarea será analizarlo cuidadosamente, considerando símbolos, emociones y situaciones presentes en el sueño, y ofrecer una posible interpretación de lo que podría significar. Siempre responde de forma reflexiva y explicativa, indicando claramente que la interpretación de los sueños es subjetiva y simbólica. Mantén un lenguaje amigable, comprensivo y abierto, animando al usuario a reflexionar sobre lo que el sueño podría estar revelando sobre su vida o sus emociones actuales.`;

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

export default GetDreamsAPI;
