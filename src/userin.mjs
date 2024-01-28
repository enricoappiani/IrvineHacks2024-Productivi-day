import main from './openai.mjs'
export default async function schedule_changer(activities_list){
    const times_list = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

    for (let i = 0; i < times_list.length; i++) {
        times_list[i] += ': ' + activities_list[i];
    }
    const times = times_list.join(', ');

    const bad_schedule = "A person's typicaly daily schedule is as follows: " + times + ". Return, in the exact format of the schedule I just gave you, an updated schedule that replaces only (this is very important) the unhealthy activities with healthy/neutral ones. DO NOT, UNDER ANY CIRCUMSTANCE, replace any of the neutral or healthy activities, ONLY THE UNHEALTHY ONES. Ideally make sure the new schedule has 8 hours of sleep, 3 meals a day, and at least 1 hour of exercise, as well as perhaps some self-care being going to bed. Return a realistic schedule that prioritizes one's well-being.";
    const healthy_schedule = main(bad_schedule);
    const bad_habits = main("A person's typicaly daily schedule is as follows: " + times + "Return, in the same format of time: activity, a list of only the bad habits in the schedule I just gave you.");
    //healthy_schedule.then((res) => console.log(res));
return healthy_schedule, bad_habits;
}