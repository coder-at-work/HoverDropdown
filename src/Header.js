import React from 'react';

const Header = ({ header, mouseOver }) => {
    return (
        <div>
            <div className='section' onMouseOver={() => mouseOver(header)}>{header}</div>
        </div>
    )
}

export default Header;