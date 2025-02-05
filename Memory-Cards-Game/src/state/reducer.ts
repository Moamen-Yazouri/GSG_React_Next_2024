import { Elevels, ICard } from "../types/@types";
import createGameBoard from "../utils/createGameBoard";

export interface IState {
    cards: ICard[];
    moves: number;
    openCards: number[];
}

export type Action = 
    {type: "INIT", payload: {level: Elevels}} |
    {type: "FLIP_CARD", payload: {index: number}} |
    {type: "HIDE_MISMATCHES"};

export const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {
        case "INIT" : {
            return {...state, cards: createGameBoard(action.payload.level)} ;
        }

        case "FLIP_CARD" : {
            if(state.openCards.includes(action.payload.index)) {
                return state;
            }
            let openCards = [...state.openCards, action.payload.index];
            let cards: ICard[] = [...state.cards]; 
            if(openCards.length == 2) {
                cards[openCards[1]].visible = true;
                if(cards[openCards[0]].id == cards[openCards[1]].id) {
                    openCards = [];
                }
            }
            else {
                cards[action.payload.index].visible = true;
            }
            return{...state, cards, openCards}
        }

        case "HIDE_MISMATCHES" : {
            if(state.cards[state.openCards[0]]?.id !== state.cards[state.openCards[1]]?.id) {
                const cards: ICard[] = [...state.cards];
                cards[state.openCards[0]].visible = false;
                cards[state.openCards[1]].visible = false;
                return{...state, cards, openCards: []};
            }
            else {
                return state;
            }
        }
        default: return state;
    }
}