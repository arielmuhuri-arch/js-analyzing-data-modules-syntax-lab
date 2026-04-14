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

// Example usage
const group1 = ["Lincon", "Ariel"];
const group2 = ["Alvin", "Charity"];
const group3 = ["Kerry"];

console.log(mergeUsernames(group1, group2, group3));
// ["alice", "bob", "charlie", "diana", "eve"]

console.log(combineUsers(group7, group10, group11));
// {
//   users: ["Henry", "Ariel", "Eva", "Shello", "Bosco"],
//   merge_date: "4/14/2026"
// }

module.exports = {
    mergeUsernames,
    combineUsers
};
