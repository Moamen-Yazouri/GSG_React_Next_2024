export enum Elevels  {
    EASY= 2,
    MEDIUM = 4,
    HARD= 6, 
}
export interface ICard {
    image: string,
    id: number,
    visible: boolean,
    revealed: boolean,
}