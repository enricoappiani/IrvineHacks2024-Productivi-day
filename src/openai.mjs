import OpenAI from "openai";

const openai = new OpenAI({
   apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
 });

 const completion = await openai.chat.completions.create({
   messages: [{ role: "system", content: "You are a helpful assistant." }],
   model: "gpt-3.5-turbo",
 });
 const out_message = (completion.choices[0]['message']['content']);
 console.log(out_message)

export default out_message;

