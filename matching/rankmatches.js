let test = {
        user1: {
            user2: 91,
            user3: 84,
            user4: 81,
            user6: 78,
            user10: 76,
            user9: 73,
            user8: 70,
            user5: 68,
            user7: 51
        },
        user2: {
            user3: 95,
            user10: 93,
            user1: 91,
            user7: 89,
            user4: 85,
            user6: 82,
            user9: 71,
            user5: 68,
            user8: 64
        },
        user3: {
            user2: 95,
            user7: 90,
            user1: 84,
            user8: 83,
            user5: 80,
            user4: 75,
            user6: 70,
            user9: 62,
            user10: 51
        },
        user4: {
            user5: 94,
            user2: 85,
            user1: 81,
            user7: 79,
            user3: 75,
            user9: 74,
            user10: 70,
            user8: 59,
            user6: 55,
        },
        user5: {
            user4: 94,
            user6: 87,
            user3: 80,
            user8: 80,
            user7: 78,
            user9: 71,
            user1: 68,
            user2: 68,
            user10: 60,
        },
        user6: {
            user9: 93,
            user8: 90,
            user5: 87,
            user2: 82,
            user1: 78,
            user3: 70,
            user7: 66,
            user4: 55,
            user10: 50,
        },
        user7: {
            user9: 90,
            user3: 90,
            user2: 89,
            user4: 79,
            user5: 78,
            user6: 66,
            user8: 56,
            user1: 51,
            user10: 50,
        },
        user8: {
            user6: 90,
            user3: 83,
            user5: 80,
            user9: 79,
            user1: 70,
            user2: 64,
            user10: 61,
            user4: 59,
            user7: 56
        },
        user9: {
            user6: 93,
            user7: 90,
            user8: 79,
            user4: 74,
            user1: 73,
            user10: 72,
            user5: 71,
            user2: 71,
            user3: 62,
        },
        user10: {
            user2: 93,
            user1: 76,
            user9: 72,
            user4: 70,
            user8: 61,
            user5: 60,
            user3: 51,
            user7: 50,
            user6: 50
        },
};


let testUsers =  Object.keys(test);
let testUserRankings =  Object.values(test);


//get ranking of all users as array with userId key OBJECT WITH USERID KEYS and VALUES AS ARRAY OF RANKING
let userRankingOrder = {};
for (let index in testUsers){
    userRankingOrder[testUsers[index]] = Object.keys(testUserRankings[index]);
}

let rankingOfUsers = []
for(let currentUser of testUsers){
    let currentUserRanking = [];
    for(let otherUser of testUsers){
        currentUserRanking.push(userRankingOrder[otherUser].indexOf(currentUser));
    }
    rankingOfUsers.push(currentUserRanking)
}

//create empty arrays for all users and their top 3
let results = [];
for (let user of testUsers) {
    results.push([]);
}

console.log('Ranking of Users \n',rankingOfUsers);
//go through each user to be the one proposing 
for (let userIndex in testUsers) {
    for (let foreginUserIndex in testUsers) {
        if (rankingOfUsers[userIndex][foreginUserIndex] !== -1) {
            //want to be my top 3?
            if(results[foreginUserIndex].length < 3){
                //if the foregin user doesnt already have a top 3 add the user
                results[foreginUserIndex].push(userIndex);
            } else {
                //check if asking user is 
            }
        }
    }
}

console.log(results);