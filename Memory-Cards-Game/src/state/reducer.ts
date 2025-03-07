import { Elevels, ICard } from "../types/@types";
import {createGameBoard} from "../utils/game.utils";

export interface IState {
    cards: ICard[];
    moves: number;
    openCards: number[];
    initialized: boolean;
}

export type Action = 
    {type: "INIT", payload: {level: Elevels}} |
    {type: "REPLAY"} |
    {type: "FLIP_CARD", payload: {index: number}} |
    {type: "HIDE_MISMATCHES"};

export const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {
        case "INIT" : {
            console.log("INIT");
            
            return {...state, cards: createGameBoard(action.payload.level), initialized: true} ;
        }
        case 'REPLAY' : {
            return {...state, initialized: false};
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
                    cards[openCards[0]].revealed = true;
                    cards[openCards[1]].revealed = true;
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