export interface Iuser {
    id: number;
    name: string;
}

export interface Icard {
    userId: number;
    id: string;
    brand: string;
    number: number;
    cvv: number;
    limit: number;
    dueDate: number;
    expiresIn: string
}

export interface Itransactions {
    id: number;
    cardId: string;
    value: number;
    description: string;
    date: string;
}