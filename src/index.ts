import { User } from "./class/User";
import { Tweet } from "./class/Tweet";
import { replies, tweets } from "./base";

console.log();
console.log('_______________________ CRIAR USUÁRIOS _______________________');
console.log();
const user01 = new User('Michele Kopper', '@michelek', 'michelekopper@gmail.com', '12345')
console.log(user01);

const user02 = new User('Theodoro Luis', '@theodoro', 'theodoro@gmail.com', '67891')
console.log(user02);

const user03 = new User('André Immig', '@andrei', 'andreimmig@gmail.com', '101112')
console.log(user03);




console.log();
console.log('_______________________ CRIAR TWEETS _______________________');
console.log();

const tweet01 = new Tweet(user01, 'Meu primeiro recadinho', 'Normal')
console.log(tweet01);

const tweet02 = new Tweet(user02, 'Olá, Mi... como vai?', "Reply", tweet01)
console.log(tweet02);

const tweet03 = new Tweet(user03, 'Seja bem-vinda, Michele', "Reply", tweet01)
console.log(tweet03);




console.log();
console.log('_______________________ CURTIR TWEETS _______________________');
console.log();

tweet01.like(user02)
tweet01.like(user03)




console.log();
console.log('_______________________ MOSTRAR TWEETS _______________________');
console.log();

console.log('Tweets do user01:');
user01.showTweets()

console.log('user01');
user01.showFeed()




