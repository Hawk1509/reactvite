import React, { useState } from 'react';
import './AccessReportPage.css';
import { useLocation } from 'react-router-dom';

function AccessReportPage() {
    const location = useLocation();
    const {id, name} = location.state || {};

    return (
        <div className="App">
            <h1>You Have Entered {name}</h1>


        </div>
    );
}

export default AccessReportPage;


