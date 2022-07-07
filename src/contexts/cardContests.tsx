import { Icard, Itransactions, Iuser } from "components/simple/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IcardProvider {
    children: ReactNode;
}

interface IcardContext {
    listCards: Icard[],
    setListCard?: (listCards: Icard[]) => void;
    listUser: Iuser[],
    setListUser?: (listUser: Iuser[]) => void;
    listTransactions: Itransactions[],
    setListTransactions?: (transactions: Itransactions[]) => void;
}

export const CardContexts = createContext<IcardContext>({ listCards: [], listUser: [], listTransactions: [] });
CardContexts.displayName = "Cards";

export const CardProvider = ({ children }: IcardProvider) => {
    const [listCards, setListCard] = useState<Icard[]>([]);
    const [listUser, setListUser] = useState<Iuser[]>([]);
    const [listTransactions, setListTransactions] = useState<Itransactions[]>([]);

    useEffect(() => {
        fetch('https://reviva-credit-api.herokuapp.com/cards')
            .then(response => response.json())
            .then(responseData => setListCard(responseData))
    }, []);

    useEffect(() => {
        fetch('https://reviva-credit-api.herokuapp.com/users')
            .then(responseUser => responseUser.json())
            .then(responseUserData => setListUser(responseUserData))

    }, []);

    useEffect(() => {
        fetch('https://reviva-credit-api.herokuapp.com/transactions')
            .then(responseTransactions => responseTransactions.json())
            .then(responseTransactionsData => setListTransactions(responseTransactionsData))

    }, []);

    return (
        <CardContexts.Provider value={{ listCards, setListCard, listUser, setListUser, listTransactions, setListTransactions }}>
            {children}
        </CardContexts.Provider>
    );
}


export const useCardContext = () => useContext(CardContexts);
