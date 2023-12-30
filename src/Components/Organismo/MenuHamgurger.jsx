import { NavLink } from "react-router-dom";
import { LinksArray, SecondarylinksArray, ToggleTema } from "../../index";
import styled from "styled-components"; 
import { v } from "../../Styles/Variables";
import { useState } from "react";

const MenuHamgurger = () => {
  const [click, setClick] = useState(false);

  return (
    <Container>
      <nav>
        <section>
          <div className="hamburgerMenu" onClick={() => setClick(!click)}>
            {/* <input id="checkbox" type="checkbox" /> */}
            <label
              className={click ? "toggle active" : "toggle"}
              htmlFor="checkbox"
            >
              <div id="bar1" className="bars"></div>
              <div id="bar2" className="bars"></div>
              <div id="bar3" className="bars"></div>
            </label>
          </div>
        </section>
        <Menu $click={click.toString()}>
          {LinksArray.map(({ icon, label, to }) => (
            <div
              className="LinkContainer  "
              key={label}
              onClick={() => setClick(!click)}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <Divider />
          {SecondarylinksArray.map(({ icon, label, to }) => (
            <div
              className="LinkContainer  "
              key={label}
              onClick={() => setClick(!click)}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <div className="togg">
            <ToggleTema />
          </div>
          <Divider />
        </Menu>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.colorsubtitlecard};
  background-color: ${({ theme }) => theme.body};
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;

    .hamburgerMenu {
      position: fixed;
      top: 2rem;
      z-index: 100;

      #checkbox {
        display: none;
      }

      .toggle {
        position: relative;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transition-duration: 0.3s;
        &.active {
          transform: rotate(-90deg);

          #bar2 {
            transform: translateY(14px) rotate(60deg);
            margin-left: 0;
            transform-origin: right;
            transition-duration: 0.3s;
            z-index: 2;
          }

          #bar1 {
            transform: translateY(28px) rotate(-60deg);
            transition-duration: 0.3s;
            transform-origin: left;
            z-index: 1;
          }
        }
      }

      .bars {
        width: 100%;
        height: 4px;
        background-color: rgb(253, 255, 243);
        border-radius: 5px;
        transition-duration: 0.3s;
      }

      /* #checkbox:checked + .toggle .bars {
            margin-left: 13px;
          } */

      #checkbox:checked + .toggle #bar2 {
        transform: translateY(14px) rotate(60deg);
        margin-left: 0;
        transform-origin: right;
        transition-duration: 0.3s;
        z-index: 2;
      }

      #checkbox:checked + .toggle #bar1 {
        transform: translateY(28px) rotate(-60deg);
        transition-duration: 0.3s;
        transform-origin: left;
        z-index: 1;
      }

      #checkbox:checked + .toggle {
        transform: rotate(-90deg);
      }
      /* #checkbox:checked + .toggle #bar3 {
            transform: rotate(90deg);
            transition-duration: .3s;
            transform-origin:right;
          } */
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  z-index: 10;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: ${({ theme }) => `rgba(${theme.bodyRgba}, 0.85)`};
  backdrop-filter: blur(3px);
  transform: ${(props) =>
    props.$click == "true" ? "translateY(0)" : "translateY(1000%)"};
  transition: all 0.3s ease;

  .LinkContainer {
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }

    .Links {
      width: 100vw;
      display: flex;
      align-items: center;
      text-decoration: none;
      height: 80px;
      color: ${({ theme }) => theme.text};
      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
    }
  }

  .togg {
    display: flex;
    justify-content: start;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;

export default MenuHamgurger;
