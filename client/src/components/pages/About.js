import React from 'react'
import { AiFillTwitterCircle, AiFillFacebook,AiFillInstagram,AiFillYoutube} from "react-icons/ai";

function About() {
    return (
        <div className="about">
            <div>
            <h2>CUSTOMER SERVICE</h2>
            <ul>
                <li><a href="">Help Center</a></li>
                <li><a href="">Buy on CoinElectro</a></li>
                <li><a href="">Payment methods</a></li>
            </ul>
            </div>
            <div>
            <h2>ABOUT</h2>
            <ul>
                <li><a href="">Who are we</a></li>
                <li><a href="">Privacy policy</a></li>
                <li><a href="">Terms of use</a></li>
            </ul>
            </div>
            <div className="findus">
            <h2>FIND US ON</h2>
            <ul>
                <li><a href=""><AiFillTwitterCircle size="2em" /></a></li>
                <li><a href=""><AiFillFacebook size="2em"/> </a></li>
                <li><a href=""><AiFillInstagram size="2em" /></a></li>
                <li><a href=""><AiFillYoutube size="2em" /></a></li>
            </ul>
            </div>
        </div>
    )
}

export default About
