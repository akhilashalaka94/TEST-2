import React from "react";

import "./components/header/header.styles.scss";

const label= "hello";
const Header = () => {
    return (
        <div className={'header'}>{label}</div>
    )
}

export default Header;
