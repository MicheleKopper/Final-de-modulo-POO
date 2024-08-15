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

    // Enviar tweet
    sendTweet(tweet: Tweet): void {
        tweets.push(tweet)
    }

    // Seguir (usuário) ... followUser = Seguir usuário | following = seguindo
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















    // Mostrar feed
    showFeed(): Tweet[] {

        let feed: Tweet[] = []
        return feed
    }

    // // Mostrar tweets
    // showTweets(): Tweet [] {

    // }
}