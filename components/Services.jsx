import Image from 'next/image';

const services = [
    {
        title: "Epoxy Garage Flooring",
        description: "We install stunning, ultra-resilient epoxy garage flooring that transforms your space. Easy to clean and incredibly durable.",
        image: "/images/Epoxy-Garage-Service.jpeg"
    },
    {
        title: "Commercial Epoxy Flooring",
        description: "High performance commercial epoxy systems for warehouses, offices, and retail spaces. Durable and safe for heavy traffic.",
        image: "/images/epoxy-commercial-services.jpeg"
    },
    {
        title: "Pool Deck Resurfacing",
        description: "Cool-touch and slip-resistant pool deck coatings that protect bare feet and look amazing in the Florida sun.",
        image: "/images/Pool-Deck-Services.jpeg"
    },
    {
        title: "Outdoor Patio Epoxy",
        description: "Weather resistant outdoor coatings that bring style to your patio. UV stable and non-slip options available.",
        image: "/images/epoxy-outdoor-services.jpeg"
    },
    {
        title: "Polished Concrete",
        description: "Upgrade your concrete floors with a polished finish. Modern, sleek, and exceptionally low maintenance.",
        image: "/images/epoxy-polished-services.jpeg"
    },
    {
        title: "Stained Concrete",
        description: "Add rich colors and unique effects to your concrete floors with professional acid or water-based stains.",
        image: "/images/stained-services.jpeg"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Premium Coating Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We offer a wide range of professional flooring solutions tailored to your specific needs, whether it's residential or commercial.
                </p>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                fill
                                src={service.image}
                                alt={service.title}
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex-grow flex flex-col items-center text-center">
                            <h3 className="font-bold text-primary text-lg mb-3 leading-tight">{service.title}</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                {service.description}
                            </p>
                            <a
                                href="#quote"
                                className="mt-auto text-xs font-bold border-b-2 border-primary text-primary hover:text-secondary uppercase pb-1 transition-colors"
                            >
                                Get a Quote
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
