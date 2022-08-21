import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const event_handler = (e) => {
        e.preventDefault();
        navigate('/searched/'+ input);
    };

  return (
    <FormStyle onSubmit={event_handler}>
        <div>
            <FaSearch />
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    
    input {
        width: 100%;
        outline: none;
        border-radius: 1.5rem;
        background: linear-gradient(35deg, white, ghostwhite);
        font-size: 1.5rem;
        border: 1px solid black;
        padding: 1rem 3rem;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
    }

    div {
        position: relative;
        width: 100%;
    }
`

export default Search