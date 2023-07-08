import React, { useContext } from 'react';
import './singlePage.css';
import { useNavigate, useParams } from 'react-router';
import { DataContext } from '../../contexts/DataContext';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import { Button } from '@mui/material';

const SinglePage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { state } = useContext(DataContext);

    const { data } = state;

    const selectedRestuarant = data.find((restuarant) => restuarant.id === Number(id));
    const calcAvgRating = selectedRestuarant.ratings.reduce((acc, curr, i, arr) => acc + curr.rating / arr.length, 0);

    const { name, address, description, menu, phone } = selectedRestuarant;

    return (
        <div className='single-page-div'>
            <header>
                <div onClick={() => {
                    navigate('/');
                }} style={{ margin: '3rem', cursor: 'pointer' }}>
                    <KeyboardBackspaceSharpIcon />
                </div>
            </header>
            <div className='main-div'>
                <h1>{name}</h1>
                <div className='restuarant-details'>
                    <div>
                        <p className='details-text'>
                            {menu.map(({ name }) => name + ', ')}
                        </p>
                        <p className='details-text'>{address}</p>
                        <p className='details-text'>Average rating: {calcAvgRating}</p> 
                    </div>
                    <div>
                        <Button variant='contained'>Add review</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SinglePage
