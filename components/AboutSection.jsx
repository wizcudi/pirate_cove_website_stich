import Image from 'next/image';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/Welcome-Img.jpeg"
                                alt="Pirate Cove Epoxy Flooring Services"
                                width={1000}
                                height={1000}
                                className="w-full h-auto hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
                            Welcome to Pirate Cove Epoxy Flooring & Concrete Coatings, LLC
                        </h2>
                        <h4 className="text-xl font-bold text-primary">
                            Best Epoxy Garage Flooring, Metallic Coatings, & Pool Deck Resurfacing Experts in St. Petersburg
                        </h4>
                        <div className="text-gray-600 space-y-4">
                            <p>
                                We offer the top provider of high-quality epoxy floor coatings, polished and stained concrete solutions. With extensive experience and a commitment to excellence, we deliver superior flooring for residential and commercial spaces in St. Petersburg, FL.
                            </p>
                            <ul className="space-y-4">
                                <li>
                                    <strong className="text-gray-900 block mb-1">Residential Epoxy Flooring:</strong>
                                    Garage floors, entrance durability, and deck finishes. Long-lasting stain-resistant epoxy coatings.
                                </li>
                                <li>
                                    <strong className="text-gray-900 block mb-1">Commercial Epoxy Flooring:</strong>
                                    Warehouses, heavy-duty coatings resistant to chemicals and wear.
                                </li>
                                <li>
                                    <strong className="text-gray-900 block mb-1">Pool Deck Resurfacing:</strong>
                                    Slip-resistant textures perfect for outdoor climates. Choose from various colors to refresh your outdoor space.
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4">
                            <a
                                href="#quote"
                                className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded shadow-lg transition-colors uppercase tracking-wider inline-block"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
