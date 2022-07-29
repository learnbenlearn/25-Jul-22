function timeoutFunctionOne() {
    console.log(Date.now()/1000);
}

function timeoutFunctionTwo() {
    console.log(Date.now()/1000);
}

/*console.log(Date.now()/1000);

setTimeout(timeoutFunctionOne, 1000);
console.log('timeoutFunctionOne queued at ' + Date.now()/1000);
setTimeout(timeoutFunctionTwo, 1000);
console.log('timeoutFunctionTwo queued at ' + Date.now()/1000);

let intervalFunc = setInterval(() => {
    console.log('this interval occurred at ' + Date.now()/1000);
}, 1000);

setTimeout(() => {
    clearInterval(intervalFunc);
}, 5000);*/

/* let myPromise = new Promise((resolve, reject) => {
    let a = 'string variable';
    let b = 'string';
    if(a.includes(b)) {
        resolve();
    } else {
        reject();
    }
});

myPromise
    .then((result) => {
        console.log('promise executed successfully');
    })
    .catch((error) => {
        console.log('catch caught error returned by rejected promise');
    })
    .finally(() => {
        console.log('the finally callback function runs whenever the promise is settled');
    })
    */

let url = 'https://www.balldontlie.io/api/v1/games/38';

function invokeFetchWithHandlerMethods() {
    const fetchPromise = fetch(url);
    fetchPromise
        .then(response => {
            return response.json();
        }).then(gameInfo => {
            console.log(gameInfo);
        })
        .catch(error => {
            console.error(error);
        });
}

async function invokeFetchWithAsyncAwait() {
    const fetchPromise = await fetch(url);
    let gameInfo = await fetchPromise.json();
    parseJSON(gameInfo);
}

function parseJSON(gameInfo) {
    console.log(gameInfo);
    let gameDate = new Date(gameInfo.date);
    let homeTeamName = gameInfo.home_team?.full_name;
    let awayTeamName = gameInfo.visitor_team.full_name;
    let homeTeamScore = gameInfo.home_team_score;
    let awayTeamScore = gameInfo.visitor_team_score;

    if(homeTeamScore > awayTeamScore) {
        console.log(`${homeTeamName} beat ${awayTeamName} by a score of ${homeTeamScore} to ${awayTeamScore} on ${gameDate}`);
    } else {
        console.log(`${awayTeamName} beat ${homeTeamName} by a score of ${awayTeamScore} to ${homeTeamScore} on ${gameDate}`)
    }

}

//invokeFetchWithHandlerMethods();
//console.log('fetch API call invoked');

invokeFetchWithAsyncAwait();
console.log('fetch API call invoked with async/await');