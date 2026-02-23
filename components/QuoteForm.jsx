"use client";
import { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: 'Garage Floor',
        consent: false,
        honeypot: '' // Hidden spam field
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Anti-spam Honeypot Check
        if (formData.honeypot) {
            console.log("Spam detected. Dropping submission.");
            setStatus('success'); // Fake success for bots
            return;
        }

        if (!formData.consent) {
            alert("Please consent to receiving messages.");
            return;
        }

        setStatus('loading');
        try {
            await addDoc(collection(db, 'quotes'), {
                ...formData,
                createdAt: serverTimestamp()
            });
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                service: 'Garage Floor',
                consent: false,
                honeypot: ''
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="bg-white dark:bg-brand-gray rounded-xl shadow-premium overflow-hidden border-t-4 border-primary p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-center text-primary mb-6">Quick Quote Form</h2>

            {status === 'success' ? (
                <div className="text-center py-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-500 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your request has been received. We'll contact you shortly.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-primary font-bold uppercase text-sm border-b-2 border-primary"
                    >
                        Send Another Request
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Hidden Honeypot Field */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                        <label htmlFor="honeypot">Leave this field blank</label>
                        <input
                            type="text"
                            name="honeypot"
                            id="honeypot"
                            value={formData.honeypot}
                            onChange={handleChange}
                            tabIndex="-1"
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Full Name *</label>
                        <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="John Doe"
                            type="text"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Email *</label>
                            <input
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="john@example.com"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Phone Number *</label>
                            <input
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="(727) 555-5555"
                                type="tel"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Project Address</label>
                        <input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="123 Pirate St, St. Petersburg"
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Service Required?</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                        >
                            <option>Garage Floor</option>
                            <option>Pool Deck</option>
                            <option>Patio</option>
                            <option>Commercial</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-500 mt-2">
                        <input
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="rounded text-primary focus:ring-primary mt-0.5"
                            type="checkbox"
                        />
                        <p>I consent to receiving text messages & phone calls from Pirate Cove Epoxy Flooring. Msg & data rates may apply.</p>
                    </div>

                    {status === 'error' && (
                        <p className="text-red-500 text-sm font-bold text-center">Something went wrong. Please try calling us instead.</p>
                    )}

                    <button
                        disabled={status === 'loading'}
                        className="cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded transition-colors uppercase tracking-wider shadow-md mt-4 disabled:opacity-50"
                        type="submit"
                    >
                        {status === 'loading' ? 'Sending...' : 'Receive Free Quote'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default QuoteForm;
