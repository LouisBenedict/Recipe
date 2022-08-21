import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles} from 'react-icons/gi';
import {SiFoodpanda} from 'react-icons/si';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <div>
        <List>
            <SLink to={"/cuisine/Chinese"}>
                <SiFoodpanda />
                <h4>Chinese</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>Western</h4>
            </SLink>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
        </List>
    </div>
  )
}


const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(darkgray, gold);
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    transform: scale(0.75);

    svg {
        color: black; 
        font-size: 2rem;
    }

    &.active {
        background: linear-gradient(to right, lightblue, gold);
    }

    h4 {
        padding-top: 3px;
        color: black;
        font-size: 0.8rem;
    }

`

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

export default Category