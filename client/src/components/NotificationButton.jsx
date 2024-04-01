'use client';

import axios from "axios";
const baseUrl = "https://notification-sender-server.onrender.com";

const handleClick = async () => {
    try {
        const res = await axios.post(`${baseUrl}/notification/send-notification`);
        if (res.data) {
            alert(res.data.msg);
        }
    } catch (error) {
        console.log(error.message);
    }
};

const NotificationButton = () => {
    return (
        <button onClick={handleClick} className="text-white border border-yellow-500 px-20 sm:px-28 py-2 sm:py-3 rounded-md bg-gradient-to-tl from-red-700 to-yellow-700 font-semibold whitespace-nowrap">Send Notification</button>
    );
}

export default NotificationButton;