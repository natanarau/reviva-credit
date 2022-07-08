import { Icard, Itransactions, Iuser } from "components/simple/types";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchUser, fetchCard } from 'services/index'

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

export const Contexts = createContext<IcardContext>({ listCards: [], listUser: [], listTransactions: [] });
Contexts.displayName = "DataUsers";

export const CardProvider = ({ children }: IcardProvider) => {
    const router = useRouter()
    const  { id }  = router.query
    const [listUser, setListUser] = useState<Iuser[]>([]);
    const [listCards, setListCard] = useState<Icard[]>([]);
    const [listTransactions, setListTransactions] = useState<Itransactions[]>([]);

    useEffect(() => {
        if(id) {
            fetchUser(id)
            .then(res => res.json())
            .then(dataUser => setListUser(dataUser))

            fetchCard(id)
            .then(res => res.json())
            .then(dataCard => setListCard(dataCard))
        }
    }, [id]);   

    return (
        <Contexts.Provider value={{ listCards, listUser, listTransactions }}>
            {children}
        </Contexts.Provider>
    );
}
