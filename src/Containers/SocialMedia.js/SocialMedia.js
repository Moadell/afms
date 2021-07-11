import React from 'react'
import './SocialMedia.css'

function SocialMedia() {
    return (<>
        <div className="footer-icon-sidebar">
            <ul className="navbar-nav">
               {/*  <li className="nav-item inline-block">
                    <a href="https://github.com/mopolar" target="_blank" rel="noopener noreferrer" aria-label="Github" className="nav-link text-github"><i
                        className="fa fa-github"></i></a></li> */}
                <li className="nav-item inline-block">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="nav-link"><i
                        className="fa fa-facebook"></i></a>
                </li>
                <li className="nav-item inline-block"><a href="https://www.instagram.com" aria-label="Insagram" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fa fa-instagram"
                ></i></a>
                </li>
                <li className="nav-item inline-block"><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-link"><i className="fa fa-linkedin"
                ></i></a>
                </li>
            </ul>
        </div>


    </>
    )
}

export default SocialMedia
