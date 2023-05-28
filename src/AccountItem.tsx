interface Props{
    accountNumber: string;
    balance: number;
}

export default function({accountNumber, balance}: Props){
    return(
        <div style={{
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "lightgray",
        }}>
            <h1>Account Number: {accountNumber}</h1>
            <h2>Balance: {balance}</h2>
        </div>
    )
}