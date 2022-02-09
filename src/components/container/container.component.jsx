import React from "react";

import Header from "../header/header.component.jsx";
import FormContainer from "../form/form.component.jsx";
import CustomButton from "../button/button.component.jsx";

import './container.styles.scss';

const Container = () => {
    return (
        <div className="container">
            <Header />

            <FormContainer />

            <CustomButton />
        </div>
    );
}

export default Container;
