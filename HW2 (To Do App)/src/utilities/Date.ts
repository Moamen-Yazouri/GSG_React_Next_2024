const MONTHES: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const localeFormattedDate: string = date.toLocaleDateString('en-US');
const day = localeFormattedDate.split("/")[1];
const month = date.getMonth();
const returnDate = (): string => {
    if(month < MONTHES.length && month >= 0) {
        return `Date: ${day}, ${MONTHES[month]}`;
    }
    else {
        return "Invalied Month";
    }
}
export default returnDate;