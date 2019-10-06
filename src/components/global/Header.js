import React,{Fragment} from "react";

import "../../assets/css/Header.css";
import headerIcon from "../../assets/images/github-icon.png";

const Header = () => (
    <Fragment>
        <header id="header">
            Let   
            <img src={headerIcon} alt="github-icon"/>
            talk
        </header>
    </Fragment>
);

export default Header;