import React from 'react';
import './Toast.css';

export const Toast = ({ message, type, isVisible, onClose }) => {
    console.log('Toast render:', { message, type, isVisible });
    
    if (!isVisible) return null;

    return (
        <div className={`toast toast-${type}`}>
            <div className="toast-content">
                <div className="toast-icon">
                    {type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
                </div>
                <div className="toast-message">{message}</div>
                <button className="toast-close" onClick={onClose}>×</button>
            </div>
        </div>
    );
};