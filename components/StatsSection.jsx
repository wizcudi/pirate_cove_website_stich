const stats = [
    { label: "Epoxy Coatings Installed", value: "500+" },
    { label: "Happy Customers Served", value: "700+" },
    { label: "Years of Industry Experience", value: "20+" },
    { label: "5-Star Reviews and Counting", value: "300+" }
];

const StatsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-xl font-bold text-primary mb-16 uppercase tracking-widest">
                    Our Epoxy Flooring Professionals Are Reputable & Experienced
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                                {stat.value}
                            </div>
                            <p className="text-gray-600 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
