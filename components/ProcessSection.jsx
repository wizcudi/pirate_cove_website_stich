const steps = [
    {
        id: 1,
        title: "Surface Preparation",
        desc: "We clean, grind, or shot blast the floor to remove debris, oil, & coatings ensuring proper adhesion."
    },
    {
        id: 2,
        title: "Moisture & Substrate Testing",
        desc: "We check for moisture levels and substrate integrity to prevent future coating failures."
    },
    {
        id: 3,
        title: "Primer Application",
        desc: "Apply a high-quality base epoxy specifically formulated to enhance adhesion and durability."
    },
    {
        id: 4,
        title: "Base Coat & Decorative",
        desc: "Spread the body coat, add decorative flakes, pigments, or textures if desired."
    },
    {
        id: 5,
        title: "Topcoat Application",
        desc: "Seal with a durable UV-resistant polyaspartic topcoat for chemical resistance and longevity."
    },
    {
        id: 6,
        title: "Curing & Final Walkthrough",
        desc: "Allow proper curing time, then inspect for imperfections ensuring a smooth finish."
    }
];

const ProcessSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl md:text-4xl font-display font-bold text-primary mb-16">
                    6 Steps To Installing Epoxy Coatings in St. Petersburg
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                    {steps.map((step) => (
                        <div key={step.id} className="text-center group">
                            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border-2 border-primary group-hover:scale-110 transition-transform">
                                <span className="font-bold text-2xl text-primary">{step.id}</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-gray-900">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed px-4">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
