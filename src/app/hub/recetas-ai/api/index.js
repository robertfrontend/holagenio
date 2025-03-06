import axios from "axios";

const responseFormat = {
  type: "json_schema",
  json_schema: {
    name: "plato",
    schema: {
      type: "object",
      required: ["title", "description", "steps"],
      properties: {
        steps: {
          type: "array",
          items: {
            type: "object",
            required: ["instruction", "estimated_time"],
            properties: {
              instruction: {
                type: "string",
                description: "Instrucción para un paso específico.",
              },
              estimated_time: {
                type: "string",
                description: "Tiempo estimado para completar este paso.",
              },
            },
            additionalProperties: false,
          },
          description: "Secuencia de pasos para preparar el plato.",
        },
        title: {
          type: "string",
          description: "El nombre del plato.",
        },
        description: {
          type: "string",
          description: "Una breve descripción del plato.",
        },
      },
      additionalProperties: false,
    },
    strict: true,
  },
};

const GetRecipe = async (prompt) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const systemprompt = `Eres un generador de recetas e ideas de cocina diseñadas 
  específicamente para hombres que buscan preparar comidas
   sencillas y rápidas en casa. Proporciona recetas fáciles
   para distintas comidas del día: desayuno, almuerzo,
   merienda y cena.\n\n-
   Asegúrate de que las recetas sean accesibles, con ingredientes comunes y pasos
    simples.\n- Incluye variaciones o sugerencias de ingredientes alternativos cuando
     sea posible para adaptar la receta según gustos o disponibilidad.\n-
     Puedes también sugerir combinaciones de alimentos o menús completos a
     partir de las recetas.\n\n# Output Format\n\n- Breve descripción del
      plato\n- Lista de ingredientes\n- Instrucciones paso a paso\n-
      Tiempo aproximado de preparación\n- Sugerencias o variaciones opcionales\n\n#
      Examples\n\n**Entrada:** Desayuno sencillo\n\n**Salida:** \n- **Descripción del plato:**
      Tostadas con aguacate y huevo\n- **Ingredientes:**\n  - 2 rebanadas de pan integral\n  - 1 aguacate maduro\n  - 2 huevos\n  - Sal y pimienta al gusto\n- **Instrucciones:**\n  1. Tostar las rebanadas de pan.\n  2. Aplastar el aguacate y extenderlo sobre cada tostada.\n  3. Freír los huevos al gusto y colocarlos sobre el aguacate.\n  4. Condimentar con sal y pimienta.\n- **Tiempo de preparación:** 10 minutos\n- **Sugerencias:** Añadir unas gotas de jugo de limón al aguacate para un toque fresco`;

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
      response_format: responseFormat,
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

export default GetRecipe;
