// Async/Await
fetch('https://api/faketweet.com/tweets')
.then(response => response.json())
.then(tweets => tweets.filter(tweet => stars > 50))
.then(tweets => tweets.filter(tweet => tweet.rts > 50))
.catch(err => {
    console.error(error)
})

// const response = await fetch('https://api/faketweet.com/tweets')
// const tweets = await response.json()
// let tweets = tweets.filter(tweet => tweet.stars > 50)
// tweets = tweets.filter(tweet => tweet.rts > 50)
// console.log(tweets)

// const fetchTweets = async() => {
//     const response = await fetch('https://api/faketweet.com/tweets')
//     const tweets = await response.json()
//     let tweetsA = tweets.filter(tweet => tweet.stars > 50)
//     tweets = tweetsA.filter(tweet => tweet.rts > 50)
//     console.log(tweets)
// }
// fetchTweets()

(async() => {
    const response = await fetch('https://api/faketweet.com/tweets')
    const tweets = await response.json()
    let tweetsA = tweets.filter(tweet => tweet.stars > 50)
    tweets = tweetsA.filter(tweet => tweet.rts > 50)
    console.log(tweets)
})