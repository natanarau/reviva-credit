import { Icard } from "components/simple/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IcardProvider {
    children: ReactNode;
}

interface IcardContext {
    listCards: Icard[],
    setListCard?: (listCards: Icard[]) => void;
}

export const CardContexts = createContext<IcardContext>({ listCards: [] });
CardContexts.displayName = "Cards";

export const CardProvider = ({ children }: IcardProvider) => {
    const [listCards, setListCard] = useState<Icard[]>([])

    useEffect(() => {
        fetch('https://reviva-credit-api.herokuapp.com/cards')
            .then(response => response.json())
            .then(responseData => setListCard(responseData))
    }, []);
    return (
        <CardContexts.Provider value={{ listCards, setListCard }}>
            {children}
        </CardContexts.Provider>
    );
}


export const useCardContext = () => useContext(CardContexts);
