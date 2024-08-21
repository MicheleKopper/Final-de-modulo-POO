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

  replay(content: string, user: User): void {
    if (content.length === 0) {
      // --> Verifica se foi escrito algo
      console.log("Eiii! Escreva alguma coisa");
      return;
    }

    const replayTweet = new Tweet(user, content, "Reply");
    replies.push(replayTweet); // --> Insere a resposta na lista de replies
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

  // _________________________ MOSTRA O TWEET COM LIKE _________________________

  show(): void {
    console.log(`@${this._user.getUsername()}: ${this._content}`);

    const totalLikes = this._likes.size;

    if (totalLikes === 1) {
      const [userLike] = this._likes;
      console.log(`@${userLike.getUsername()} curtiu`);
    } else if (totalLikes > 1) {
      const [userLike] = this._likes;
      console.log(
        `@${userLike.getUsername()} e mais ${totalLikes - 1} usuários curtiram`
      );
    }

    this.showReplies(); // Exibe as respostas do tweet
  }

  // _________________________ MOSTRA AS RESPOSTAS DO TWEET _________________________

  showReplies(): void {
    if (replies.length === 0) {
      console.log("Que pena! Sem nenhuma resposta");
      return;
    }

    console.log("Respostas:");
    replies.forEach((reply) => {
      console.log(`> @${reply.getUser().getUsername()}: ${reply._content}`);
    });
  }

  // _________________________ MÉTODOS GETTERS _________________________

  getUser(): User {
    return this._user; // --> Obtém o usuário que criou o tweet
  }

  gettweetPai(): Tweet | null {
    return this._tweetPai; // --> Obtém o tweet pai
  }
}
