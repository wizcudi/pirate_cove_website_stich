const values = [
    {
        title: "Free & Competitive Estimates",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        )
    },
    {
        title: "Satisfaction Guarantee",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
        )
    },
    {
        title: "Professional Service",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    },
    {
        title: "Quality Workmanship Promise",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        )
    },
    {
        title: "20 Years Experience",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
        )
    }
];

const ValueBar = () => {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    {values.map((val, index) => (
                        <div key={index} className="space-y-3 group">
                            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/20 transition-colors">
                                {val.icon}
                            </div>
                            <h4 className="font-bold leading-tight uppercase text-xs md:text-sm">{val.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueBar;
