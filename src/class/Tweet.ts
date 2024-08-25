import { BaseId, replies } from "../base";
import { User } from "./User";

export type typeTweet = "Normal" | "Reply";

export class Tweet extends BaseId {
  private _user: User;
  private _content: string;
  private _typeTweet: typeTweet;
  private _likes: Set<User> = new Set<User>(); // --> Rastreia quais usuários curtiram o tweet
  private _tweetPai: Tweet | null; // Tweet pai (para replies)

  constructor(
    user: User,
    content: string,
    typeTweet: typeTweet,
    tweetPai: Tweet | null = null
  ) {
    super();
    this._user = user;
    this._content = content;
    this._typeTweet = typeTweet;
    this._tweetPai = tweetPai;
  }

  // _________________________ ADICIONA UMA RESPOSTA AO TWEET _________________________

  reply(content: string, user: User): void {  // Certifique-se de que o nome é 'reply'
    if (content.length === 0) {
      console.log("Eiii! Escreva alguma coisa");
      return;
    }

    const replyTweet = new Tweet(user, content, "Reply", this);
    replies.push(replyTweet); // Insere a resposta na lista global de replies
    console.log(`Novo comentário: ${content}`);
  }

  // _________________________ ADICIONA UM LIKE AO TWEET _________________________

  like(user: User): void {
    if (this._likes.has(user)) {
      // --> has verifica elementos no Set | Set armazena valores únicos
      console.log(`${user.getUsername()} já curtiu este tweet.`); // --> Verifica likes duplicados
      return;
    }

    this._likes.add(user);
    console.log(`${user.getUsername()} curtiu o tweet: "${this._content}"`);
  }

  // _________________________ MOSTRA TWEETS E LIKES _________________________

  show(): void {
    console.log(`@${this._user.getUsername()}: ${this._content}`);

    const totalLikes = this._likes.size;

    if (totalLikes === 1) {
      const [userLike] = Array.from(this._likes);
      console.log(`@${userLike.getUsername()} curtiu`);
    } else if (totalLikes > 1) {
      const [userLike] = Array.from(this._likes);
      console.log(
        `${userLike.getUsername()} e mais ${totalLikes - 1} usuários curtiram`
      );
    }

    this.showReplies(); // Exibe as respostas do tweet
  }

  // _________________________ MOSTRA AS RESPOSTAS DO TWEET _________________________

  showReplies(): void {
    const totalReplies = replies.filter(
      (reply) => reply.getTweetPai() === this
    );
  
    totalReplies.forEach((reply) => {
      console.log(`> @${reply.getUser().getUsername()}: ${reply.getContent()}`);
    });
  }
  
  // _________________________ MÉTODOS GETTERS _________________________

  getUser(): User {
    return this._user; // --> Obtém o usuário que criou o tweet
  }

  getTweetPai(): Tweet | null {
    return this._tweetPai; // --> Obtém o tweet pai
  }

  getContent(): string {
    return this._content;
  }
}
