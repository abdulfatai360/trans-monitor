import React from 'react';
import styled from 'styled-components';
import PaymentStatusTag from './PaymentStatusTag';

const StyledTable = styled.table`
  width: 100%;
  font-size: 1em;

  .TableHeading tr {
    font-size: 0.95em;
    color: #7f8fa4;
    background-color: #eaeef0;

    th {
      padding: 1.5rem 2rem;
    }

    .Hidden {
      opacity: 0;
    }
  }

  .TableBody tr {
    background-color: #fff;
    font-size: 0.95em;
    color: #7f8fa4;
    border-bottom: 1px solid #cccfd4;

    &:last-of-type {
      border-bottom: none;
    }

    th {
      color: #414042;
      padding: 2rem 2.6rem;
      display: flex;
      align-items: center;

      .ItemImage {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.2rem;
        height: 4.2rem;
        border: 1px solid;
        border-radius: 50%;
        margin-right: 2.6rem;
        letter-spacing: 2px;
        font-size: 0.85em;
        color: #fff;
        background-color: #7f8fa4;
      }
    }

    td {
      padding: 2rem;
      vertical-align: middle;
    }

    .Actions {
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      font-size: 1.3em;
      font-weight: bold;
      color: #cccfd4;
      transform: rotate(-90deg);
    }
  }
`;

const Table = ({ data }) => {
  return (
    <StyledTable>
      <thead className="TableHeading">
        <tr>
          <th>Item Type</th>
          <th>Price</th>
          <th>Transcation No</th>
          <th>Time</th>
          <th className="Hidden">Status</th>
          <th className="Hidden">Actions</th>
        </tr>
      </thead>

      <tbody className="TableBody">
        {data.map((data, idx) => (
          <tr key={idx}>
            <th className="TableBody__Item">
              <span className="ItemImage">VW</span>
              <span className="ItemName">{data.itemName}</span>
            </th>
            <td className="Price">{data.price}</td>
            <td className="TxnNo">{data.txnNo}</td>
            <td className="Time">{data.time}</td>
            <td className="Status">
              <PaymentStatusTag status={data.status} />
            </td>
            <td className="Actions">&lt;</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
