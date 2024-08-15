import { BaseId, replies} from "../base"
import { User } from "./User"

export type typeTweet = 'Normal' | 'Reply'

export class Tweet extends BaseId {

    private _user: User
    private _content: string
    private _typeTweet: typeTweet

    constructor(user: User, content: string, typeTweet: typeTweet) {

        super()
        this._user = user
        this._content = content
        this._typeTweet = typeTweet
    }


    // Adiciona uma resposta ao tweet
    replay(content: string, user: User): void {
        if (content.length === 0) { // --> Verifica se foi escrito algo
            console.log('Eiii! Escreva alguma coisa');
            return
        }

       const replayTweet = new Tweet (user, content, 'Reply')
        replies.push(replayTweet) // --> Insere a resposta na lista de replies
        console.log(`Novo comentário: ${content}`);
    }


    // classe a parte replay
    // tweet pai no base
    // tweet com [] de respostas

    // like(user: User): void {

    // }
    
    
    //     likes.push()


    // Like em tweets
    // Deve ser possível para um usuário curtir os tweets de
    // outros usuários.
    // Um tweet (normal ou reply) pode ter 0 ou N curtidas.


    // show(): {}

    // mostrar respostas
    // showReplies(): {}
}
