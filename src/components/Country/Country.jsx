import { useState } from 'react';
import './country.css'
//nicher line a ({country}) holo akta props  
// nicher country is missing prop validation amra akhon junior developr hisebe atake off kare rakhbo
// kintu pore r seta off karbona ba off kare rakha thik na, off karbo eslintrc cjs file off kare rakbo
// "react/prop-types": "off"  
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country)
    const { name, flags, population, area, cca3 } = country;


    // visited btn ar jonno
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    console.log(handleVisitedCountry)

    return (
        <div className="country">
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            {/* jodi kono event handler ar moddhe parameter pathate chai tahole arrow function die 
          wrapping kare pathate hobe () => handleVisitedCountry(country)  same as handleVisitedFlags too */}
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited && 'I have visited this country.'}

        </div>
    );
};

export default Country;