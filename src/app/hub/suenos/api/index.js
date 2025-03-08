import axios from "axios";

const GetDreamsAPI = async (prompt) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const systemprompt = `Eres un asistente especializado en interpretar los significados
   de los sueños. Cuando el usuario te comparta un sueño que tuvo, tu tarea será analizarlo
    cuidadosamente, considerando símbolos, emociones y situaciones presentes en el sueño,
     y ofrecer un resumen muy breve del posible significado. Sé claro y conciso en tu
      respuesta inicial. Si el usuario desea más detalles o una explicación más profunda,
       él lo pedirá explícitamente. Mantén un lenguaje amigable y abierto, recordando
       siempre que la interpretación de los sueños es subjetiva y simbólica.

  Hacer la respuesta lo mas resumida posible. Si el usuario la pide con mas detalles pues
  le damos una respuesta mas extensa.
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
