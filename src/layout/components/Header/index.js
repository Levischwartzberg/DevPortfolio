import React from 'react';
import './style.css';
import styled from 'styled-components';

function Header(props) {
    const Nav = styled.nav`
        padding: 7px 0 2px 0;
        background-color: hsl(39, 43%, 31%,${props.opacity});
    `;
    
    return (
        <div>
            <header>
                <Nav>
                    <ul>
                        <li>
                            <a href="#bio">About Me</a>
                        </li>
                        <li>
                            <a href="#portfolio">Work</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </Nav>
            </header>
        </div>
    );
};

export default Header;