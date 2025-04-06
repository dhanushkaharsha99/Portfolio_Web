import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Dhana</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/dhanushka-harsha-389875228/" className="home__social-icon" target='_blank'><i class="uil uil-linkedin"></i></a>
                <a href="https://github.com/dhanushkaharsha99" className="home__social-icon" target='_blank'><i class="uil uil-github"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61563691195471" className="home__social-icon" target='_blank'><i class="uil uil-facebook"></i></a>
            </div>

            <span className="footer__copy">&#169; Dhanushka Harsha All Rights Reserved</span>

        </div>
    </footer>
  )
}

export default Footer
