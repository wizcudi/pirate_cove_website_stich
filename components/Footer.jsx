import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-brand-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link className="flex items-center gap-2 mb-6" href="/">
                            <div className="relative h-12 w-16 md:h-14 md:w-20 bg-white rounded p-1">
                                <Image
                                    src="/images/logo.jpeg"
                                    alt="Pirate Cove Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-base leading-tight uppercase">Pirate Cove</h4>
                                <p className="text-[10px] text-gray-400 font-semibold uppercase">Epoxy Flooring</p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            We are an insured and registered epoxy flooring & concrete coatings contractor proudly serving the greater St. Petersburg area for over 20 years.
                        </p>
                        <a className="text-primary font-bold text-lg hover:text-white transition-colors" href="tel:7277441150">
                            (727) 744-1150
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h5>
                        <ul className="space-y-3 text-gray-400 text-sm font-medium">
                            <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#about">About Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#services">Services</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#gallery">Gallery</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h5 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 inline-block">Services</h5>
                        <ul className="space-y-3 text-gray-400 text-sm font-medium">
                            <li><Link className="hover:text-primary transition-colors" href="#services">Garage Epoxy</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#services">Commercial Flooring</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#services">Pool Deck Resurfacing</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#services">Patio Coatings</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h5 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2 inline-block">Connect With Us</h5>
                        <div className="flex gap-4 mb-6">
                            <a className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-all transition-colors" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.116 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-all transition-colors" href="mailto:info@piratecove.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            St. Petersburg, FL<br />
                            Mon-Sat: 9am - 5pm
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Pirate Cove Epoxy Flooring & Concrete Coatings LLC. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
