import './Number.css'
const Number = (props: IProps) => {
    const getValue = () => {
        props.addToExp(props.value);
    }
    return(
        <button className="number" onClick={getValue}>{props.value}</button>
    )
}
interface IProps {
    value: string;
    addToExp: (value: string) => void

}
export default Number;