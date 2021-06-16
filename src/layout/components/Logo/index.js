import React from 'react';
import './style.css';
import styled from 'styled-components';
import LTS from '../../../images/LTS.png';

function Logo() {
    const Img = styled.img`
        max-height: 30px;
        max-width: 30px;
        display: inline-block;
        margin-left: 20px;
    `;

    return (
        <div className="lts">
            <Img src={LTS} alt="LTS logo"/>
        </div>
    );
}

export default Logo;