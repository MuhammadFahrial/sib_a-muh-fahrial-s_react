import fetch from 'node-fetch';
// Promise ----------------------------------------------------------------
// fetch('https://fake-tweets-api.herokuapp.com/posts')
//     .then(response => {
//         return response.json()
//     }).then(tweets => {
//         return tweets.filter(tweet => {
//             return tweet.rts > 50
//         })
//     }).then(tweets => {
//         return tweets.filter(tweet => {
//             return tweet.rts > 50
//         })
//     }).catch(err => {
//         console.error(err)
//     })

// Implicit Return
fetch('https://fake-tweets-api.herokuapp.com/posts')
.then(response => response.json())
// .then(tweets => tweets.filter(tweet => stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
.then(tweets => {
    let tweetsLength = tweets.length
    console.log('Banyaknya Data ' + tweetsLength)
})
.catch(err => {
    console.error(error)
})

// // New Promise
// setTimeout(() => {
//     console.log('Tick')
// }, 1000)

// const doSomething = function(){
//     return new Promise((resolve, reject) => {
//         /*
//         TODO: try to do something asynchronously and resolve or reject according to operation result
//         */
//     })
// }

// // Call doSomething and receive a Promise as return
// let doIt = doSomething()

// // Wait for the Promise to get resolved....
// doIt.then(response => {
//     // use response
// })

// doIt.catch(error => {
//     //Deal with error
// })

// const setTimeoutPromise = (duration) => 
//     new Promise((resolve, reject) => {
//         setTimeout(resolve, duration)
//     })

//     setTimeoutPromise(1000).then(() => 
//     console.log('Tick'))