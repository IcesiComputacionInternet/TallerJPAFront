interface Props {
    accountNumber: string,
    balance: number
}

function Account({accountNumber, balance}: Props){
    return (
        <div style={{padding: '10px'}} key={accountNumber+'1'}>
            <div className="card border-dark mb-3" style={{ maxWidth: '18rem'}} key={accountNumber+'2'}>
            <div className="card-header" key={accountNumber+'3'}>Account</div >
            <div className="card-body text-dark" key={accountNumber+'4'}>
                <p className="card-text" key={accountNumber+'5'}>Account number: {accountNumber}</p>
                <p className="card-text" key={accountNumber+'6'}>balance: {balance}</p>
            </div>
        </div>
        </div>

    );
}

export default Account;