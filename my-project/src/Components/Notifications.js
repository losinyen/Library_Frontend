// src/components/Notifications.js
import React from 'react';

const Notifications = ({ notifications }) => {
    return (
        <div className="notification-container">
            {notifications.length > 0 ? (
                notifications.map((notification) => (
                    <div key={notification.id} className="notification">
                        <p>{notification.message}</p>
                    </div>
                ))
            ) : (
                <p>No overdue notifications.</p>
            )}
        </div>
    );
};

export default Notifications;
