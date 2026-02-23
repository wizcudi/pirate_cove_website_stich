import QuoteForm from './QuoteForm';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
                            Ready to Transform Your Floors?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Contact Pirate Cove today for a free, no-obligation estimate. Our team of experts is ready to help you choose the perfect coating for your residential or commercial project.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary p-2 rounded-full text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <span className="font-bold text-gray-900">(727) 744-1150</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary p-2 rounded-full text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <span className="font-bold text-gray-900">info@piratecove.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <QuoteForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
