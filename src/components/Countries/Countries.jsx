import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    {/**visited countries ar moto akhon amra visitedFlags ber karbo ar jonno arekta state 
declare karsi , state jekhane eventHandler sekhane, event handler useEffect ar niche declare kara
hoese visitedCountries ar moto kare*/}

    const [visitedFlags, setVisitedFlags] = useState([])




    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, []);


    const handleVisitedCountry = country => {
        console.log('add this to your visited country')
        {/**jokhon kono state ar moddhe array thake setake push(), pop() kare change kara jabena
    prottek bar notun array banate hobe imean spread operator die copy karte hobe tarpor jetake add karte chao 
oi array ar moddhe bosaia diba tarpor set karte hobe new take */}
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


// ai handleVisitedFlags event handler function k and uporer handleVisitedCountry ai function keo niche
// return ar vitore <Country></Country> component ar vitore pass kare dia hoese and Country.jsx file a props kare
// destructure kara hoese
    const handleVisitedFlags = flag => {
        // console.log('flag adding')
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div> 
            <h3>Countries: {countries.length}</h3>

            {/* visited country */}
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* aikhane loop chalobo and aita dynamic hobe, countries k map karlam and proottek ta 
             country k pelam nam dilam country amra chaile jkono nam dite pari but countries theke country 
             aita meaningful, then tar moddhe Country component dilam and componenet ar vitore akta props nilam
             country name and ar value dilam map kare paoa every county k
             then key missing props jonno warning disse ar jonno key={country.cca3} dite hobe for error ar jonno
             */}
            {/* handleVisitedCountry={handleVisitedCountry} and handleVisitedFlags = {handleVisitedFlags} funncton 2ta k 
            akhane pathano hoese and ar value same dia hoese, tarpor Country,jsx file a ai duita ka destructure kara hoese */}
            
            {/* aikhane visitedFlags gulo dekhano hoese */}
            <div className="flag-container">
                {
                   visitedFlags.map(flag => <img src= {flag}></img>)
                }
            </div>
            
            {/* display countries*/}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags = {handleVisitedFlags}
                        key={country.cca3}
                        country={country}> </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;