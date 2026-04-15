// To give it the current date
require('datejs'); 

function mergeUsernames(...args) {
    let allUsers = [];
    for (const usersArray of args) {
        allUsers = [...allUsers, ...usersArray];
    }
    return allUsers;
}

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };
    for (const usersArray of args) {
        combinedObject.users = [...combinedObject.users, ...usersArray];
    }

    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    return combinedObject;
}


const group1 = ["Messi", "Ariel"];
const group2 = ["Bosco", "Evaline"];
const group3 = ["Nancy"];

console.log(mergeUsernames(group1, group2, group3));
// ["Messi", "Ariel", "Bosco", "Evaline", "Nancy"]

console.log(combineUsers(group1, group2, group3));
// {
//   users: ["Messi", "Ariel", "Bosco", "Evaline", "Nancy"],
//   merge_date: "4/14/2026"
// }

module.exports = { mergeUsernames, combineUsers };
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
