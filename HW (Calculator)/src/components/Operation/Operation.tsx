import "./Operation.css";

const Operation = (props: IProps) => {
    const getValue = () => {
        props.addToExp(props.operation)
    }
    return (
        <button className="operation" onClick={getValue}>{props.operation}</button>
    )
}

interface IProps {
    operation: string;
    addToExp: (value: string) => void
}

export default Operation;