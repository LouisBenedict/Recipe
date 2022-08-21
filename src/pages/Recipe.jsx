import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {
    const API_KEY = '7a6db4399b0e4eeea22c526903d9b465';

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async() => {
        const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return (
    <DetailWrapper>
        <>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </>
        <Info>
            <Button onClick={() => setActiveTab('ingredients')} className={activeTab === 'ingredients' ? 'active' : 'null'}>Ingredients</Button>
            <Button onClick={() => setActiveTab('instructions')} className={activeTab === 'instructions' ? 'active' : 'null'}>Instructions</Button>
            {activeTab === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                </div>
            )}
            {activeTab === 'ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>)}
                </ul>
            )}
            
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    display: flex;
    margin-top: 10rem;
    margin-bottom: 5rem;
    
    .active {
        background: linear-gradient(35deg, white, ghostwhite);
    }

    ul {
        margin-top: 2rem;
    }

    li {
        line-height: 2.5rem;
        font-size: 1.2rem;
    }

    h2 {
        margin-bottom: 2rem;
    }
`

const Button = styled.button `
    padding: 1rem 2rem;
    background: lightblue;
    color: black;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 700;
`

const Info = styled.div`
    margin-left: 10rem;
`

export default Recipe