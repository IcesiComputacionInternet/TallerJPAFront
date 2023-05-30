interface MessageProps {
    message: string;
}


function Message({message}: MessageProps) {
    return (
    <>
        <h3>{message}</h3>
        <small className="text-muted">By Santiago Arevalo</small>

    </>
    );
}

export default Message;         