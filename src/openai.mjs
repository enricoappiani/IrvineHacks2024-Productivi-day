//makes call to openai using format: main('input')
import OpenAI from "openai";

const openai = new OpenAI({
   apiKey: "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", 
   dangerouslyAllowBrowser: true
 });

export default async function main(input) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: input }],
    model: "gpt-3.5-turbo",
  });
  const out_message = completion.choices[0]['message']['content'];
 
  return out_message;
}