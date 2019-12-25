import React, { useState } from 'react';
import styled from 'styled-components';
import Table from './commons/Table';
import Pagination from './commons/Pagination';
import PaymentFilterGroup from './commons/PaymentFilterGroup';
import { paymentData } from '../data/paymentData';
import { paginate } from '../utils/paginate';

const StyledPaymentHistory = styled.div`
  h2 {
    font-size: 36px;
    line-height: 48px;
    color: #262626;
  }

  .PaymentFooter {
    margin-top: 3.5rem;
    color: #000;
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const PaymentHistory = () => {
  const [dataset, setDataset] = useState(paymentData);
  const [filteredBy, setFilteredBy] = useState('all');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const renderedDataset = () => {
    const filteredDataset =
      filteredBy === 'all'
        ? dataset
        : dataset.filter(item => item.status === filteredBy);

    const searchedDataset = searchTerm.trim().length
      ? filteredDataset.filter(item =>
          item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : filteredDataset;

    const paginatedDataset = paginate(searchedDataset, currentPage, pageSize);

    return {
      count: searchedDataset.length,
      data: paginatedDataset,
    };
  };

  const firstItem = (currentPage - 1) * pageSize + 1;
  const lastItem = (currentPage - 1) * pageSize + pageSize;

  return (
    <StyledPaymentHistory>
      <h2>Payments</h2>

      <PaymentFilterGroup
        dataCount={renderedDataset().count}
        searchTerm={searchTerm}
        setCurrentPage={setCurrentPage}
        onOffsetChange={setPageSize}
        onFilterByStatus={setFilteredBy}
        onFilterBySearch={setSearchTerm}
      />

      <Table data={renderedDataset().data} />

      <div className="PaymentFooter">
        <p>
          Showing {firstItem} to {lastItem} of {renderedDataset().count} entries
        </p>
        <Pagination
          itemsCount={renderedDataset().count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPagination={setCurrentPage}
        />
      </div>
    </StyledPaymentHistory>
  );
};

export default PaymentHistory;
