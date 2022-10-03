const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let moreThan3 = users.filter(function(user){
    return user.languages.length >= 3;
});
console.log(moreThan3);

const emails = users.map(function (item){
    return item.email
});
console.log(emails)

let totalYears = users.reduce(function(tenure, user){
    return user.yearsOfExperience + tenure;
},0);
let averageYears = totalYears/users.length
console.log(averageYears)

let longestEmail = users.reduce(function(longest, user){
    if(longest.length < user.email.length){
        return user.email;
    } else {
        return user;
    }
});
// return longest.length > user.email.length ? longest : user.email;
console.log(longestEmail);

let nameString = users.reduce(function(names, users){
    return `${names} ${users.name}`
}, 'Your instructors are:');
console.log(nameString);

let uniqueLangs = users.reduce((acc, user)=>{
   user.languages.forEach(function(language){
       if(!acc.includes(language)){
           acc.push(language);
       }
   })
    return acc;
},[]);
console.log(uniqueLangs);



