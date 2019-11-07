import { useState } from 'react';

const useCountStrikes = () => {

    const [strike, setStrike] = useState(0);

    // setStrike (strike + 1);
    if (strike > 2){
        return setStrike (strike + 1)
    } else {
        return setStrike (0)
    }
    // if strike is less than 2 add 1 strike. If it's more than 2 then reset the state to 0.

}

export default useCountStrikes;