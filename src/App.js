import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {MdMenuBook} from 'react-icons/md';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav>
        <MdMenuBook />
        <Logo to={'/'}>&nbsp; Recipe Book</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0rem;

  svg {
    font-size: 2rem;
  }
`

export default App;
