import main from './openai.mjs'
const user_schedule = {};

const test_activities = ['smoke', 'drugs', 'alcohol', 'bang head', 'eat bad food', 'sing', 'paint', 'code', 'swim', 'hike', 'meditate', 'yoga', 'draw', 'play', 'study', 'explore', 'travel', 'volunteer', 'garden', 'cycle', 'photograph', 'listen', 'learn', 'create'];
const test_times = ['9AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '12AM', '10AM', '11AM','12PM', '1PM', '4PM', '3PM', '2PM', '5PM', '6PM','7PM', '8PM', '9PM', '10PM', '11PM'];

for (let i = 0; i < test_times.length; i++) {
    user_schedule[test_times[i]] = test_activities[i];
}

schedule_changer(user_schedule);

function stringToDictionary(scheduleString) {
    const dictionary = {};
    const activities = scheduleString.split(', ');
    for (const activity of activities) {
        const [time, value] = activity.split(': ');
        dictionary[time] = value;
    }
    return dictionary;
}

export default async function schedule_changer(user_schedule){
    const times_list = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];
    const dict = {};
    const keys = Object.keys(user_schedule);
    for (const time of times_list) {
        for (const key of keys) {
            if (time === key) {
                dict[time] = user_schedule[key];
            }
        }
    }
    //ordered list from 12am to 11pm of activities
    const activities_list = Object.values(dict);
    for (let i = 0; i < times_list.length; i++) {
        times_list[i] += ': ' + activities_list[i];
    }
    
    const times = times_list.join(', ');
    const bad_schedule = "A person's typicaly daily schedule is as follows: " + times + ". Return, in the exact format of the schedule I just gave you, an updated schedule that replaces only (this is very important) the unhealthy activities with healthy/neutral ones. DO NOT, UNDER ANY CIRCUMSTANCE, replace any of the neutral or healthy activities, ONLY THE UNHEALTHY ONES. Ideally make sure the new schedule has 8 hours of sleep, 3 meals a day, and at least 1 hour of exercise, as well as perhaps some self-care being going to bed. Return a realistic schedule that prioritizes one's well-being. ";
    const healthy_schedule = main(bad_schedule);
    healthy_schedule.then((res) => console.log(res));
    const healthy_dict = healthy_schedule.then((res) => stringToDictionary(res));
    healthy_dict.then((res) => console.log(res)); 
    
return healthy_schedule
}


