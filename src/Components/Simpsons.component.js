import React from 'react';
import './Simpsons.css';
const SimpsonsComponent = (props) => {
    const {id, name, status, species, gender, image} = props
    return (
        <div className={'box'}>

            <div className={'left'}>
                <img src={image}/>
            </div>

            <div className={'right'}>
                <h2>{name}</h2>
                <div className={'id_gender'}>
                    Id: {id} - {gender}
                </div>
                <div>{status}</div>
                <div>{species}</div>
            </div>

        </div>
    );
};

export default SimpsonsComponent;