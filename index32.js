
let current_users = ['eric', 'willie', 'admin', 'erin', 'Ever'];

let new_users = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];

const lowercased_newUser = new_users.map(name => name.toLowerCase());



for (let i = 0; i < current_users.length; i++) {
    if (current_users[i] === lowercased_newUser[i]) {
        console.log(lowercased_newUser[i] + ' already exist.')
    } else {
        console.log("Great, " + lowercased_newUser[i] + ' is still available.')
    }
}


