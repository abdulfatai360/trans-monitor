import React from 'react';
import styled from 'styled-components';
import TransactionInfo from './commons/TransactionInfo';
import OrderDetails from './OrderDetails';
import PaymentHistory from './PaymentHistory';
import { transactionData } from '../data/transactionData';

const StyledContentArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-column-gap: 3rem;
  grid-row-gap: 3.5rem;

  /* .DailyTransactionVolume,
  .DailyTransactionValue,
  .TotalTransactionVolume,
  .TotalTransactionValue,
  .OrdersDetails,
  .PaymentHistory {
    height: 200px;
  } */

  .DailyTransactionVolume {
    grid-column: 1 / 2;
    grid-row: 1;
  }

  .DailyTransactionValue {
    grid-column: 2 / 3;
    grid-row: 1;
  }

  .TotalTransactionVolume {
    grid-column: 3 / 4;
    grid-row: 1;
  }

  .TotalTransactionValue {
    grid-column: 4 / 5;
    grid-row: 1;
  }

  .OrdersDetails {
    grid-column: 1 / -1;
    grid-row: 2;
  }

  .PaymentHistory {
    grid-column: 1 / -1;
    grid-row: 3;
  }
`;

const ContentArea = () => {
  return (
    <StyledContentArea>
      <div className="DailyTransactionVolume">
        <TransactionInfo data={transactionData[0]} />
      </div>
      <div className="DailyTransactionValue">
        <TransactionInfo data={transactionData[1]} />
      </div>
      <div className="TotalTransactionVolume">
        <TransactionInfo data={transactionData[2]} />
      </div>
      <div className="TotalTransactionValue">
        <TransactionInfo data={transactionData[3]} />
      </div>
      <div className="OrdersDetails">
        <OrderDetails />
      </div>
      <div className="PaymentHistory">
        <PaymentHistory />
      </div>
    </StyledContentArea>
  );
};

export default ContentArea;
