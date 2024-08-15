import { Tweet } from "./class/Tweet";
import { User } from "./class/User";
import { randomUUID } from "crypto"; // Cria Ids automático a cada nova instância


// Usuário
export const user: User[] = []

export abstract class BaseId {
    private _id: string

    constructor() { 
        this._id = randomUUID()
    }
}


// Seguir usuário - Follow user
export const followUser: User[] = []

// Usuários seguindo
export const following: User[] = []



// Tweets
export const tweets: Tweet[] = []
export const replies: Tweet [] = []

// Lista de curtidas
export const likes: Tweet [] = []