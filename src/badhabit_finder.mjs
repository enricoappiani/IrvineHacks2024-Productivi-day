import main from './openai.mjs'

/*
const user_schedule = {};

const test_activities = ['smoke', 'drugs', 'alcohol', 'bang head', 'eat bad food', 'sing', 'paint', 'code', 'swim', 'hike', 'meditate', 'yoga', 'draw', 'play', 'study', 'explore', 'travel', 'volunteer', 'garden', 'cycle', 'photograph', 'listen', 'learn', 'create'];
const test_times = ['9AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '12AM', '10AM', '11AM','12PM', '1PM', '4PM', '3PM', '2PM', '5PM', '6PM','7PM', '8PM', '9PM', '10PM', '11PM'];

for (let i = 0; i < test_times.length; i++) {
    user_schedule[test_times[i]] = test_activities[i];
}

bad_habit_find(user_schedule)
*/

export default async function bad_habit_find(user_schedule){
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
    const bad_schedule = "A person's typicaly daily schedule is as follows: " + times + ". Can you provide a 1-2 sentences MAX of the bad habits and changes? (OR ELSE >:O)";
    const bad_habits = main(bad_schedule);
    //bad_habits.then((res) => (console.log(res)));
    return bad_habits;
}



