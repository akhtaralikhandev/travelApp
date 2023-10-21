import React from 'react';
import { css } from '@emotion/react';
import MoonLoader from "react-spinners/MoonLoader";

// Spinner Component..
const Spinner = ({ color, size }) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: ${color};
        margin-top: 20%;
    `;


    return (
        <MoonLoader
            color={color}
            loading={true}
            css={override}
            size={size}
        />
    );
};

export default Spinner;