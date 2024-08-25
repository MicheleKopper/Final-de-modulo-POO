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

console.log(user01); // Username: @michele
console.log(user02); // Username: @theodoro
console.log(user03); // Username: @andre
console.log(user04); // Username: @bella
console.log(user05); // Username: @matheus




console.log();
console.log("_______________________ CRIAR TWEETS _______________________");
console.log();

console.log('------> USER 01 | MICHELE <------');
const tweet01 = new Tweet(user01, "A motivação é uma porta que se abre por dentro.", "Normal"); 
user01.sendTweet(tweet01);
console.log(tweet01);

const tweet01a = new Tweet (user01, 'O conhecimento serve para encantar as pessoas, não para humilhá-las',"Normal")
user01.sendTweet(tweet01a)
console.log(tweet01a);


console.log('------> USER 02 | THEODORO <------');
const tweet02 = new Tweet(user02, "Cansaço se cura descansando. Estresse só se cura se houver mudança de rota", "Normal"); 
user02.sendTweet(tweet02);
console.log(tweet02);

const tweet02a = new Tweet(user02, 'Quando estiver no fundo do poço, a primeira coisa a fazer para sair dele é parar de cavar', "Normal")
user02.sendTweet(tweet02a)
console.log(tweet02a);


console.log('------> USER 03 | ANDRÉ <------');
const tweet03 = new Tweet(user03, "Seres humanos são como tapetes. Às vezes, precisam ser sacudidos", "Normal"); 
user03.sendTweet(tweet03);
console.log(tweet03);

const tweet03a = new Tweet(user03, 'Uma das coisas mais perigosas da vida é gente que concorda com você o tempo todo', "Normal")
user03.sendTweet(tweet03a)
console.log(tweet03a);


console.log('------> USER 04 | BELLA <------');
const tweet04 = new Tweet(user04, "O impossível não é um fato: é uma opinião", "Normal"); 
user04.sendTweet(tweet04);
console.log(tweet04);

const tweet04a = new Tweet(user04, 'Coragem é preparo e não mera disposição eufórica', "Normal")
user04.sendTweet(tweet04a)
console.log(tweet04a);


console.log('------> USER 05 | MATHEUS <------');
const tweet05 = new Tweet(user05, "O mundo pertence aos otimistas: os pessimistas são meros espectadores", "Normal"); 
user05.sendTweet(tweet05);
console.log(tweet05);

const tweet05a = new Tweet(user05, 'A justiça precisa ser inteligente, não vingativa', "Normal")
user05.sendTweet(tweet05a)
console.log(tweet05a);




console.log();
console.log("_______________________ RESPONDER TWEETS _______________________");
console.log();

tweet01.reply('Concordo totalmente com essa frase!', user02);
tweet01.reply('Realmente, é uma ótima reflexão!', user03);

tweet02.reply('Excelente ponto de vista!', user03);
tweet02.reply('Precisamos mais de mensagens como esta.', user01);

tweet03.reply('Oi, tudo bem com você?', user04)
tweet03.reply('Sim, tudo certinho comigo. E você como está?', user03)

console.log();
console.log('<<< Exibição de tweets com replies >>>');
console.log();

tweet01.show();
console.log();

tweet02.show();
console.log();

tweet03.show();
console.log();




console.log();
console.log("_______________________ SEGUIR E MOSTRAR LISTA _______________________");
console.log();

console.log('<<< Seguir usuários >>>');
user01.follow(user02);
user01.follow(user03);
user01.follow(user04)

user02.follow(user01)
user02.follow(user04)
user02.follow(user05)

user03.follow(user01)
user03.follow(user02)
user03.follow(user05)

user04.follow(user03)
user04.follow(user05)
user04.follow(user02)

user05.follow(user01)
user05.follow(user02)
user05.follow(user04)




console.log();
console.log('<<< Seguir a si mesmo >>>');
user01.follow(user01)




console.log();
console.log('<<< Liste de usuários seguidos >>>');
console.log('--> Michele Kopper, segue os usuários:');
const following01 = user01.getFollowing();
following01.forEach((user) => {
  console.log(user.getUsername());
});


console.log();
console.log('--> Theodoro Luis, segue os usuários:');
const following02 = user02.getFollowing();
following02.forEach((user) => {
  console.log(user.getUsername());
});


console.log();
console.log('--> André Immig, segue os usuários:');
const following03 = user03.getFollowing();
following03.forEach((user) => {
  console.log(user.getUsername());
});


console.log();
console.log('--> Bella Kopper, segue os usuários:');
const following04 = user04.getFollowing();
following04.forEach((user) => {
  console.log(user.getUsername());
});


console.log();
console.log('--> Matheus Kopper, segue os usuários:');
const following05 = user05.getFollowing();
following05.forEach((user) => {
  console.log(user.getUsername());
});




console.log();
console.log("_______________________ LIKES TWEETS _______________________");
console.log();

tweet01.like(user02); 
tweet01.like(user03);
console.log();
tweet01a.like(user04)
tweet01a.like(user05)
console.log();

tweet02.like(user01)
tweet02.like(user03)
console.log();
tweet02a.like(user04)
tweet02a.like(user05)
console.log();

tweet03.like(user01)
tweet03.like(user02)
console.log();
tweet03a.like(user04)
tweet03a.like(user05)
console.log();

tweet04.like(user01)
tweet04.like(user02)
console.log();
tweet04a.like(user03)
tweet04a.like(user05)
console.log();

tweet05.like(user01)
tweet05.like(user02)
console.log();
tweet05a.like(user03)
tweet05a.like(user04)




console.log();
console.log("_______________________ MOSTRAR TWEETS COM LIKES _______________________");
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
console.log('------> TWEETS | BELLA <------');
user04.showTweets();

console.log();
console.log('------> TWEETS | MATHEUS <------');
user05.showTweets();




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
console.log('------> FEED | BELLA <------');
user04.showFeed();

console.log();
console.log('------> FEED | MATHEUS <------');
user05.showFeed();






