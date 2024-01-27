import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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'
});
async function main() {
  const completion = await openai.chat.completions.create({
    
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  const out_message = completion.choices[0]['message']['content'];
  console.log(out_message);
}

main();
