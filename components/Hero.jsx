import Image from 'next/image';
import QuoteForm from './QuoteForm';

const Hero = () => {
    return (
        <section className="relative min-h-[600px] flex items-center px-0 md:px-8 py-12 lg:py-20 overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/Hero-BG.jpeg"
                alt="Pirate Cove Epoxy Flooring Background"
                fill
                priority
                className="object-cover z-0"
            />
            {/* Overlay - adjusting to a warmer dark tone as seen in screenshot */}
            <div className="absolute inset-0 bg-[#4a3a35]/60 z-10"></div>

            <div className="container mx-auto px-4 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                    <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-[1.1] text-shadow max-w-2xl">
                        St Petersburg Epoxy Flooring, Concrete Coating, Pool Deck Resurfacing
                    </h1>
                    <p className="text-lg md:text-xl font-normal text-gray-100 max-w-xl text-shadow leading-relaxed">
                        Transform your space with durable, high-quality finishes. Expert installation and premium materials for a floor that lasts.
                    </p>

                    <div className="pt-4">
                        <a
                            className="inline-block bg-primary hover:bg-secondary text-white text-base font-bold px-6 py-3 rounded shadow-xl transition-all uppercase tracking-widest transform hover:scale-105"
                            href="tel:7277441150"
                        >
                            (727) 744-1150
                        </a>
                    </div>
                </div>

                <div className="lg:ml-auto w-full max-w-md" id="quote">
                    <QuoteForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;
