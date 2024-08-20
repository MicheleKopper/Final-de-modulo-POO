import { Tweet } from "./class/Tweet";
import { User } from "./class/User";
import { randomUUID } from "crypto"; // Cria Ids automático a cada nova instância


// ----------------- USUÁRIO -----------------
// Usuário
export const user: User[] = []

export abstract class BaseId {
    private _id: string

    constructor() {
        this._id = randomUUID()
    }

    get id(): string {
        return this._id
    }
}

// Seguir usuário - Follow user
export const followUser: User[] = []

// Usuários seguindo
export const following: User[] = []


// ----------------- TWEETS -----------------
// Tweets
export const tweets: Tweet[] = []
export const replies: Tweet[] = []


// ----------------- LIKE -----------------
