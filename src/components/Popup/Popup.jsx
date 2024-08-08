import React from 'react';
import './Popup.css'; 

const Popup = ({ message, closePopup }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h1>{message}</h1>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
};

export default Popup;