import React from 'react';
import './style.css';
import styled from 'styled-components';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function Header(props) {
    const Nav = styled.nav`
        padding: 7px 0 2px 0;
        background-color: hsl(39, 43%, 31%,${props.opacity});
    `;
    
    return (
        <div>
            <header>
                <Nav>
                    <div className="row">
                        <div className="col-1 col-md-2">
                            <a href="#">
                                <Logo/>
                            </a>
                        </div>
                        <div className="col-10 col-md-8">
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
                        </div>
                        <div className="col-1 col-md-2"></div>
                    </div>
                </Nav>
            </header>
        </div>
    );
};

export default Header;