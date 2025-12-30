
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Packages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whatsappNumber = "919284649579";

    const createWhatsappLink = (pkgName: string, subType: string = "") => {
        const text = `Hi, I'm interested in the ${pkgName} ${subType ? `(${subType})` : ""}. Please share more details.`;
        return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
    };

    const sections = [
        {
            id: 1,
            cards: [
                {
                    badge: "General Type",
                    title: "FOUNDATION RESET",
                    subtitle: "(Beginner)",
                    frequency: "3 DAYS/WEEK",
                    description: "Fitness Foundation Introduction to Muscle & Exercise. Science-based home workouts. Features mind–muscle connection training, live form correction, breathwork, and a daily routine reset for a holistic Mind • Body & Beyond experience.",
                    pricing: [
                        { label: "Online", amount: "₹4,000" },
                        { label: "Offline", amount: "₹6,000" }
                    ],
                    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    badge: "Celebrity Type",
                    title: "FOUNDATION RESET",
                    subtitle: "(Beginner)",
                    frequency: "5 DAYS/WEEK",
                    description: "Experience celebrity-style fat-loss training with a focus on deep mind–muscle connection. Includes live form correction in every session, energy activation breathwork, and structured daily routines for a complete lifestyle reset.",
                    pricing: [
                        { label: "Online", amount: "₹6,000" },
                        { label: "Offline", amount: "₹8,000" }
                    ],
                    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                }
            ]
        },
        {
            id: 2,
            cards: [
                {
                    badge: "Body Toning",
                    title: "TRANSFORMATION PRO",
                    subtitle: "(Standard)",
                    frequency: "5 DAYS/WEEK",
                    description: "Intense science-based workouts for fat-loss and lean muscle toning. Focuses on posture, conditioning, and nutrition guidance to build discipline and achieve a sculpted physique through stress-friendly training.",
                    pricing: [
                        { label: "Online", amount: "₹6,000" },
                        { label: "Offline", amount: "₹9,000" }
                    ],
                    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    badge: "Celebrity Style",
                    title: "TRANSFORMATION PRO",
                    subtitle: "(Body Toning)",
                    frequency: "ONLINE / OFFLINE",
                    description: "A premium celebrity-style system for fat-loss and muscle toning. Emphasizes strong mind–muscle connection, meticulous posture fixing, and celebrity-inspired nutrition, with progress tracking for serious discipline.",
                    pricing: [
                        { label: "Online", amount: "₹7,000" },
                        { label: "Offline", amount: "₹10,000" }
                    ],
                    image: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop"
                }
            ]
        },
        {
            id: 3,
            cards: [
                {
                    badge: "Body Recomposition",
                    title: "ELITE PERFORMANCE",
                    subtitle: "(Package 3)",
                    frequency: "4 DAYS/WEEK",
                    description: "Advanced science-based strategies for body recomposition and deep mind-muscle connection. Includes live form correction, mobility work, injury prevention, and energy healing for guaranteed serious transformation results.",
                    pricing: [
                        { label: "Online (3 Months)", amount: "₹24,990" },
                        { label: "Offline", amount: "₹29,900" }
                    ],
                    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    badge: "Warrior Conditioning",
                    title: "COMBAT FITNESS",
                    subtitle: "(Package 4)",
                    frequency: "4 DAYS/6 WEEK",
                    description: "Train like a warrior with science-based strength and conditioning. Features celebrity action-prep styles, lathi-kathi basics, and combat drills to build power, control, and a disciplined warrior mindset.",
                    pricing: [
                        { label: "Program cost", amount: "₹20,000" }
                    ],
                    image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1000&auto=format&fit=crop"
                }
            ]
        },
        {
            id: 4,
            cards: [
                {
                    badge: "Specialized",
                    title: "ACTOR & PRESENCE",
                    subtitle: "(Package 5)",
                    frequency: "4 DAYS/6 WEEK",
                    description: "Specialized conditioning for aspiring performers enhancing posture, movement, and presence. Focuses on breath control, emotional expression, confidence, and hormone awareness for calmness and command.",
                    pricing: [
                        { label: "Program cost", amount: "₹25,000" }
                    ],
                    image: "https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=1000&auto=format&fit=crop"
                },
                {
                    badge: "VIP 1-ON-1",
                    title: "MIND–BODY MASTERY",
                    subtitle: "(Package 6)",
                    frequency: "5 DAYS/WEEK",
                    description: "The ultimate VIP 1-on-1 experience with personalized workouts and advanced hormone optimization. Covers habit, sleep, and lifestyle regulation alongside energy healing and nervous system regulation for high-performance living.",
                    pricing: [
                        { label: "3 Months", amount: "₹60k" },
                        { label: "6 Months", amount: "₹1.2L" }
                    ],
                    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1000&auto=format&fit=crop"
                }
            ]
        }
    ];

    const addOns = [
        { name: "Diet plan", price: "₹2,500" },
        { name: "Fat-loss accelerator", price: "₹2,500" },
        { name: "Lean muscle sculpting", price: "₹2,500" },
        { name: "Energy healing", price: "₹1,500/session" },
        { name: "Posture & mobility", price: "₹1,500" }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600/30 font-sans">
            <Header />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4">

                    {/* Main Title */}
                    <div className="text-center mb-24 animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-heading uppercase tracking-tighter mb-4">
                            Our <span className="text-[#E50914]">Packages</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-medium tracking-wide uppercase font-heading">
                            Choose Your Transformation
                        </p>
                        <div className="w-24 h-1.5 bg-[#E50914] mx-auto mt-8 rounded-full"></div>
                    </div>

                    {/* Packages Sections */}
                    <div className="space-y-32">
                        {sections.map((section) => (
                            <div key={section.id} className="animate-slide-up">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 max-w-7xl mx-auto">
                                    {section.cards.map((card, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-[#0f0f0f] rounded-3xl overflow-hidden hover:shadow-[0_0_60px_rgba(229,9,20,0.1)] transition-all duration-500 group border border-[#1a1a1a]"
                                        >
                                            {/* Image Header */}
                                            <div className="relative h-60 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 opacity-90" />
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                                {/* Badge */}
                                                <div className="absolute top-6 left-6 z-20">
                                                    <span className="bg-white text-black text-sm font-heading uppercase px-4 py-1.5 rounded-full tracking-wider shadow-lg">
                                                        {card.badge}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-8 -mt-10 relative z-20 flex flex-col items-center text-center">

                                                {/* Titles */}
                                                <h3 className="text-2xl md:text-4xl font-heading uppercase tracking-tight text-white mb-2 leading-none">
                                                    {card.title}
                                                </h3>
                                                <h4 className="text-lg md:text-xl font-heading uppercase text-gray-400 tracking-wider mb-6">
                                                    {card.subtitle}
                                                </h4>

                                                {/* Frequency Pill */}
                                                <div className="mb-6">
                                                    <span className="inline-block border border-[#E50914] text-[#E50914] text-sm font-heading uppercase px-6 py-2 rounded-full tracking-widest shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                                                        {card.frequency}
                                                    </span>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md font-medium text-center">
                                                    {card.description}
                                                </p>

                                                {/* Pricing - Horizontal Layout */}
                                                <div className="mb-8 w-full flex flex-row justify-center items-center gap-4 md:gap-10 px-2">
                                                    {card.pricing.map((p, pIdx) => (
                                                        <div key={pIdx} className="flex flex-col items-center justify-center">
                                                            <div className="text-3xl md:text-4xl font-heading text-white tracking-tight">
                                                                {p.amount}
                                                            </div>
                                                            {card.pricing.length > 0 && (
                                                                <div className="text-[10px] md:text-xs uppercase text-gray-500 font-bold tracking-widest mt-1">
                                                                    {p.label}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Button */}
                                                <a
                                                    href={createWhatsappLink(card.title, card.badge)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full bg-[#E50914] hover:bg-[#ff0a1b] text-white font-heading py-4 rounded text-lg uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.4)] transform hover:-translate-y-1 block"
                                                >
                                                    Join Now
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add-On Services */}
                    <div className="mt-32 animate-fade-in border-t border-[#1a1a1a] pt-16">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-heading uppercase text-white mb-4">
                                Add-On <span className="text-[#E50914]">Services</span>
                            </h2>
                            <div className="w-16 h-1.5 bg-[#E50914] mx-auto rounded-full"></div>
                        </div>

                        {/* Centered Grid for Add-ons */}
                        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                            {addOns.map((addon, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#0f0f0f] border border-[#1f1f1f] p-8 rounded-xl flex flex-col items-center justify-center text-center hover:border-[#E50914]/50 transition-all duration-300 group hover:bg-[#141414] w-full md:w-[calc(33.33%-1rem)] min-w-[300px]"
                                >
                                    <h3 className="text-lg font-heading uppercase text-white mb-2 tracking-wider group-hover:text-[#E50914] transition-colors">
                                        {addon.name}
                                    </h3>
                                    <p className="text-2xl font-heading text-gray-200 mb-6">
                                        {addon.price}
                                    </p>
                                    <a
                                        href={createWhatsappLink("Add-On Service", addon.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
                                    >
                                        Inquire Now
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Packages;
