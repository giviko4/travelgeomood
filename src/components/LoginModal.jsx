// /frontend/src/components/LoginModal.jsx

import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-hot-toast';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? 'http://localhost:4000/api/auth/login' : 'http://localhost:4000/api/auth/register';
        const body = isLogin ? { email, password } : { name, email, password };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            if (isLogin) {
                onLoginSuccess(data);
                toast.success(`Welcome back, ${data.user.name}!`);
            } else {
                toast.success('Registration successful! Please sign in.');
                setIsLogin(true); // რეგისტრაციის შემდეგ ავტომატურად გადართე ლოგინზე
            }
        } catch (error) {
            toast.error(error.message || 'Something went wrong.');
        }
    };
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-lg p-8 w-full max-w-sm text-gray-800" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
                    <button onClick={onClose}><IoMdClose size={24} className="text-gray-500 hover:text-gray-800" /></button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="text-sm font-medium text-gray-700">Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                    )}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-blue-500 ml-1 hover:underline">
                        {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;