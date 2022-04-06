import React, {useState} from 'react';
import styles from './test.module.css';

export const Test = ()=> {
    const [counter, setCounter] = useState(0);
    const [activeStyle, setActive] = useState(false);

    const pushedButton = (e, operator) => {
        e.preventDefault();
        if (operator==="-") {
            setCounter(counter-1);
            setActive(false);
        } else {
            setCounter(counter+1);
            setActive(true);
        }

    };

    return (
        <div  className={activeStyle ? styles.main : styles.active}>
            <div>{counter}</div>
            <button onClick={e=>pushedButton(e,'+')}>Push me+</button>
            <button onClick={e=>pushedButton(e,'-')}>Push me-</button>
        </div>

  )
};