// CustomCheckbox.js
import React from 'react';
import './CustomCheckbox.css'; // Import CSS file for styling

function CustomCheckbox({ checked, onChange }) {
    return (
        <label className="custom-checkbox">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="checkmark"></span>
        </label>
    );
}

export default CustomCheckbox;
