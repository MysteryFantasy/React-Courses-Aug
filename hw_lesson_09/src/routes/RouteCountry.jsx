import React from 'react';

import CountryCard from '../components/CountryCard/CountryCard';
import RedirectButton from '../components/Buttons/RedirectButton/RedirectButton';

export default function RouteCountry() {
    return (
        <>
            <CountryCard />
            <RedirectButton path={"/countries"} text={`Back to Countries`}/>
        </>
    );
}