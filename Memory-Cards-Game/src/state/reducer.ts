import { Elevels, ICard } from "../types/@types";
import createGameBoard from "../utils/createGameBoard";

export interface IState {
    cards: ICard[];
    moves: number;
    openCards: ICard[];
}

export type Action = 
    {type: "INIT", payload: {level: Elevels}} |
    {type: "FLIP_CARD", payload: {id: number, index: number}} |
    {type: "HIDE_MISMATCHES", payload: {level: Elevels}};

export const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {
        case "INIT" : {
            return {...state, cards: createGameBoard(action.payload.level)} ;
        }
        case "FLIP_CARD" : {
            if(state.openCards.includes(state.cards[action.payload.index])) {
                return state;
            }
            let openCards = [...state.openCards, state.cards.find((_, index) => index == action.payload.index)!];
            let cards: ICard[] = [...state.cards]; 
            if(openCards.length == 2) {
                cards = state.cards.map((c) => c.id == openCards[1].id ? {...c, visible: true} : c );
                if(openCards[0].id == openCards[1].id) {
                    openCards = [];
                }
            }
            else {
                cards[action.payload.index].visible = true;
            }
            return{...state, cards, openCards}
        }
        case "HIDE_MISMATCHES": {
            if(state.openCards[0].id !== state.openCards[1].id) {
                setTimeout(() => {
                    
                    return {
                        ...state,
                        cards: state.cards.map((c) => c.id == state.openCards[0].id || state.openCards[1].id ? {...c, visible: false} : c)
                    };
                }, 2000)
            }
            else {
                return state;
            }
        }
        default: return state;
    }
}