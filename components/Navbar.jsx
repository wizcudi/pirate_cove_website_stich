import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            {/* Top Bar */}
            <div className="bg-gray-100 text-[10px] md:text-xs py-1.5 border-b border-gray-200">
                <div className="container mx-auto px-4 flex justify-between items-center text-gray-500">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            St. Petersburg, FL
                        </span>
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            (727) 744-1150
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            Mon - Sat: 9am - 5pm
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link className="flex items-center gap-2" href="/">
                        <div className="relative h-12 w-16 md:h-14 md:w-20">
                            <Image
                                src="/images/logo.jpeg"
                                alt="Pirate Cove Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div>
                            <h1 className="font-display font-extrabold text-sm md:text-base leading-none text-gray-900 uppercase tracking-tighter">Pirate Cove</h1>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Epoxy Flooring</p>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 font-display font-medium text-[10px] uppercase tracking-widest text-gray-600">
                        <Link className="hover:text-primary transition-colors" href="/">Home</Link>
                        <Link className="hover:text-primary transition-colors" href="#about">About</Link>
                        <Link className="hover:text-primary transition-colors" href="#contact">Contact Us</Link>
                    </nav>

                    <a className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded font-bold uppercase text-[10px] tracking-widest transition-all shadow-md active:scale-95" href="tel:7277441150">
                        Click To Call Now!
                    </a>
                </div>
            </header>
        </>
    );
};

export default Navbar;
