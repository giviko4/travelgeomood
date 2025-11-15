// /frontend/src/components/Footer.jsx

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-8 border-t border-gray-200">
            <div className="container mx-auto px-6 text-center text-gray-500">
                © {new Date().getFullYear()} TRAVEL. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;