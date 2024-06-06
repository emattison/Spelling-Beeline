import { useState } from 'react';
import './Letter.css';

export default function Letter({children}) {
    const letter = children;
    const [validationClass, setValidationClass] = useState("");

    const letterInput = (e) => {
        if (e.target.value === letter) {
            setValidationClass("valid");
        }
        else {
            setValidationClass("invalid");
        }

        var letters = e.target.parentElement.querySelectorAll("input");

        for (let i = 0; i < letters.length - 1; i++) {
            const element = letters[i];
            
            if (element === e.target) {
                letters[i+1].focus();
            }
        }
    };

    return (<input className={validationClass} type="text" maxLength="1" onInput={letterInput} />);
}