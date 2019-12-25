import React from 'react';
import styled from 'styled-components';
import { paymentStatus } from '../../data/paymentData';

const StyledPaymentStatusTag = styled.span`
  display: inline-block;
  padding: 1rem 1.2rem;
  min-width: 150px;
  border: 1px solid #cccfd4;
  border-radius: 30px;
  text-transform: capitalize;
  font-size: 0.85em;
  color: ${props =>
    paymentStatus.find(item => item.name === props.status)['color']};

  span {
    display: inline-block;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    margin-right: 1rem;
    background-color: ${props =>
      paymentStatus.find(item => item.name === props.status)['color']};
  }
`;

const PaymentStatusTag = ({ status }) => {
  return (
    <StyledPaymentStatusTag status={status}>
      <span></span> {status}
    </StyledPaymentStatusTag>
  );
};

export default PaymentStatusTag;
