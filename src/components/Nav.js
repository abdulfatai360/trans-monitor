import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
  padding: 4.3rem 0;
  font-size: 0.9em;
  border-bottom: 2px solid rgba(100, 119, 135, 0.2);

  .Nav__CTA {
    margin-left: 3.5rem;
    padding: 0.9rem 2.5rem;
    border-radius: 30px;
    color: #fff;
    background-color: #27ae60;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;

    &:hover {
      background-color: #0d9446;
      cursor: pointer;
    }
  }

  .PrimaryNav {
    margin-top: 4rem;

    .PrimaryNav__Header,
    .PrimaryNav__Item {
      color: #647787;
    }

    .PrimaryNav__Header {
      margin-bottom: 2rem;
      padding-left: 4.8rem;
    }

    .PrimaryNav__List {
      line-height: 2.3;
    }

    .Payments,
    .Orders {
      margin-left: 4.8rem;
    }

    .PrimaryNav__Item {
      margin-bottom: 3.5rem;

      li {
        margin-bottom: 0.7rem;
        margin-left: -4.8rem;
      }
    }

    .PrimaryNav__Item:first-of-type,
    .PrimaryNav__Item:last-of-type,
    .PrimaryNav__Item li {
      padding-left: 4.8rem;
      position: relative;
      transition: background-color 1s cubic-bezier(0.19, 1, 0.22, 1);

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 4px;
        height: 0;
        background-color: #1875f0;
        transition: height 1s cubic-bezier(0.19, 1, 0.22, 1);
      }

      &:hover {
        cursor: pointer;
        background-color: rgba(24, 117, 240, 0.1);
      }

      &:hover::before {
        height: 100%;
      }
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <button className="Nav__CTA">Generate Invoice</button>
      <section className="PrimaryNav">
        <h2 className="PrimaryNav__Header">Main</h2>

        <ul className="PrimaryNav__List">
          <li className="PrimaryNav__Item Overview">Overview</li>

          <li className="PrimaryNav__Item Payments">
            Payments
            <ul>
              <li>All Payments</li>
              <li>Reconcilled Payments</li>
              <li>Un - Reconcilled Payments</li>
              <li>Manual Settlement</li>
            </ul>
          </li>

          <li className="PrimaryNav__Item Orders">
            Orders
            <ul>
              <li>All Orders</li>
              <li>Pending Orders</li>
              <li>Reconcilled Orders</li>
            </ul>
          </li>

          <li className="PrimaryNav__Item MerchantProfile">Merchant Profile</li>
        </ul>
      </section>
    </StyledNav>
  );
};

export default Nav;
