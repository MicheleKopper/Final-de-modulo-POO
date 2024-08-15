import { User } from "./class/User";
import { Tweet } from "./class/Tweet";
import { replies, tweets } from "./base";


console.log('_______________________ USUÁRIO _______________________');

// Criar 
const user01 = new User('Michele Kopper', '@michelek', 'michelekopper@gmail.com', '12345')
console.log(user01);

const user02 = new User('Theodoro Luis', '@theodoro', 'theodoro@gmail.com', '67891')
console.log(user02);

const user03 = new User('André Immig', '@andrei', 'andreimmig@gmail.com', '101112')
console.log(user03);




console.log();

console.log('-----> SEGUIR NOVO USER <-----');
user01.follow(user02) // Usuário 1 segue Usuário 2

console.log();

console.log('-----> ERRO: SEGUIR MESMO USER <-----');
user01.follow(user02)

console.log();

console.log('-----> ERRO: SEGUIR A SI MESMO <-----');
user01.follow(user01)


// Mostrar feed

user01.showFeed()





console.log();

console.log('_______________________ TWEET _______________________');
const tweet = new Tweet(user01, 'Meu recadinho', 'Normal')
console.log(tweet);

console.log();
console.log('-----> RESPOSTA AO TWEET <-----');

tweet.replay('oiiii, tudo bem?', user03)
tweet.replay('Olá, sim e com vc?', user01)

console.log(replies);




