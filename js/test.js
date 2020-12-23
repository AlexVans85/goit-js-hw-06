// const numbers = [1,2,3,4,5]

// const summ = numbers.reduce((acc, value) => acc + value, 0);

// console.log(summ);

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];


const x = tweets.reduce(function(like, tweet) {
    return like + tweet.likes
}, 0)

console.log(x);




// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, -0)
// console.log(likes);

// const countLikes = tweets => 
//     tweets.reduce((totalLikes, tweet) => totalLikes + tweet.Likes, 0);
// console.log(countLikes(tweets));

// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets)); 