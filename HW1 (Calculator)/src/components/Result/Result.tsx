import './result.css'
const Result = (props: IProps) => {
    return(
    <div className="result">
        <span>{props.expresion}</span>
        <span>{props.result}</span>
    </div>
    )
}

interface IProps {
    expresion: string
    result: string;
}
export default Result;