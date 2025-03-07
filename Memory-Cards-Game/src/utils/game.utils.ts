import { Elevels, ICard } from "../types/@types";

export const createGameBoard = (level: Elevels): ICard[] => {
    let cards: ICard[] = Array.from({length: level * level})
    .map((card, index) =>  ({
        solved: false,
        visible: false, 
        id: index % 2 == 0 ? index + 1 : index, 
        revealed: false,
        image: `https://api.clipart.com/img/previews/education-${index}.jpg`}))
    .sort(() => Math.random() - 0.5);
    return cards;
}
export const checkFinished = (cards: ICard[]) => {
    return cards.every((c) => c.revealed);
}