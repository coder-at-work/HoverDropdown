import React, { useState } from 'react';
import { Data } from './Data';
import Header from './Header';
import ListView from './ListView';

const Display = () => {
    const [title, setTitle] = useState('');
    return (
        <div className='container'>
            {
                Object.keys(Data).map((entry, index) => (
                    <div className='dropdown_wrapper'>
                        <Header key={index} header={entry} mouseOver={(header) => setTitle(header)} />
                        {
                            title === entry && <ListView data={Data[title]} />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Display;