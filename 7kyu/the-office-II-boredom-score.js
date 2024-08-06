// DESCRIPTION:
// Every now and then people in the office moves teams or departments. 
//Depending what people are doing with their time they can become more or less boring. 
//Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, 
//and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'


//SOLUTION:

function boredom(staff) {
    let team = Object.values(staff);
    let count = 0;
    for (let i = 0; i < team.length; i++) {
        if (team[i] == 'accounts') {
            count += 1
        } else if (team[i] == 'finance') {
            count += 2
        } else if (team[i] == 'canteen') {
            count += 10
        } else if (team[i] == 'regulation') {
            count += 3
        } else if (team[i] == 'trading' || team[i] == 'change') {
            count += 6
        } else if (team[i] == 'IS') {
            count += 8
        } else if (team[i] == 'retail') {
            count += 5
        } else if (team[i] == 'cleaning') {
            count += 4
        } else {
            count += 25
        }
    }
    return count <= 80 ? 'kill me now' : count >= 100 ? 'party time!!' : 'i can handle this'
}