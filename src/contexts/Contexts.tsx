import { Icard, Itransactions, Iuser } from "components/simple/types";
import { useRouter } from "next/router";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { fetchUser, fetchCard, fetchTransation } from '../services/index';


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
    cardCheck: string | undefined,
    setCardCheck: Dispatch<SetStateAction<string | undefined>>
    currentMonth: number | undefined,
    setCurrentMonth: Dispatch<SetStateAction<number | undefined>>,
    listCardAll: Icard[] | undefined,
    setListCardAll: Dispatch<SetStateAction<Icard[] | undefined>>
}

export const Contexts = createContext<IcardContext>({} as IcardContext);
Contexts.displayName = "DataUsers";

export const CardProvider = ({ children }: IcardProvider) => {
    const router = useRouter()
    const  { id }  = router.query
    const [listUser, setListUser] = useState<Iuser[]>([]);
    const [listCards, setListCard] = useState<Icard[]>([]);
    const [listTransactions, setListTransactions] = useState<Itransactions[]>([]);
    const [cardCheck, setCardCheck] = useState<string>();
    const [currentMonth, setCurrentMonth] = useState<number>();
    const [listCardAll, setListCardAll] = useState<Icard[]>()
   
    useEffect(() => {
        if(id) {
            fetchUser(id)
            .then(res => res.json())
            .then(dataUser => setListUser(dataUser))
            
            fetchCard(id)
            .then(res => res.json())
            .then(dataCard => setListCard(dataCard))

            fetchCardAll(id)
            .then(res => res.json())
            .then(dataCardAll => setListCardAll(dataCardAll))
            
            fetchTransation()
            .then(res => res.json())
            .then(dataTransaction => setListTransactions(dataTransaction))            
        }
    }, [id]);   

    return (
        <Contexts.Provider value={{ listCards, listUser, listTransactions, cardCheck, setCardCheck, currentMonth, setCurrentMonth, listCardAll, setListCardAll }}>
            {children}
        </Contexts.Provider>
    );
}
