import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import {
  MyRoutes,
  Light,
  Dark,
  Sidebar,
  ThemeContext,
  MenuHamgurger,
} from "./index";
import { useContext, useEffect, useState } from "react";
import { Device } from "../src/Styles/Responsive";

function App() {
  const { theme } = useContext(ThemeContext);
  const themeStyle = theme === "light" ? Light : Dark;
  const [open, setOpen] = useState(localStorage.getItem("sidebarOpen") === "true");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("sidebarOpen", open.toString());
  }, [theme, open]);
 
  return (
    <ThemeProvider theme={themeStyle}>
      <Container className={open ? "active" : ""}>
        <section className="ContentSidebar">
          {<Sidebar state={open} setState={() => setOpen(!open)} />}
        </section>
        <section className="ContentMenuHamburger">
          <MenuHamgurger />
        </section>
        <section className="ContentRoutes">
          <MyRoutes />
        </section>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};

  .ContentSidebar {
    display: none;
  }

  .ContentMenuHamburger {
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active{
    grid-template-columns: 220px 1fr
    }
    .ContentSidebar {
      display: initial;
    }
  
    .ContentMenuHamburger {
      display: none;
    }
  }

  .ContentRoutes{
    grid-column: 1
    width:100%;
    @media ${Device.tablet} {
      
    }
  }
`;

export default App;
