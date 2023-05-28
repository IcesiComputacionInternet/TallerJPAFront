interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => {
  return (
    <div>
      <h1>{message}</h1>
      <small className="text-muted">By Juan Palta</small>
    </div>
  );
};

export default Message;
