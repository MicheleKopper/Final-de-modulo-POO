import { Tweet } from "./Tweet"
import { BaseId, followUser, following, tweets } from "../base";

export class User extends BaseId {

    private _name: string
    private _username: string
    private _email: string
    private _password: string

    constructor(name: string, username: string, email: string, password: string) {

        super()
        this._name = name
        this._username = username
        this._email = email
        this._password = password
    }

    // _________________________ ENVIAR TWEETS _________________________

    sendTweet(tweet: Tweet): void {
        tweets.push(tweet)
    }




    // _________________________ SEGUIR USUÁRIO _________________________

    // followUser = Seguir usuário | following = seguindo

    follow(user: User): void {
        if (user === this) { // --> Verifica se está seguindo a si mesmo
            console.log('Tá viajando? Não é possível seguir a si mesmo');
            return
        }

        if (followUser.includes(user)) { // --> Verifica se já está seguindo aquele user
            console.log(`Oppa, passarinho! Você já segue ${user._username}`);
            return
        } else { // --> Inclui o user na lista
            followUser.push(user)
            console.log(`Uhull ${this._username}, agora você segue ${user._username} `);
        }
    }




    // _________________________ MOSTRAR FEED _________________________

    showFeed(): void {
        
        // Tweets do usuário
        console.log(`Tweets do próprio usuário ${this.getUsername()}:`);
        tweets.filter(tweet => tweet.getUser() === this).forEach(tweet => tweet.show());

        // Tweets dos seguidores
        console.log(`Tweets dos usuários que ${this.getUsername()} segue:`);
        tweets.filter(tweet => followUser.includes(tweet.getUser())).forEach(tweet => tweet.show());
    }




    // _________________________ MOSTRAR TWEETS _________________________

    showTweets(): {

    }

    // Método para obter o nome de usuário
    // Este método na classe User retorna o nome de usuário. Isso é usado para exibir mensagens sobre quem curtiu o tweet.
    getUsername(): string {
        return this._username;
    }

}