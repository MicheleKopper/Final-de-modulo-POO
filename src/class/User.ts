import { Tweet } from "./Tweet";
import { BaseId, followUser, tweets } from "../base";

export class User extends BaseId {
  private _name: string;
  private _username: string;
  private _email: string;
  private _password: string;
  private _following: User[] = []; // Lista de usuários seguidos

  constructor(name: string, username: string, email: string, password: string) {
    super();
    this._name = name;
    this._username = username;
    this._email = email;
    this._password = password;
  }

  // _________________________ ENVIAR TWEETS _________________________

  sendTweet(tweet: Tweet): void {
    tweets.push(tweet);
  }

  // _________________________ SEGUIR USUÁRIO _________________________

  // followUser = Seguir usuário | following = seguindo

  follow(user: User): void {
    if (user === this) {
      // --> Verifica se está seguindo a si mesmo
      console.log("Tá viajando? Não é possível seguir a si mesmo");
      return;
    }

    if (this._following.includes(user)) {
      // Verifica se já está seguindo aquele usuário
      console.log(`Oppa, passarinho! Você já segue ${user.getUsername()}`);
      return;
    }

    this._following.push(user); // Adiciona o usuário à lista de seguidos
    followUser.push(user); // Adiciona o usuário à lista global de seguidos
    console.log(
      `Uhull ${this.getUsername()}, agora você segue ${user.getUsername()}`
    );
  }

  // _________________________ MOSTRAR FEED _________________________

  showFeed(): void {
    // Tweets do usuário
    console.log(`Tweets do próprio usuário ${this.getUsername()}:`);
    tweets
      .filter((tweet) => tweet.getUser() === this)
      .forEach((tweet) => tweet.show());

    // Tweets dos usuários que o usuário segue
    console.log(`Tweets dos usuários que ${this.getUsername()} segue:`);
    tweets
    .filter((tweet) => followUser.includes(tweet.getUser()))
    .forEach((tweet) => tweet.show());
  }

  // _________________________ MOSTRAR TWEETS _________________________

  showTweets(): void {
    const userTweets = tweets.filter((tweet) => tweet.getUser() === this); // --> Filtra os tweets do usuário atual
    console.log(`Tweets de ${this.getUsername()}:`);

    userTweets.forEach((tweet) => tweet.show()); // --> Itera os tweets filtrados e exibe
  }

  // _________________________ MÉTODOS GETTERS _________________________

  // Método para obter o nome de usuário
  // Este método na classe User retorna o nome de usuário. Isso é usado para exibir mensagens sobre quem curtiu o tweet.
  getUsername(): string {
    return this._username;
  }

  getFollowing(): User[] {
    return this._following; // Retorna a lista de usuários seguidos
  }
}
