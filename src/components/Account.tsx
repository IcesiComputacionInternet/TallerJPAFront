import React from "react";

interface Props {
  number: string;
  balance: string;
}

const Account: React.FC<Props> = ({ number, balance }) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title text-primary">Account</h5>
        <p className="card-text">
          <strong>Number:</strong> {number}
        </p>
        <p className="card-text">
          <strong>Balance:</strong> {balance}
        </p>
      </div>
    </div>
  );
};

export default Account;
