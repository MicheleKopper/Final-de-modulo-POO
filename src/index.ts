import { User } from "./class/User";
import { Tweet } from "./class/Tweet";

console.log("_______________________ CRIAR USUÁRIOS _______________________");
const user01 = new User(
  "Michele Kopper",
  "@michelek",
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
  "@andrei",
  "andreimmig@gmail.com",
  "101112"
);
console.log(user01);
console.log(user02);
console.log(user03);

console.log("_______________________ CRIAR TWEETS _______________________");
const tweet01 = new Tweet(user01, "Meu primeiro recadinho", "Normal");
const tweet02 = new Tweet(user02, "Olá, Mi... como vai?", "Reply", tweet01);
const tweet03 = new Tweet(user03, "Seja bem-vinda, Michele", "Reply", tweet01);

user01.sendTweet(tweet01);
user02.sendTweet(tweet02);
user03.sendTweet(tweet03);
console.log(tweet01);
console.log(tweet02);
console.log(tweet03);

console.log("_______________________ CURTIR TWEETS _______________________");
tweet01.like(user02);
tweet01.like(user03);

console.log("_______________________ MOSTRAR TWEETS _______________________");
console.log("Tweets do user01:");
user01.showTweets();

console.log("_______________________ MOSTRAR FEED _______________________");
console.log("Feed do user01:");
user01.showFeed();

console.log(
  "_______________________ MOSTRAR RESPOSTAS AO TWEET _______________________"
);
tweet01.showReplies();

console.log(
  "_______________________ SEGUIR USUÁRIOS E MOSTRAR FEED _______________________"
);
user01.follow(user02);
user01.follow(user03);
console.log("Feed do user01 após seguir outros usuários:");
user01.showFeed();

console.log(
  "_______________________ RESPONDER AO TWEET _______________________"
);
tweet01.replay("Obrigado, Theodoro!", user01);
console.log("Respostas ao tweet01:");
tweet01.showReplies();
