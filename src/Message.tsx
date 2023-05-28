interface Props{
    message:string;
}


function Message({message}:Props){
    return <h1>{message}</h1>;
}

function Message1(){
    return (
    <>
    <h1>Hello world</h1>
    <small className="text-muted">By Angelica Corrales</small>
    </>
    );
}
export default Message;