import React from 'react';

import { Side } from './row/Side';
import { Main } from './row/Main';


export function Flexgrid() {
    return (
        <div className="row">
            <Side />
            <Main />
        </div>
    )
}  