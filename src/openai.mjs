import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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'
});

async function main(blah) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: blah }],
    model: "gpt-3.5-turbo",
  });
  const out_message = completion.choices[0]['message']['content'];
  const arr = out_message.split("\n")
  const list = []
  const info = []
  for(const x of arr){
    if(x.indexOf(":") >= 0){
      list.push(x.split(":")[0])
      info.push(x.split(":")[1])
    }
  }
  console.log("\n")
  for(const x of list){
    console.log(x)
  }
  console.log("\n")
}

main("My schedule is: wake up 8 am, play league to 12pm, go to class to 1pm, eat lunch which was Jamaican Jerk, do homework from 2pm to 5pm, eat dinner which was Jamaican Jerk (I love Jamaican Jerk), then play league for 5 hours, then homework from 11pm to 3 am, sleep at 3 am. Can you point out any bad habits in my schedule");