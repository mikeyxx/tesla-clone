import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [sideBar, setSideBar] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a href="#" key={index}>
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla account</a>
        <HamburgerMenu onClick={() => setSideBar(!sideBar)}>
          <span
            className={
              ("hamburger", sideBar ? "hamburger active" : "hamburger")
            }
          ></span>
        </HamburgerMenu>
      </RightMenu>
      <BurgerMenu className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul>
          {cars &&
            cars.map((car, index) => {
              return (
                <li key={index}>
                  <a href="#">{car}</a>
                </li>
              );
            })}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadstar</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Roadstar</a>
          </li>
          <li>
            <a href="#">Roadstar</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
        </ul>
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  padding: 0 20px;
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 10px;
  }

  @media (max-width: 714px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  text-transform: uppercase;
  margin-right: 18px;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;

const HamburgerMenu = styled.button`
  background-color: transparent;
  border: none;
  position: fixed;
  top: 2.2em;
  cursor: pointer;
  z-index: 100;

  .hamburger {
    display: block;
    position: relative;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    height: 3px;
    width: 2em;
    background-color: #000;
    border: 0;
    border-radius: 1em;
    transition: transform 250ms ease-in-out;
    cursor: pointer;
    transition: transform 0.7s ease-out;
  }

  .hamburger::before,
  .hamburger::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
  }

  .hamburger::before {
    bottom: 6px;
  }

  .hamburger::after {
    top: 6px;
  }
`;

const BurgerMenu = styled.div``;
