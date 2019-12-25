import React from 'react';
import styled from 'styled-components';

const StyledPaymentFilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  color: #262626;
  font-size: 0.92em;

  .OffsetSelector {
    color: #1875f0;
    background-color: transparent;
    margin: 0 0.5rem;
    cursor: pointer;
  }

  .PaymentSearch {
    width: 350px;
    margin-left: -40rem;
    background-color: transparent;
    padding: 0.2rem 0.5rem;
    border-bottom: 1px solid #787878;

    &::placeholder {
      font-size: 0.9em;
    }
  }

  .StatusSelector {
    border: 1px solid #ced0da;
    border-radius: 2px;
    padding: 0.5rem;
    margin-left: 2rem;
    margin-right: 20rem;
    cursor: pointer;
  }
`;

const PaymentFilterGroup = ({
  dataCount,
  searchTerm,
  setCurrentPage,
  onOffsetChange,
  onFilterByStatus,
  onFilterBySearch,
}) => {
  return (
    <StyledPaymentFilterGroup>
      <span>
        Show{' '}
        <select
          className="OffsetSelector"
          onChange={e => {
            onOffsetChange(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>{' '}
        out of {dataCount} payments
      </span>

      <form>
        <input
          type="search"
          placeholder="Search payments"
          className="PaymentSearch"
          onChange={e => {
            onFilterBySearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </form>

      <span>
        Show{' '}
        <select
          className="StatusSelector"
          onChange={e => {
            onFilterByStatus(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="reconcilled">Reconcilled</option>
          <option value="un-reconcilled">Un-reconcilled</option>
          <option value="settled">Settled</option>
          <option value="unsettled">Unsettled</option>
        </select>
      </span>
    </StyledPaymentFilterGroup>
  );
};

export default PaymentFilterGroup;
