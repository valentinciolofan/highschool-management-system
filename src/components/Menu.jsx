import React, { useState } from 'react';


const Menu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCanvas = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <button onClick={toggleCanvas}>Menu</button>
            <div className={`offCanvasMenu ${isOpen ? 'open' : ''}`}>
                {children}  
          </div>
            <div className={`offCanvasBackdrop ${isOpen ? 'open' : ''}`} onClick={toggleCanvas}></div>
        </>
    );
};

export default Menu;