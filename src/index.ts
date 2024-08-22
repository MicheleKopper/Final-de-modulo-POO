import { User } from "./class/User";
import { Tweet } from "./class/Tweet";

console.log();
console.log("_______________________ CRIAR USUÁRIOS _______________________");
console.log();

const user01 = new User(
  "Michele Kopper",
  "@michele",
  "michelekopper@gmail.com",
  "12345"
);
const user02 = new User(
  "Theodoro Luis",
  "@theodoro",
  "theodoro@gmail.com",
  "67891"
);
const user03 = new User(
  "André Immig",
  "@andre",
  "andreimmig@gmail.com",
  "101112"
);
const user04 = new User(
    "Bella Kopper",
    "@bella",
    "bellak@gmail.com",
    "456789"
);
const user05 = new User(
    "Matheus Kopper",
    "matheus",
    "matheus@gmail.com",
    "123789"
);

console.log(user01);
console.log(user02);
console.log(user03);
console.log(user04);
console.log(user05);





console.log();
console.log("_______________________ CRIAR TWEETS _______________________");
console.log();

const tweet01 = new Tweet(user01, "Meu primeiro recadinho", "Normal");
const tweet02 = new Tweet(user02, "Olá, Mi... como vai?", "Reply", tweet01);
const tweet03 = new Tweet(user03, "Seja bem-vinda, Michele", "Reply", tweet01);

user01.sendTweet(tweet01);
user02.sendTweet(tweet02);
user03.sendTweet(tweet03);

console.log('------> USER 01 | MICHELE <------');
console.log(tweet01);
console.log();

console.log('------> USER 02 | THEODORO <------');
console.log(tweet02);
console.log();

console.log('------> USER 03 | ANDRÉ <------');
console.log(tweet03);



console.log();
console.log("_______________________ CURTIR TWEETS _______________________");
console.log();

tweet01.like(user02);
tweet01.like(user03);
tweet03.like(user03)




console.log();
console.log("_______________________ MOSTRAR TWEETS _______________________");
console.log();


console.log('------> TWEETS | MICHELE <------');
user01.showTweets();

console.log();
console.log('------> TWEETS | THEODORO <------');
user02.showTweets();

console.log();
console.log('------> TWEETS | ANDRÉ <------');
user03.showTweets();




console.log();
console.log("_______________________ MOSTRAR FEED _______________________");
console.log();

console.log('------> FEED | MICHELE <------')
user01.showFeed();

console.log();
console.log('------> FEED | THEODORO <------');
user02.showFeed();

console.log();
console.log('------> FEED | ANDRÉ <------');
user03.showFeed();



console.log();
console.log("_______________________ MOSTRAR RESPOSTAS AO TWEET _______________________");
console.log();

tweet01.showReplies();




console.log("_______________________ SEGUIR USUÁRIOS E MOSTRAR FEED _______________________");
console.log();

user01.follow(user02);
user01.follow(user03);
console.log("Feed do user01 após seguir outros usuários:");
user01.showFeed();




console.log("_______________________ RESPONDER AO TWEET _______________________");
console.log();

tweet01.replay("Obrigado, Theodoro!", user01);
console.log("Respostas ao tweet01:");
tweet01.showReplies();
