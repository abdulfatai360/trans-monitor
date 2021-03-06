import React from 'react';
import styled from 'styled-components';
import { MagnifyGlass, Bell } from '../assets/Icons';

const StyledHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0.5rem 7rem;
  padding-left: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;

  .AppLogo {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 1.5em;
    color: #1875f0;
  }

  .SearchBox--App {
    margin-left: -30rem;
    display: flex;
    width: 450px;
    align-items: center;

    input {
      padding: 0.5rem 1rem;
      margin-left: 0.5rem;
      flex-grow: 1;
    }
  }

  .SecondaryLinks {
    display: flex;
    align-items: center;
    line-height: 1;

    li {
      margin-left: 5rem;
      padding: 0.5rem 1rem;

      &:hover {
        cursor: pointer;
        color: #252e36;
      }
    }
  }

  .SecondaryLinks--Notification {
    position: relative;

    span {
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      background-color: #1860ec;
      position: absolute;
      top: -4px;
      right: 0;
    }
  }

  .SecondaryLinks--User {
    text-align: right;
    display: flex;
    align-items: center;

    .UserAvatar {
      display: inline-block;
      width: 55px;
      height: 55px;
      margin-left: 1.2rem;
      border-radius: 50%;

      img {
        max-width: 100%;
        border-radius: inherit;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <span className="AppLogo">
        <a href="/">TransMonitor</a>
      </span>

      <form className="SearchBox--App">
        <MagnifyGlass />
        <input type="search" placeholder="Search..." />
      </form>

      <ul className="SecondaryLinks">
        <li className="SecondaryLinks--Support">Support</li>
        <li className="SecondaryLinks--Faq">FAQ</li>
        <li className="SecondaryLinks--Notification">
          <Bell />
          <span>8</span>
        </li>
        <li className="SecondaryLinks--User">
          <span>
            <small>Hello</small>
            <br />
            Oluwaleke Ojo
          </span>
          <span className="UserAvatar">
            <img src="/img/sample-avatar.png" alt="Sample User Avatar" />
          </span>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
