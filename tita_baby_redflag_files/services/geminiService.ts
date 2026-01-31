import { GoogleGenAI, Type } from "@google/genai";
import { GameMode, Scenario } from "../types";

export const fetchAIScenario = async (mode: GameMode): Promise<Scenario | null> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate one relationship scenario for ${mode} in Taglish. It must be relatable to Filipinos (school drama, office politics, or family/marriage issues). 
      Act as "Tita Baby", a sassy, ROASTING Filipino Tita who gives direct, funny, and AGGRESSIVE advice.
      The "wisdom" field MUST be a conversational ROAST in Tagalog directed at the player. 
      Use phrases like "Anak ng tinapa!", "Hoy gising!", "Jusko ineng!", "Ghorl!", "Marupok ka!", "Susmaryosep!", and "Gigil mo si Tita!".
      Make it sound like a sermon during a family reunion.
      The scenario (text) should be tricky - not immediately obvious if it's red or green.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING, description: "The scenario description in Taglish." },
            isRedFlag: { type: Type.BOOLEAN, description: "True if red flag, false if green flag." },
            wisdom: { type: Type.STRING, description: "A roasting, conversational, and funny Tagalog sermon from Tita Baby." },
          },
          required: ["text", "isRedFlag", "wisdom"],
        },
      },
    });

    const data = JSON.parse(response.text.trim());
    return { ...data, category: mode };
  } catch (error) {
    console.error("AI Fetch Error:", error);
    return null;
  }
};