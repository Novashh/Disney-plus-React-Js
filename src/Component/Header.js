import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt="disney-logo" />
      </Logo>
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>

        <a href="/">
          <img src="/images/search-icon.svg" alt="" />
          <span>Search</span>
        </a>

        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WatchList</span>
        </a>

        <a href="/">
          <img src="/images/original-icon.svg" alt="" />
          <span>Originals</span>
        </a>

        <a href="/">
          <img src="/images/movie-icon.svg" alt="" />
          <span>Movies</span>
        </a>

        <a href="/">
          <img src="/images/series-icon.svg" alt="" />
          <span>Series</span>
        </a>
      </NavMenu>

      <UserLogin>
        <a href="login">
          <button>Login</button>
        </a>
      </UserLogin>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  overflow-x: hidden;
`;

const Logo = styled.div`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 20px;
    text-decoration: none;
    color: white;
  }

  img {
    height: 20px;
  }

  span {
    font-size: 13px;
    letter-spacing: 1.42px;
  }

  span:hover {
    transform: scale(1.03);
    color: violet;
    position: relative;
  }
  
    @media (max-width: 1000px) {
    a {
      display: none;
    }
  }
`;

const UserLogin = styled.div`
  button {
    width: 60px;
    height: 30px;
    background: white;
    border-radius: 20px;
    color: black;
    cursor: pointer;
  }
  button:hover {
    background: violet;
    transform: scale(1.05);
  }
`;
