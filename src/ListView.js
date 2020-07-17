import React from 'react';

const ListView = ({ data }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {
                data.map((entry, index) => <div key={index} style={{ width: '8rem', padding: '0.5rem', margin: '0.3rem', boxShadow: '2px 2px 3px #c0c0c0' }}>{entry}</div>)
            }
        </div>
    )
}

export default ListView;