interface Props{
    message: string;
}

export default function Message({message}: Props){
    return (<>
    <h1>{message}</h1>
    <small className="text-muted">By Mateo Rada</small>
    </>
    )
}