import React from 'react';
import './Rickmorty.css'

const RickMorty = (props) => {
    const {id,name,status,species,gender,image} = props

    return (
        <div className={'box-2'}>
            <div>
                <div><img src={image}/></div>

                <h3>(Id:{id}) Name: {name}</h3>
                <div>Status - {status}, {species}</div>
                <div>Gender: {gender}</div>
            </div>
        </div>
    );
};

export default RickMorty;