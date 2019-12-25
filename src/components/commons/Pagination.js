import React from 'react';
import styled from 'styled-components';

const StyledPagination = styled.p`
  border: 1px solid #ced0da;
  border-radius: 2px;

  span {
    display: inline-block;
    padding: 0.4rem 1.5rem;
    user-select: none;
  }

  .Previous,
  .Next {
    cursor: pointer;
  }

  span[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    background-color: lightgray;
  }

  .Previous {
    border-right: 1px solid #ced0da;
  }

  .Pages {
    padding: 0;

    span {
      border-right: 1px solid #ced0da;
      cursor: pointer;
    }

    .active-page {
      background-color: #1875f0;
      color: #fff;
    }
  }
`;

const Pagination = ({ itemsCount, pageSize, currentPage, onPagination }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = [];

  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }

  return (
    <StyledPagination>
      <span
        className="Previous"
        disabled={currentPage == 1}
        onClick={() => onPagination(currentPage - 1)}
      >
        Previous
      </span>
      <span className="Pages">
        {pages.map(page => (
          <span
            key={page}
            className={page === currentPage ? 'active-page' : ''}
            onClick={() => onPagination(page)}
          >
            {page}
          </span>
        ))}
      </span>
      <span
        className="Next"
        disabled={currentPage == pagesCount}
        onClick={() => onPagination(currentPage + 1)}
      >
        Next
      </span>
    </StyledPagination>
  );
};

export default Pagination;
