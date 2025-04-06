import React from 'react';
import './scrollup.css';

const ScrollUp = () => {

    window.addEventListener("scroll", function () {
        const ScrollUp = document.querySelector(".scrollup");

        // when the scroll is higher than 560 viewpoint height, and the show-scroll class to a tag with the scroll-top class
        if(this.scrollY >= 560) ScrollUp.classList.add("show-scroll");
        else ScrollUp.classList.remove("show-scroll");
    })

  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp
