import { Elevels, ICard } from "../types/@types";

const creatGameBoard = (level: Elevels): ICard[] => {
    let cards: ICard[] = Array.from({length: level * level})
    .map((card, index) =>  ({ 
        solved: false,
        visible: false, 
        id: index % 2 == 0 ? index + 1 : index, 
        image: `../assets/p1.png`}))
    .sort(() => Math.random() - 0.5);
    return cards;
}
export default creatGameBoard;