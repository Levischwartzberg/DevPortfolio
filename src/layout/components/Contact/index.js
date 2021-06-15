import React from 'react';
import './style.css';
import { AiFillInstagram, AiOutlineGithub } from 'react-icons/ai';

function Contact(props) {
    return (
        <div id="contact">
            <h2 id="contact-head"> Contact Me</h2>
            <section class="contact" id="contactme"> 
                <div class="info">
                    <ul>
                        <li>
                            <a href="mailto:levischwartzberg@gmail.com"> Email: Levischwartzberg@gmail.com </a>
                        </li>
                        <li>
                            <text> Phone Number: 612-963-0400 </text>
                        </li>
                        <li>
                            <a className="instagram" rel="noopener" href="https://instagram.com/levischwartzberg">
				                <AiFillInstagram /> Instagram: @levischwartzberg
			                </a>
                        </li>
                        <li>
                            <a className="github" rel="noopener" href="https://github.com/levischwartzberg">
                                <AiOutlineGithub /> Github: @levischwartzberg
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Contact;