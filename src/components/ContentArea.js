import React from 'react';
import styled from 'styled-components';

const StyledContentArea = styled.div`
  display: grid;
  grid-column-gap: 3rem;
  grid-row-gap: 3.5rem;
  grid-template-areas:
    'daily-txn-vol daily-txn-val tot-txn-vol tot-txn-val'
    'orders orders orders orders'
    'payments payments payments payments';

  .DailyTransactionVolume,
  .DailyTransactionValue,
  .TotalTransactionVolume,
  .TotalTransactionValue,
  .OrdersDetails,
  .PaymentsTable {
    height: 100px;
    border: 1px solid #eef8fd;
    border-radius: 2px;
    background-color: #fff;
  }

  .DailyTransactionVolume {
    grid-area: daily-txn-vol;
  }

  .DailyTransactionValue {
    grid-area: daily-txn-val;
  }

  .TotalTransactionVolume {
    grid-area: tot-txn-vol;
  }

  .TotalTransactionValue {
    grid-area: tot-txn-val;
  }

  .OrdersDetails {
    grid-area: orders;
  }

  .PaymentsTable {
    grid-area: payments;
  }
`;

const ContentArea = () => {
  return (
    <StyledContentArea>
      <div className="DailyTransactionVolume"></div>
      <div className="DailyTransactionValue"></div>
      <div className="TotalTransactionVolume"></div>
      <div className="TotalTransactionValue"></div>
      <div className="OrdersDetails"></div>
      <div className="PaymentsTable"></div>
    </StyledContentArea>
  );
};

export default ContentArea;
