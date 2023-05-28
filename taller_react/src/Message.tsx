interface Props{
    message: string;
}


function Message({message}: Props) {
  return (
    <>
        <h3>{message}</h3>
        <small className="text-muted">from la pera</small>
    </>
  );
}

export default Message;