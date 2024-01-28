import OpenAI from "openai";

export default async function main(word){
const openai = new OpenAI({
   apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
 });

const completion = await openai.chat.completions.create({
  messages: [{ role: "system", content: word}],
  model: "gpt-3.5-turbo",
});
const out_message = completion.choices[0]['message']['content'];
return out_message;
}
 