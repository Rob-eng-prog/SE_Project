import React from 'react';
import {useState} from 'react';
export const Account = () => {
    const [name, Setname] = useState('');
    useEffect(() => {
        Setname(localStorage.getItem("Current_Name"))
    }, [])
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}
