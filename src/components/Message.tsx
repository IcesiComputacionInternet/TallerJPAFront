

interface Props {
    message: string;
}

function Message({message}: Props){
    return <>
    <h1>{message}</h1>
    <small className="text-muted">By jp</small>
    </>
}

export default Message;


