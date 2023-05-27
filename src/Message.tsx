interface Props{
    message: String
}

export default function Message({message}: Props) {
    return (
        <>
            <h1>{message}</h1>
            <small className="text-muted">By Johan Ricardo</small>
        
        </>
    )
};

