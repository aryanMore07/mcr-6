import React, { useContext } from 'react';
import './landingPage.css';
import { DataContext } from '../../contexts/DataContext';
import { Button } from '@mui/material';

const LandingPage = () => {

    const { state, dispatch, filterData } = useContext(DataContext);

    const { cuisineData } = state;

    return (
        <div className='landing-page-div'>
            <header className='landindPage-header'>
                <h1>Food Ordering App</h1>
                <h3>Select Your Cuisine:</h3>
                <div className='select-btns'>
                    {
                        cuisineData.map(({ name }, index) => {
                            return (
                                <div className='btns' key={index}>
                                    <Button variant='contained' onClick={() => {
                                        dispatch({ type: 'USER_INPUT', payload: name })
                                    }}>{name}</Button>
                                </div>
                            )
                        })
                    }
                </div>
            </header>
            <div className='restuarants-list'>
                {
                    filterData.map((restuarant) => {
                        const { id, name, menu } = restuarant
                        return (
                            <div className='menu-card' key={id}>
                                <h2>{name}</h2>
                                <div className='menu-items'>
                                    {
                                        menu.map((item, index) => {
                                            const { name, imgSrc, price, qty } = item
                                            return (
                                                <div className='menu-details' key={index}>
                                                    <img src={imgSrc} alt={name} className='menu-imgs' />
                                                    <div style={{paddingLeft: '15px'}}>
                                                        <p><b>{name}</b></p>
                                                        <p>Rs {price} for {qty}</p>
                                                        <p>{restuarant.name}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <br />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LandingPage;
