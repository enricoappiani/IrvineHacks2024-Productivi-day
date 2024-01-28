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