// function lastCommit(username){
//     fetch('https://api.github.com/users/vcanizales/events', {headers: {
//             'Authorization': 'token' + GITHUB_API_TOKEN
//         }
//     }).then(response => response.json())
//         .then (events => {
//             console.log(events)
//             console.log(events[0].payload.commits[0].message)
//             console.log(events[0].created_at)
//         })
//         .catch(error => console.log(error));
// }
// console.log(lastCommit());





// const lastCommit = fetch("https://api.github.com/users/vcanizales/events");
//
// Promise.all([lastCommit]).then(function(commits){
//     return Promise.all(commits.map(function(response){
//         return response.json();
//     }));
// }).then(function(data){
//     console.log(data);
// }).then(events => {
//     console.log(events)
//     console.log((events[0].created_at))
//         .catch(error => console.error(error))
// });
// }).then(function(lastOne){
//     return commit[0].date;


// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
// function getUsersLastCommit(username) {
//     fetch(`https://api.github.com/users/${username}/events/public`, {
//         headers: {
//             'Authorization': `token ${GITHUB_API_TOKEN}`
//         }
//     }).then(response => response.json())
//         .then(events => {
//             console.log(events)
//             console.log(events[0].payload.commits[0].message)
//             console.log(events[0].created_at)})
//         .catch(error => console.error(error));
// }

// function lastCommit(username){
//     return fetch(`https://api.github.com/users/${username}/events/public`, {
//     headers: {
//         'Authorization': 'token' + GITHUB_API_TOKEN
//     }
// }).then(response => response.json())
//     .then(events => {
//         const dateOfLastPush = new Date(events[0].created_at).toDateString();
//         console.log(dateOfLastPush);
//         return dateOfLastPush;
//     });
// }
// console.log(lastCommit('vcanizales'));

function getUserLastCommit(username){
    return fetch(`https://api.github.com/users/${username}/events/public`)
        .then(response => response.json())
        .then(events =>{
            return events;
        })
        .catch(error => console.error(error))
}


async function getUserLastCommit(username){
    let response = await fetch(`https://api.github.com/users/${username}`)
    let events = await response.json();
    console.log(events)
}

