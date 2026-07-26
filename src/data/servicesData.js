const baseServices = [
  { id: "psychic-reading", title: "Psychic Reading", desc: "Gain profound insights into your past, present, and future. Discover hidden truths and unlock your highest potential.", color: "from-[#6366f1] to-[#18181b]", image: "/images/_Affordable Psychic Card Readings_.webp" },
  { id: "love-solutions", title: "Love Solutions", desc: "Resolve severe relationship crises, stop divorce, and rekindle the love and passion in your life.", color: "from-[#6366f1] to-[#18181b]", image: "/images/Reconnect & Co-Regulate_ Science-Based Tools for NYC Families.webp" },
  { id: "palmistry", title: "Palmistry", desc: "Your hands hold the map of your life. Learn what your heart, head, and life lines reveal about your destiny.", color: "from-[#6366f1] to-[#18181b]", image: "/images/palmistry.webp" },
  { id: "bring-ex-back", title: "Bring Ex Back", desc: "Remove external interferences and misunderstandings to permanently reunite with your lost love.", color: "from-[#6366f1] to-[#18181b]", image: "/images/3-months-rule-breakup.webp" },
  { id: "black-magic-removal", title: "Black Magic Removal", desc: "Identify and destroy dark energies, generational curses, and evil eye that are blocking your success.", color: "from-[#6366f1] to-[#18181b]", image: "/images/black_magic.webp" },
  { id: "business-astrology", title: "Business Astrology", desc: "Overcome financial losses, attract lucrative opportunities, and ensure long-term business prosperity.", color: "from-[#6366f1] to-[#18181b]", image: "/images/career-astrology-reading.webp" },
  { id: "spiritual-healing", title: "Spiritual Healing", desc: "Cleanse your aura, align your chakras, and remove deep-rooted trauma through powerful energy healing.", color: "from-[#6366f1] to-[#18181b]", image: "/images/serene-village-landscape.webp" },
  { id: "voodoo-removal", title: "Voodoo Removal", desc: "Specialized rituals to completely break extreme forms of dark magic and witchcraft targeting your family.", color: "from-[#6366f1] to-black", image: "/images/voodoo.webp" },
  { id: "face-reading", title: "Face Reading", desc: "Discover hidden personality traits and foresee health or career trajectories through ancient physiognomy.", color: "from-[#6366f1] to-[#18181b]", image: "/images/Why Many Trust Facial Reading Astrology Services For Daily Guidance.webp" },
  { id: "family-disputes", title: "Family Disputes", desc: "Bring peace and unity back to a broken home by resolving toxic misunderstandings and jealousies.", color: "from-[#6366f1] to-[#18181b]", image: "/images/family.webp" },
  { id: "court-cases", title: "Court Cases", desc: "Gain spiritual favor and astrological alignment for success in prolonged legal matters and disputes.", color: "from-[#6366f1] to-[#18181b]", image: "/images/toxic-marriage-signs.webp" },
  { id: "childless-couples", title: "Childless Couples", desc: "Vedic prayers and planetary remedies to bless couples struggling with conception and fertility issues.", color: "from-[#6366f1] to-[#18181b]", image: "/images/marriage.webp" },
  { id: "health-problems", title: "Health Problems", desc: "Find spiritual remedies for chronic illnesses, depression, and unexplainable physical conditions.", color: "from-[#6366f1] to-[#18181b]", image: "/images/negative_energy.webp" },
  { id: "jealousy-envy", title: "Jealousy & Envy", desc: "Shield yourself and your assets from the destructive intentions and 'Evil Eye' of jealous individuals.", color: "from-[#6366f1] to-[#18181b]", image: "/images/demon_forces.webp" },
  { id: "career-guidance", title: "Career Guidance", desc: "Stuck in your job? Find the career path that perfectly aligns with your astrological birth chart.", color: "from-[#6366f1] to-[#18181b]", image: "/images/career-astrology-reading.webp" },
  { id: "kundali-matching", title: "Kundali Matching", desc: "Ensure a blissful and lifelong marriage by deeply analyzing the astrological compatibility of partners.", color: "from-[#6366f1] to-[#18181b]", image: "/images/relationship_astrology_hero.webp" },
  { id: "vaastu-shastra", title: "Vaastu Shastra", desc: "Correct the energetic flow of your home or office to invite peace, wealth, and harmonious living.", color: "from-[#6366f1] to-[#18181b]", image: "/images/astrologer-in-west-bengal.webp" },
  { id: "gemstone-consultation", title: "Gemstone Consultation", desc: "Discover which precious stones will amplify your lucky planets and neutralize malefic influences.", color: "from-[#6366f1] to-[#18181b]", image: "/images/gemstone-recommendation.webp" },
  { id: "depression-anxiety", title: "Depression & Anxiety", desc: "Holistic spiritual counseling and remedies to lift the heavy fog of mental distress and anxiety.", color: "from-[#6366f1] to-[#18181b]", image: "/images/dream-interpretation.webp" },
  { id: "property-disputes", title: "Property Disputes", desc: "Resolve inherited wealth conflicts and property issues smoothly through specific planetary appeasements.", color: "from-[#6366f1] to-[#18181b]", image: "/images/6825836929131189.webp" }
];

const testimonialPool = [
  [
    { name: "Liam A.", image: "https://randomuser.me/api/portraits/men/11.jpg", text: "Absolutely changed my life! I can't recommend this service enough. Highly recommended!" },
    { name: "Olivia B.", image: "https://randomuser.me/api/portraits/women/12.jpg", text: "I was skeptical, but the results speak for themselves. Truly gifted. Best decision ever." }
  ],
  [
    { name: "Noah C.", image: "https://randomuser.me/api/portraits/men/13.jpg", text: "Very insightful and professional. The accuracy was frighteningly good. Thank you Pandit Rudradev." },
    { name: "Emma D.", image: "https://randomuser.me/api/portraits/women/14.jpg", text: "Saved my marriage. I will forever be grateful for the guidance. A life saver." }
  ],
  [
    { name: "Oliver E.", image: "https://randomuser.me/api/portraits/men/15.jpg", text: "I felt a massive weight lift off my shoulders after my session. A blessing." },
    { name: "Ava F.", image: "https://randomuser.me/api/portraits/women/16.jpg", text: "My business started booming weeks after applying the astrological advice. I feel reborn." }
  ],
  [
    { name: "Elijah G.", image: "https://randomuser.me/api/portraits/men/17.jpg", text: "Pandit Rudradev gave me the clarity I've been desperately seeking. I'm so grateful." },
    { name: "Charlotte H.", image: "https://randomuser.me/api/portraits/women/18.jpg", text: "I finally understand my life path and purpose. Incredible experience. Everything he said was true." }
  ],
  [
    { name: "William I.", image: "https://randomuser.me/api/portraits/men/19.jpg", text: "The remedies were simple but highly effective. Everything is falling into place. Truly a miracle." },
    { name: "Sophia J.", image: "https://randomuser.me/api/portraits/women/20.jpg", text: "The dark energy that was holding me back is completely gone. 5 stars!" }
  ],
  [
    { name: "James K.", image: "https://randomuser.me/api/portraits/men/21.jpg", text: "I was skeptical, but the results speak for themselves. Truly gifted. Highly recommended!" },
    { name: "Amelia L.", image: "https://randomuser.me/api/portraits/women/22.jpg", text: "Highly recommended. Professional, confidential, and incredibly accurate. Best decision ever." }
  ],
  [
    { name: "Benjamin M.", image: "https://randomuser.me/api/portraits/men/23.jpg", text: "Saved my marriage. I will forever be grateful for the guidance. Thank you Pandit Rudradev." },
    { name: "Isabella N.", image: "https://randomuser.me/api/portraits/women/24.jpg", text: "I found the closure I needed. A beautiful spiritual experience. A life saver." }
  ],
  [
    { name: "Lucas O.", image: "https://randomuser.me/api/portraits/men/25.jpg", text: "My business started booming weeks after applying the astrological advice. A blessing." },
    { name: "Mia P.", image: "https://randomuser.me/api/portraits/women/26.jpg", text: "Pandit Rudradev's reading was spot on. He knew things I hadn't told anyone. I feel reborn." }
  ],
  [
    { name: "Henry Q.", image: "https://randomuser.me/api/portraits/men/27.jpg", text: "I finally understand my life path and purpose. Incredible experience. I'm so grateful." },
    { name: "Evelyn R.", image: "https://randomuser.me/api/portraits/women/28.jpg", text: "The gemstone recommendation completely shifted my financial luck. Everything he said was true." }
  ],
  [
    { name: "Alexander S.", image: "https://randomuser.me/api/portraits/men/29.jpg", text: "The dark energy that was holding me back is completely gone. Truly a miracle." },
    { name: "Harper T.", image: "https://randomuser.me/api/portraits/women/30.jpg", text: "The Vastu changes brought immediate peace to our new home. 5 stars!" }
  ],
  [
    { name: "Jackson U.", image: "https://randomuser.me/api/portraits/men/31.jpg", text: "Highly recommended. Professional, confidential, and incredibly accurate. Highly recommended!" },
    { name: "Camila V.", image: "https://randomuser.me/api/portraits/women/32.jpg", text: "We are finally expecting a child after years of struggle. Thank you! Best decision ever." }
  ],
  [
    { name: "Sebastian W.", image: "https://randomuser.me/api/portraits/men/33.jpg", text: "I found the closure I needed. A beautiful spiritual experience. Thank you Pandit Rudradev." },
    { name: "Gianna X.", image: "https://randomuser.me/api/portraits/women/34.jpg", text: "My health has significantly improved since the healing sessions. A life saver." }
  ],
  [
    { name: "Aiden Y.", image: "https://randomuser.me/api/portraits/men/35.jpg", text: "Pandit Rudradev's reading was spot on. He knew things I hadn't told anyone. A blessing." },
    { name: "Abigail Z.", image: "https://randomuser.me/api/portraits/women/36.jpg", text: "A transformative experience. I feel aligned and powerful again. I feel reborn." }
  ],
  [
    { name: "Matthew A.", image: "https://randomuser.me/api/portraits/men/37.jpg", text: "The gemstone recommendation completely shifted my financial luck. I'm so grateful." },
    { name: "Luna B.", image: "https://randomuser.me/api/portraits/women/38.jpg", text: "The court case resolved in our favor just as predicted. Everything he said was true." }
  ],
  [
    { name: "Samuel C.", image: "https://randomuser.me/api/portraits/men/39.jpg", text: "The Vastu changes brought immediate peace to our new home. Truly a miracle." },
    { name: "Ella D.", image: "https://randomuser.me/api/portraits/women/40.jpg", text: "My ex reached out within days of the ritual. It really works. 5 stars!" }
  ],
  [
    { name: "David E.", image: "https://randomuser.me/api/portraits/men/41.jpg", text: "We are finally expecting a child after years of struggle. Thank you! Highly recommended!" },
    { name: "Elizabeth F.", image: "https://randomuser.me/api/portraits/women/42.jpg", text: "Absolutely changed my life! I can't recommend this service enough. Best decision ever." }
  ],
  [
    { name: "Joseph G.", image: "https://randomuser.me/api/portraits/men/43.jpg", text: "My health has significantly improved since the healing sessions. Thank you Pandit Rudradev." },
    { name: "Sofia H.", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "Very insightful and professional. The accuracy was frighteningly good. A life saver." }
  ],
  [
    { name: "Carter I.", image: "https://randomuser.me/api/portraits/men/45.jpg", text: "A transformative experience. I feel aligned and powerful again. A blessing." },
    { name: "Emily J.", image: "https://randomuser.me/api/portraits/women/46.jpg", text: "I felt a massive weight lift off my shoulders after my session. I feel reborn." }
  ],
  [
    { name: "Owen K.", image: "https://randomuser.me/api/portraits/men/47.jpg", text: "The court case resolved in our favor just as predicted. I'm so grateful." },
    { name: "Avery L.", image: "https://randomuser.me/api/portraits/women/48.jpg", text: "Pandit Rudradev gave me the clarity I've been desperately seeking. Everything he said was true." }
  ],
  [
    { name: "Wyatt M.", image: "https://randomuser.me/api/portraits/men/49.jpg", text: "My ex reached out within days of the ritual. It really works. Truly a miracle." },
    { name: "Mila N.", image: "https://randomuser.me/api/portraits/women/50.jpg", text: "The remedies were simple but highly effective. Everything is falling into place. 5 stars!" }
  ]
];

const uniqueExpansions = {
  "psychic-reading": "Pandit Rudradev's clairvoyant abilities help you navigate life's most confusing crossroads with absolute certainty. By tapping into cosmic frequencies, he provides actionable guidance that aligns your spiritual journey with your highest purpose.",
  "love-solutions": "Through specialized Vedic mantras and energy realignments, Pandit Rudradev clears the misunderstandings poisoning your connection. Experience a profound renewal of trust and affection that transforms your relationship into a lifelong bond of harmony.",
  "palmistry": "Your hands are a cosmic blueprint of your karma, health, and hidden talents. Pandit Rudradev meticulously decodes these intricate lines to warn you of future pitfalls and illuminate the exact timing of your upcoming successes.",
  "bring-ex-back": "Severed emotional cords can be repaired using ancient, potent astrological interventions. By neutralizing external negativity and healing past wounds, Pandit Rudradev creates the energetic space needed for a joyful and permanent reunion.",
  "black-magic-removal": "Dark entities and generational curses can silently destroy your health and prosperity. Using rigorous spiritual cleanses and protective talismans, Pandit Rudradev permanently banishes malicious forces, surrounding you in an impenetrable shield of light.",
  "business-astrology": "Planetary misalignments are often the hidden cause of sudden financial ruin or stagnant growth. Pandit Rudradev analyzes your business chart to prescribe powerful remedies that attract wealth, secure lucrative contracts, and ensure long-term stability.",
  "spiritual-healing": "Deep-seated emotional trauma and blocked chakras manifest as physical and mental exhaustion. Through intense energetic healing sessions, Pandit Rudradev restores your vital life force, leaving you feeling rejuvenated, balanced, and at peace.",
  "voodoo-removal": "Extreme forms of witchcraft require master-level spiritual intervention to safely dismantle. Pandit Rudradev's specialized rituals aggressively target and neutralize these dark bindings, restoring your family's safety and spiritual autonomy.",
  "face-reading": "The subtle contours and features of your face reveal the trajectory of your soul's journey. Pandit Rudradev uses ancient physiognomy to uncover hidden personality traits, assess your health, and predict major life events with astonishing accuracy.",
  "family-disputes": "Constant arguing and jealousy can tear the fabric of a home apart. Through specific astrological appeasements and peace-inducing rituals, Pandit Rudradev dissolves toxic energies, restoring deep respect, unity, and unconditional love among all family members.",
  "court-cases": "Legal battles drain your energy, finances, and peace of mind. By aligning your planetary influences to favor justice and truth, Pandit Rudradev's remedies tip the scales in your favor, ensuring a swift and victorious resolution.",
  "childless-couples": "Fertility challenges often have hidden astrological roots that modern medicine cannot detect. Through specific Vedic prayers and planetary harmonizations, Pandit Rudradev removes these karmic blockages, blessing your family with the joy of a healthy child.",
  "health-problems": "When chronic ailments persist despite medical treatments, negative planetary periods are usually to blame. Pandit Rudradev identifies these malefic influences and provides potent spiritual remedies that accelerate your body's natural healing process.",
  "jealousy-envy": "The 'Evil Eye' from envious colleagues or neighbors can subtly sabotage your greatest achievements. Pandit Rudradev creates a powerful energetic barrier around your life, deflecting malicious intentions and ensuring your continuous growth.",
  "career-guidance": "Feeling unfulfilled or stuck in a dead-end job is a sign of misalignment with your cosmic destiny. Pandit Rudradev decodes your birth chart to reveal your true vocation, paving the way for promotions, recognition, and immense job satisfaction.",
  "kundali-matching": "A lifelong, blissful marriage requires more than just love; it requires deep astrological compatibility. Pandit Rudradev meticulously analyzes both partners' charts to identify potential friction points and neutralize them before they can cause harm.",
  "vaastu-shastra": "The flow of energy in your living or working space directly dictates your luck, health, and prosperity. Pandit Rudradev identifies structural energetic flaws and implements simple, powerful corrections that instantly transform your environment into a magnet for success.",
  "gemstone-consultation": "Wearing the wrong gemstone can trigger bad luck, while the right one can catapult you to success. Based on a precise analysis of your birth chart, Pandit Rudradev prescribes authentic, spiritually energized stones that amplify your most favorable planets.",
  "depression-anxiety": "Mental fog and overwhelming anxiety are often symptoms of an imbalanced aura or malefic moon transits. Pandit Rudradev provides compassionate spiritual counseling and customized rituals that lift the heavy veil of sadness, restoring your mental clarity and joy.",
  "property-disputes": "Conflicts over inherited wealth and real estate can sever family ties forever. By performing specific planetary appeasements, Pandit Rudradev smooths out legal and interpersonal friction, ensuring you receive your rightful share without prolonged bitterness."
};

export const servicesData = baseServices.map((service, index) => ({
  ...service,
  longDesc: `${service.desc} ${uniqueExpansions[service.id]}`,
  aboutDesc: `${service.desc} This highly specialized service is designed to address the unique complexities of your situation. With years of proven expertise, we delve into the root causes of your challenges, applying ancient wisdom and precise methodologies. Whether you're seeking clarity, protection, or a profound transformation, our customized approach ensures that you receive the powerful guidance and effective remedies necessary to overcome obstacles and restore harmony to your life.`,
  badges: ["100% Confidential", "Trusted Expert", "Proven Results"],
  testimonials: testimonialPool[index % testimonialPool.length],
  faqs: [
    { q: `How long does the ${service.title} process take?`, a: "The duration varies depending on the complexity of your situation, but you will often start seeing positive shifts within a few days of the initial consultation and remedies." },
    { q: "Is this service completely confidential?", a: "Yes, your privacy is our utmost priority. All consultations, details, and remedies discussed remain strictly confidential." },
    { q: "Do I need to prepare anything before the session?", a: "Just come with an open mind and be ready to discuss your concerns honestly. For specific astrological readings, your birth details (date, time, and place) will be required." }
  ]
}));
