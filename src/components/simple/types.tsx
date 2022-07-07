export interface Iuser {
    id: number;
    name: string;
}

export interface Icard {
    userId: number;
    id: number;
    brand: string;
    number: number;
    cvv: number;
    limit: number;
    dueDate: number;
}

export interface Itransactions {
    id: number;
    cardId: number;
    value: number;
    description: string;
    date: Date;
}