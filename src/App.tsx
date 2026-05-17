import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Plane,
  BookOpen,
  Hotel,
  CheckCircle,
  Navigation,
  MapPin,
  ShieldCheck,
  Clock,
  Headset,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  HeartHandshake,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircle,
  Star,
  Users,
  Globe,
  Zap,
  FileText,
  Sparkles,
  Award,
  ArrowRight,
  Map,
  Briefcase,
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-brand-text font-sans">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "corporate-nav py-2" : "bg-white py-3 md:py-4"}`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <a href="#" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="LuxVisa Logo"
                className="h-16 md:h-20 w-auto object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div>
                <h1 className="text-2xl font-display font-extrabold tracking-tight text-[#001050] leading-none">
                  Lux<span className="text-[#0a6cff]">Visa</span>
                </h1>
                <p className="text-[9.5px] font-accent uppercase tracking-widest text-[#001050] mt-1 font-bold leading-none">
                  Global Services
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-5 px-6 py-2.5 bg-white/70 backdrop-blur-md rounded-full border border-gray-200/80 shadow-[0_4px_15px_rgba(0,16,80,0.03)] text-[14px] font-bold text-[#001050]">
              <a
                href="#"
                onClick={(e) => scrollToSection(e, "home")}
                className="hover:text-[#0a6cff] transition-colors"
              >
                Home
              </a>
              <div className="w-[1.5px] h-4 bg-[#0a6cff]/20 rounded-full"></div>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="hover:text-[#0a6cff] transition-colors"
              >
                About Us
              </a>
              <div className="w-[1.5px] h-4 bg-[#0a6cff]/20 rounded-full"></div>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="hover:text-[#0a6cff] transition-colors"
              >
                Services
              </a>
              <div className="w-[1.5px] h-4 bg-[#0a6cff]/20 rounded-full"></div>
              <a
                href="#countries"
                onClick={(e) => scrollToSection(e, "countries")}
                className="hover:text-[#0a6cff] transition-colors"
              >
                Destinations
              </a>
              <div className="w-[1.5px] h-4 bg-[#0a6cff]/20 rounded-full"></div>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="hover:text-[#0a6cff] transition-colors"
              >
                Contact Us
              </a>
            </div>
            <a
              href="https://wa.me/919560367678"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0a6cff] to-[#0050d0] text-[14px] font-bold text-white transition-all shadow-[0_8px_20px_rgba(10,108,255,0.2)] hover:shadow-[0_12px_25px_rgba(10,108,255,0.3)] hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-primary hover:text-brand-accent relative z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu drop-down */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white flex flex-col py-6 px-6 gap-6 shadow-xl border-t border-gray-100"
          >
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-sm font-medium text-brand-text hover:text-brand-accent"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-medium text-brand-text hover:text-brand-accent"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="text-sm font-medium text-brand-text hover:text-brand-accent"
            >
              Services
            </a>
            <a
              href="#countries"
              onClick={(e) => scrollToSection(e, "countries")}
              className="text-sm font-medium text-brand-text hover:text-brand-accent"
            >
              Destinations
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-sm font-medium text-brand-text hover:text-brand-accent"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/919560367678"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 text-center rounded-lg bg-brand-accent text-sm font-semibold hover:bg-brand-secondary text-white transition-all soft-shadow"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden flex-1 flex flex-col justify-center min-h-[90vh]"
      >
        {/* Background Image Setup - Instructing user to replace the url with their image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        />

        {/* Gradient Overlay for Text Readability - Mostly visible on the left side where the text is */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-10 lg:mb-16 hidden md:block">
          {" "}
          {/* Hide on mobile so text doesn't clash with bg */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-accent font-display font-bold text-2xl sm:text-3xl md:text-5xl uppercase tracking-widest drop-shadow-sm inline-block relative ml-2 md:ml-0 pb-2"
          >
            Passport to Possibilities
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent rounded-[100%]"></div>
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 items-center w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[55%] pb-12 lg:pb-0"
          >
            <span className="inline-block py-1.5 px-3 rounded-full bg-brand-accent/10 text-brand-secondary text-xs font-bold tracking-wider mb-6 border border-brand-accent/20 font-accent uppercase bg-white/50 backdrop-blur-sm">
              Trusted Visa & Travel Experts
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-[1.1] mb-6 relative">
              <span className="text-slate-700 font-semibold text-[0.7em] block mb-2 drop-shadow-sm">
                Your journey begins with
              </span>
              <span className="text-[#001050] drop-shadow-md">Lux</span>
              <span className="text-[#0a6cff] drop-shadow-md">Visa</span>{" "}
              <span className="text-[#001050] drop-shadow-md">Global</span>
            </h2>

            <p className="text-slate-800 font-medium text-lg sm:text-xl max-w-xl leading-relaxed mb-10 drop-shadow-sm">
              Expert visa assistance for USA, UK, Canada, Australia, New
              Zealand, Europe, Asia, Africa & Gulf countries with complete travel and
              document legalization support across Pan India.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <button
                onClick={(e) => scrollToSection(e, "services")}
                className="h-14 w-full sm:w-auto px-8 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2"
              >
                Explore Services
              </button>
              <button
                onClick={(e) => scrollToSection(e, "contact")}
                className="h-14 w-full sm:w-auto px-8 bg-white/90 backdrop-blur-md text-brand-primary font-bold rounded-lg border-2 border-brand-primary/20 hover:border-brand-accent hover:text-brand-accent transition-colors shadow-lg flex items-center justify-center"
              >
                Contact Us
              </button>
            </div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-6 mt-4"
            >
              <div className="flex -space-x-4">
                <img loading="lazy"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Client"
                />
                <img loading="lazy"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
                  alt="Client"
                />
                <img loading="lazy"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                  alt="Client"
                />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-brand-bg flex items-center justify-center text-xs font-bold text-brand-primary shadow-sm drop-shadow">
                  10k+
                </div>
              </div>
              <div className="flex flex-col bg-white/40 backdrop-blur-sm p-2 rounded-xl border border-white/40">
                <div className="flex items-center gap-1 text-[#FFB800] mb-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-sm font-bold text-brand-primary drop-shadow-sm">
                  4.9/5 Client Satisfaction
                </p>
                <p className="text-xs text-slate-800 font-semibold mt-0.5">
                  Trusted by Travelers Across India
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="hidden lg:block lg:w-[45%]">
            {/* Empty right side to let the background image shine through */}
          </div>
        </div>
      </section>

      {/* Background Wrapper for Remaining Sections */}
      <div
        className="w-full relative z-10 bg-center bg-cover bg-fixed bg-no-repeat"
        style={{ backgroundImage: 'url("/bg-pattern.png")' }}
      >
        <div className="absolute inset-0 bg-white/60 pointer-events-none z-0"></div>

        {/* Services Section */}
        <section
          id="services"
          className="relative overflow-hidden py-20 px-[5%] font-sans group/section z-10"
        >
          {/* Decorative Grid Map - Left */}
          <div
            className="absolute top-5 -left-10 w-[360px] h-[220px] opacity-35 pointer-events-none z-0"
            style={{
              backgroundImage:
                "radial-gradient(#0a6cff 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              WebkitMaskImage:
                'url("https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg")',
              WebkitMaskSize: "cover",
            }}
          />
          {/* Decorative Grid Map - Right */}
          <div
            className="absolute top-5 -right-10 w-[360px] h-[220px] opacity-35 pointer-events-none z-0"
            style={{
              backgroundImage:
                "radial-gradient(#0a6cff 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              WebkitMaskImage:
                'url("https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg")',
              WebkitMaskSize: "cover",
            }}
          />

          <div className="relative z-10 text-center mb-[45px]">
            <div className="flex justify-center items-center gap-2 md:gap-4 mb-[22px]">
              <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#0a6cff]/40 rounded-full"></div>
              <div className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-2.5 md:py-3 rounded-full bg-[linear-gradient(90deg,#ebf3ff_0%,#ffffff_50%,#ebf3ff_100%)] border border-[#d6e6ff] text-[#0050d0] font-bold text-[18px] md:text-[22px] tracking-[1.5px] shadow-sm whitespace-nowrap">
                <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                  ★
                </span>
                <span>OUR CORE SERVICES</span>
                <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                  ★
                </span>
              </div>
              <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#0a6cff]/40 rounded-full"></div>
            </div>

            <h2 className="text-[#001050] leading-[1.18] font-extrabold max-w-[1000px] mx-auto flex flex-col items-center gap-1 md:gap-2">
              <span className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] xl:text-[36px] whitespace-nowrap">
                Everything You Need for International Travel
              </span>
              <span className="text-2xl md:text-[40px]">Under One Roof</span>
            </h2>

            <div className="mt-[28px] mx-auto max-w-[850px] bg-white/90 border-[1.5px] border-[#0a6cff] rounded-[18px] p-6 flex flex-col items-center justify-center gap-4 shadow-[0_12px_35px_rgba(10,108,255,0.13)] text-[#1a2b55] text-[16px] md:text-[20px] leading-relaxed text-center font-display font-medium">
              <p>
                A complete range of visa, travel, and document legalization services
                built to make international travel easier, faster, and
                stress-free.
              </p>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-7 max-w-[1320px] mx-auto">
            {/* Card 1 */}
            <div
              onClick={(e) => scrollToSection(e, "contact")}
              className="group relative overflow-hidden bg-white border border-[#dceaff] rounded-[28px] p-7 md:p-[34px] min-h-[560px] shadow-[0_16px_40px_rgba(0,80,208,0.10)] transition-all duration-300 ease-out hover:-translate-y-2.5 hover:shadow-[0_24px_55px_rgba(10,108,255,0.18)] hover:border-[#0a6cff] cursor-pointer"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(10,108,255,0.08), transparent 35%), #ffffff`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
              }}
            >
              <div className="flex justify-between items-center mb-[26px]">
                <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#0a6cff] to-[#0050d0] text-white flex items-center justify-center text-[34px] shadow-[0_10px_25px_rgba(10,108,255,0.35)]">
                  ✈️
                </div>
                <div className="bg-[#eaf3ff] text-[#0050d0] py-2 px-4 rounded-full text-sm font-bold shadow-[inset_0_0_0_1px_#d6e6ff]">
                  <span className="text-[#0a6cff]">★</span> Most Requested{" "}
                  <span className="text-[#0a6cff]">★</span>
                </div>
              </div>

              <div className="relative inline-block mb-[22px]">
                <h3 className="text-[25px] md:text-[30px] text-[#001050] font-extrabold pb-2">
                  Visa Services
                </h3>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90"></div>
              </div>
              <p className="text-[16px] text-[#26365f] leading-[1.7] mb-[26px] max-w-[360px] relative z-10">
                Expert visa consultation and end-to-end application assistance
                for a smooth process.
              </p>

              <ul className="list-none mb-[34px] relative z-10 space-y-[15px]">
                {[
                  "Documents Review & Preparations",
                  "Application Form Filling",
                  "Appointment Booking",
                  "Meet & Greet Assistance",
                  "Pick-up & Drop off",
                ].map((item, i) => (
                  <li
                    key={`visa-${i}`}
                    className="flex items-center gap-3 text-[#001050] text-[15.5px] font-medium"
                  >
                    <span className="min-w-[22px] h-[22px] rounded-full border-2 border-[#0a6cff] text-[#0a6cff] flex items-center justify-center text-[13px] font-extrabold shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative z-[3] mt-auto">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="inline-flex items-center gap-3 bg-gradient-to-br from-[#0a6cff] to-[#0050d0] text-white no-underline py-3.5 px-6 rounded-xl font-semibold shadow-[0_10px_25px_rgba(10,108,255,0.28)] transition-all duration-300 hover:translate-x-1 hover:shadow-[0_14px_30px_rgba(10,108,255,0.4)]"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className="absolute -right-4 -bottom-4 w-[240px] md:w-[320px] h-[240px] md:h-[320px] z-[1] pointer-events-none opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-500"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                  maskImage:
                    "radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                }}
              >
                <img loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply"
                  style={{
                    filter:
                      "sepia(1) hue-rotate(190deg) saturate(500%) contrast(1.2)",
                  }}
                  src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop"
                  alt="Passport Visa Documents"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={(e) => scrollToSection(e, "contact")}
              className="group relative overflow-hidden bg-white border border-[#dceaff] rounded-[28px] p-7 md:p-[34px] min-h-[560px] shadow-[0_16px_40px_rgba(0,80,208,0.10)] transition-all duration-300 ease-out hover:-translate-y-2.5 hover:shadow-[0_24px_55px_rgba(10,108,255,0.18)] hover:border-[#0a6cff] cursor-pointer"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(10,108,255,0.08), transparent 35%), #ffffff`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
              }}
            >
              <div className="flex justify-between items-center mb-[26px]">
                <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#0a6cff] to-[#0050d0] text-white flex items-center justify-center text-[34px] shadow-[0_10px_25px_rgba(10,108,255,0.35)]">
                  🌐
                </div>
                <div className="bg-[#eaf3ff] text-[#0050d0] py-2 px-4 rounded-full text-sm font-bold shadow-[inset_0_0_0_1px_#d6e6ff]">
                  <span className="text-[#0a6cff]">★</span> Top Rated{" "}
                  <span className="text-[#0a6cff]">★</span>
                </div>
              </div>

              <div className="relative inline-block mb-[22px]">
                <h3 className="text-[25px] md:text-[30px] text-[#001050] font-extrabold pb-2">
                  Global Services
                </h3>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90"></div>
              </div>
              <p className="text-[16px] text-[#26365f] leading-[1.7] mb-[26px] max-w-[360px] relative z-10">
                Complete travel solutions and global services for every kind of
                journey.
              </p>

              <ul className="list-none mb-[34px] relative z-10 space-y-[15px]">
                {[
                  "Tour Packages",
                  "International & Domestic Flight Booking",
                  "Hotel Booking",
                  "Travel Insurance",
                  "MICE",
                ].map((item, i) => (
                  <li
                    key={`global-${i}`}
                    className="flex items-center gap-3 text-[#001050] text-[15.5px] font-medium"
                  >
                    <span className="min-w-[22px] h-[22px] rounded-full border-2 border-[#0a6cff] text-[#0a6cff] flex items-center justify-center text-[13px] font-extrabold shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative z-[3] mt-auto">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="inline-flex items-center gap-3 bg-gradient-to-br from-[#0a6cff] to-[#0050d0] text-white no-underline py-3.5 px-6 rounded-xl font-semibold shadow-[0_10px_25px_rgba(10,108,255,0.28)] transition-all duration-300 hover:translate-x-1 hover:shadow-[0_14px_30px_rgba(10,108,255,0.4)]"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className="absolute -right-4 -bottom-4 w-[240px] md:w-[320px] h-[240px] md:h-[320px] z-[1] pointer-events-none opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-500"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                  maskImage:
                    "radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                }}
              >
                <img loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply"
                  style={{
                    filter:
                      "sepia(1) hue-rotate(190deg) saturate(500%) contrast(1.2)",
                  }}
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=600&auto=format&fit=crop"
                  alt="Flight and Building"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div
              onClick={(e) => scrollToSection(e, "contact")}
              className="group relative overflow-hidden bg-white border border-[#dceaff] rounded-[28px] p-7 md:p-[34px] min-h-[560px] shadow-[0_16px_40px_rgba(0,80,208,0.10)] transition-all duration-300 ease-out hover:-translate-y-2.5 hover:shadow-[0_24px_55px_rgba(10,108,255,0.18)] hover:border-[#0a6cff] cursor-pointer"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(10,108,255,0.08), transparent 35%), #ffffff`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
              }}
            >
              <div className="flex justify-between items-center mb-[26px]">
                <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#0a6cff] to-[#0050d0] text-white flex items-center justify-center text-[34px] shadow-[0_10px_25px_rgba(10,108,255,0.35)]">
                  📄
                </div>
                <div className="bg-[#eaf3ff] text-[#0050d0] py-2 px-4 rounded-full text-sm font-bold shadow-[inset_0_0_0_1px_#d6e6ff]">
                  <span className="text-[#0a6cff]">★</span> Highly Trusted{" "}
                  <span className="text-[#0a6cff]">★</span>
                </div>
              </div>

              <div className="relative inline-block mb-[22px]">
                <h3 className="text-[25px] md:text-[30px] text-[#001050] font-extrabold pb-2">
                  Legalization
                </h3>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90"></div>
              </div>
              <p className="text-[16px] text-[#26365f] leading-[1.7] mb-[26px] max-w-[360px] relative z-10">
                Reliable attestation and legalization solutions with complete
                support.
              </p>

              <ul className="list-none mb-[34px] relative z-10 space-y-[15px]">
                {[
                  "Affidavit",
                  "Notary",
                  "HRD & MEA Attestation",
                  "Apostille",
                  "Translation",
                ].map((item, i) => (
                  <li
                    key={`legal-${i}`}
                    className="flex items-center gap-3 text-[#001050] text-[15.5px] font-medium"
                  >
                    <span className="min-w-[22px] h-[22px] rounded-full border-2 border-[#0a6cff] text-[#0a6cff] flex items-center justify-center text-[13px] font-extrabold shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative z-[3] mt-auto">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="inline-flex items-center gap-3 bg-gradient-to-br from-[#0a6cff] to-[#0050d0] text-white no-underline py-3.5 px-6 rounded-xl font-semibold shadow-[0_10px_25px_rgba(10,108,255,0.28)] transition-all duration-300 hover:translate-x-1 hover:shadow-[0_14px_30px_rgba(10,108,255,0.4)]"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div
                className="absolute -right-4 -bottom-4 w-[240px] md:w-[320px] h-[240px] md:h-[320px] z-[1] pointer-events-none opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-500"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                  maskImage:
                    "radial-gradient(circle at bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                }}
              >
                <img loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply"
                  style={{
                    filter:
                      "sepia(1) hue-rotate(190deg) saturate(500%) contrast(1.2)",
                  }}
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=600&auto=format&fit=crop"
                  alt="Stamp Legalization"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why LuxVisa Section */}
        <section className="relative py-20 px-[5%] overflow-hidden font-sans z-10">
          {/* Decorative Grid Map - Left */}
          <div
            className="absolute top-[30px] -left-[80px] w-[360px] h-[230px] opacity-25 pointer-events-none rounded-[40%] blur-[0.2px] z-0"
            style={{
              backgroundImage:
                "radial-gradient(#0a6cff 1.4px, transparent 1.4px)",
              backgroundSize: "9px 9px",
            }}
          />
          {/* Decorative Grid Map - Right */}
          <div
            className="absolute top-[30px] -right-[80px] w-[360px] h-[230px] opacity-25 pointer-events-none rounded-[40%] blur-[0.2px] z-0"
            style={{
              backgroundImage:
                "radial-gradient(#0a6cff 1.4px, transparent 1.4px)",
              backgroundSize: "9px 9px",
            }}
          />

          <div className="relative z-10 text-center mb-[45px]">
            <div className="flex justify-center items-center gap-2 md:gap-4 mb-[22px]">
              <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#0a6cff]/40 rounded-full"></div>
              <div className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-2.5 md:py-3 rounded-full bg-[linear-gradient(90deg,#ebf3ff_0%,#ffffff_50%,#ebf3ff_100%)] border border-[#d6e6ff] text-[#0050d0] font-bold text-[18px] md:text-[22px] tracking-[1.5px] shadow-sm whitespace-nowrap">
                <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                  ★
                </span>
                <span>
                  WHY <span className="text-[#001050]">LUX</span>
                  <span className="text-[#0a6cff]">VISA</span>
                </span>
                <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                  ★
                </span>
              </div>
              <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#0a6cff]/40 rounded-full"></div>
            </div>

            <h2 className="text-[28px] md:text-[40px] leading-[1.2] text-[#001050] font-extrabold m-0 flex flex-col items-center">
              <span className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] whitespace-nowrap text-center">
                Why Travelers & Businesses Trust
              </span>
              <span className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] mt-1 md:mt-2 text-center font-display font-extrabold">
                <span className="text-[#001050]">Lux</span>
                <span className="text-[#0a6cff]">Visa</span>
              </span>
            </h2>

            <div className="relative inline-block my-[12px] mb-[28px]">
              <div className="w-[300px] sm:w-[500px] h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] mx-auto opacity-90"></div>
            </div>

            <div className="mx-auto max-w-[850px] bg-white/90 border-[1.5px] border-[#0a6cff] rounded-[18px] p-6 flex flex-col items-center justify-center gap-4 shadow-[0_12px_35px_rgba(10,108,255,0.13)] text-[#1a2b55] text-[16px] md:text-[20px] leading-relaxed text-center font-display font-medium">
              <p>
                We simplify complex visa processes with personalized assistance,
                accurate document legalization, and dedicated support trusted by
                travelers worldwide.
              </p>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
            {/* Card 1 */}
            <div className="group bg-white border border-[#dceaff] rounded-[24px] py-[34px] px-[22px] text-center min-h-[335px] shadow-[0_14px_35px_rgba(0,80,208,0.08)] transition-all duration-[350ms] ease-out hover:-translate-y-2.5 hover:border-[#0a6cff] hover:shadow-[0_22px_45px_rgba(10,108,255,0.18)] cursor-pointer">
              <div className="w-[92px] h-[92px] mx-auto mb-[24px] rounded-full bg-gradient-to-br from-[#0a6cff] to-[#0050d0] flex items-center justify-center text-[38px] text-white shadow-[0_14px_30px_rgba(10,108,255,0.35)]">
                🛡️
              </div>
              <div className="relative inline-block mb-[20px]">
                <h3 className="text-[#001050] text-[21px] font-extrabold pb-2">
                  Expert Guidance
                </h3>
                <div className="absolute bottom-0 left-[-5%] w-[110%] h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90"></div>
              </div>
              <p className="text-[#4a4a4a] text-[15.5px] leading-[1.7]">
                Professional consultation and personalized visa assistance for
                every client.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-[#dceaff] rounded-[24px] py-[34px] px-[22px] text-center min-h-[335px] shadow-[0_14px_35px_rgba(0,80,208,0.08)] transition-all duration-[350ms] ease-out hover:-translate-y-2.5 hover:border-[#0a6cff] hover:shadow-[0_22px_45px_rgba(10,108,255,0.18)] cursor-pointer">
              <div className="w-[92px] h-[92px] mx-auto mb-[24px] rounded-full bg-gradient-to-br from-[#0a6cff] to-[#0050d0] flex items-center justify-center text-[38px] text-white shadow-[0_14px_30px_rgba(10,108,255,0.35)]">
                ✈️
              </div>
              <div className="relative inline-block mb-[20px]">
                <h3 className="text-[#001050] text-[21px] font-extrabold pb-2">
                  Pan India Service
                </h3>
                <div className="absolute bottom-0 left-[-5%] w-[110%] h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90"></div>
              </div>
              <p className="text-[#4a4a4a] text-[15.5px] leading-[1.7]">
                Serving travel partners, corporate clients, professionals,
                individuals and families across India.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-[#dceaff] rounded-[24px] py-[34px] px-[22px] text-center min-h-[335px] shadow-[0_14px_35px_rgba(0,80,208,0.08)] transition-all duration-[350ms] ease-out hover:-translate-y-2.5 hover:border-[#0a6cff] hover:shadow-[0_22px_45px_rgba(10,108,255,0.18)] cursor-pointer">
              <div className="w-[92px] h-[92px] mx-auto mb-[24px] rounded-full bg-gradient-to-br from-[#0a6cff] to-[#0050d0] flex items-center justify-center text-[38px] text-white shadow-[0_14px_30px_rgba(10,108,255,0.35)]">
                ⏱️
              </div>
              <div className="relative inline-block mb-[20px]">
                <h3 className="text-[#001050] text-[21px] font-extrabold pb-2">
                  Fast & Reliable
                </h3>
                <div className="absolute bottom-0 left-[-5%] w-[110%] h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90"></div>
              </div>
              <p className="text-[#4a4a4a] text-[15.5px] leading-[1.7]">
                Quick, dependable support with a clear and transparent process.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white border border-[#dceaff] rounded-[24px] py-[34px] px-[22px] text-center min-h-[335px] shadow-[0_14px_35px_rgba(0,80,208,0.08)] transition-all duration-[350ms] ease-out hover:-translate-y-2.5 hover:border-[#0a6cff] hover:shadow-[0_22px_45px_rgba(10,108,255,0.18)] cursor-pointer">
              <div className="w-[92px] h-[92px] mx-auto mb-[24px] rounded-full bg-gradient-to-br from-[#0a6cff] to-[#0050d0] flex items-center justify-center text-[38px] text-white shadow-[0_14px_30px_rgba(10,108,255,0.35)]">
                📄
              </div>
              <div className="relative inline-block mb-[20px]">
                <h3 className="text-[#001050] text-[21px] font-extrabold pb-2">
                  Transparent Process
                </h3>
                <div className="absolute bottom-0 left-[-5%] w-[110%] h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90"></div>
              </div>
              <p className="text-[#4a4a4a] text-[15.5px] leading-[1.7]">
                Step-by-step updates and honest guidance from start to finish.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group bg-white border border-[#dceaff] rounded-[24px] py-[34px] px-[22px] text-center min-h-[335px] shadow-[0_14px_35px_rgba(0,80,208,0.08)] transition-all duration-[350ms] ease-out hover:-translate-y-2.5 hover:border-[#0a6cff] hover:shadow-[0_22px_45px_rgba(10,108,255,0.18)] cursor-pointer">
              <div className="w-[92px] h-[92px] mx-auto mb-[24px] rounded-full bg-gradient-to-br from-[#0a6cff] to-[#0050d0] flex items-center justify-center text-[38px] text-white shadow-[0_14px_30px_rgba(10,108,255,0.35)]">
                🎧
              </div>
              <div className="relative inline-block mb-[20px]">
                <h3 className="text-[#001050] text-[21px] font-extrabold pb-2">
                  End-to-End Support
                </h3>
                <div className="absolute bottom-0 left-[-5%] w-[110%] h-[3px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90"></div>
              </div>
              <p className="text-[#4a4a4a] text-[15.5px] leading-[1.7]">
                From document legalization to visa assistance — everything handled under
                one roof.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-[48px] mx-auto max-w-[1100px] bg-white border-[1.5px] border-[#b8d5ff] rounded-[20px] py-[26px] px-[34px] flex flex-col md:flex-row items-center gap-[28px] shadow-[0_15px_35px_rgba(0,80,208,0.08)]">
            <div className="min-w-[78px] h-[78px] rounded-full bg-[#eaf3ff] text-[#0a6cff] flex items-center justify-center text-[34px]">
              🎧
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[#001050] text-[28px] font-bold mb-[5px]">
                Need Expert Visa Assistance?
              </h3>
              <p className="text-[#4a4a4a] text-[16px]">
                Get professional guidance for your international travel plans.
              </p>
            </div>
            <a
              href="https://wa.me/919560367678"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-br from-[#0a6cff] to-[#0050d0] text-white no-underline py-[15px] px-[28px] rounded-[10px] font-bold shadow-[0_10px_25px_rgba(10,108,255,0.3)] transition-all duration-300 hover:translate-x-[5px] w-full md:w-auto text-center whitespace-nowrap"
            >
              Get Free Consultation →
            </a>
          </div>
        </section>

        {/* Countries / Destinations Section */}
        <section id="countries" className="py-20 relative overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-6 relative">
              <div className="flex justify-center items-center gap-2 md:gap-4 mb-[22px]">
                <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#0a6cff]/40 rounded-full"></div>
                <div className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-2.5 md:py-3 rounded-full bg-[linear-gradient(90deg,#ebf3ff_0%,#ffffff_50%,#ebf3ff_100%)] border border-[#d6e6ff] text-[#0050d0] font-bold text-[18px] md:text-[22px] tracking-[1.5px] shadow-sm whitespace-nowrap">
                  <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                    ★
                  </span>
                  <span>POPULAR VISA DESTINATIONS</span>
                  <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                    ★
                  </span>
                </div>
                <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#0a6cff]/40 rounded-full"></div>
              </div>
            </div>
            <div className="w-full max-w-6xl mx-auto mb-16">
              <h2 className="text-[28px] md:text-[40px] leading-[1.2] text-[#001050] font-extrabold m-0 flex flex-col items-center mb-10">
                <span className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] text-center max-w-[800px]">
                  Your Journey Begins with the Right Visa Destination
                </span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="group bg-white border border-[#dceaff] p-6 lg:p-8 rounded-[24px] shadow-[0_14px_35px_rgba(0,80,208,0.08)] transition-all duration-[350ms] ease-out hover:-translate-y-2.5 hover:border-[#0a6cff] hover:shadow-[0_22px_45px_rgba(10,108,255,0.18)] cursor-pointer flex items-center gap-5 lg:gap-6">
                  <div className="flex h-[86px] w-[90px] flex-shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-b from-[#0a6cff] to-[#0050d0] shadow-[0_10px_25px_rgba(10,108,255,0.3)] group-hover:scale-105 transition-transform duration-300">
                    <Globe
                      size={46}
                      color="white"
                      strokeWidth={1.5}
                      className="opacity-95"
                    />
                  </div>
                  <div className="flex flex-col items-start text-left justify-center">
                    <h3 className="text-[42px] lg:text-[48px] font-extrabold text-[#001050] leading-none mb-1">
                      50+
                    </h3>
                    <div className="relative inline-block pb-1">
                      <p className="text-[14px] lg:text-[15px] font-bold text-[#001050] tracking-wide leading-tight">
                        Countries Covered
                      </p>
                      <div className="absolute bottom-0 left-[-5%] w-[110%] h-[2.5px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90 group-hover:via-[#0050d0] transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>

                <div className="group bg-white border border-[#dceaff] p-6 lg:p-8 rounded-[24px] shadow-[0_14px_35px_rgba(0,80,208,0.08)] transition-all duration-[350ms] ease-out hover:-translate-y-2.5 hover:border-[#0a6cff] hover:shadow-[0_22px_45px_rgba(10,108,255,0.18)] cursor-pointer flex items-center gap-4 lg:gap-5">
                  <div className="flex h-[76px] w-[76px] lg:h-[86px] lg:w-[86px] flex-shrink-0 items-center justify-center rounded-full bg-[#f0f6ff] text-[#0a6cff] group-hover:bg-[#0a6cff] group-hover:text-white transition-colors duration-300 shadow-[0_8px_20px_rgba(0,80,208,0.06)]">
                    <MapPin
                      size={32}
                      className="group-hover:text-white text-[#0a6cff] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <div className="relative inline-block pb-1.5 mb-1.5 w-fit">
                      <h3 className="text-[17px] lg:text-[19px] font-bold text-[#001050] leading-none">
                        Global Reach
                      </h3>
                      <div className="absolute bottom-0 left-[-5%] w-[110%] h-[2.5px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90 group-hover:via-[#0050d0] transition-colors duration-300"></div>
                    </div>
                    <p className="text-[13.5px] lg:text-[14.5px] text-[#001050]/80 leading-snug">
                      Visa Assistance Across Major International Destinations
                    </p>
                  </div>
                </div>

                <div className="group bg-white border border-[#dceaff] p-6 lg:p-8 rounded-[24px] shadow-[0_14px_35px_rgba(0,80,208,0.08)] transition-all duration-[350ms] ease-out hover:-translate-y-2.5 hover:border-[#0a6cff] hover:shadow-[0_22px_45px_rgba(10,108,255,0.18)] cursor-pointer flex items-center gap-4 lg:gap-5">
                  <div className="flex h-[76px] w-[76px] lg:h-[86px] lg:w-[86px] flex-shrink-0 items-center justify-center rounded-full bg-[#f0f6ff] text-[#0a6cff] group-hover:bg-[#0a6cff] group-hover:text-white transition-colors duration-300 shadow-[0_8px_20px_rgba(0,80,208,0.06)]">
                    <Plane
                      size={34}
                      className="transform relative -top-0.5 right-0.5 group-hover:text-white text-[#0a6cff] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <div className="relative inline-block pb-1.5 mb-1.5 w-fit">
                      <h3 className="text-[17px] lg:text-[19px] font-bold text-[#001050] leading-none">
                        One World, Endless Possibilities
                      </h3>
                      <div className="absolute bottom-0 left-[-5%] w-[110%] h-[2.5px] bg-gradient-to-r from-transparent via-[#0a6cff] to-transparent rounded-[100%] opacity-90 group-hover:via-[#0050d0] transition-colors duration-300"></div>
                    </div>
                    <p className="text-[13.5px] lg:text-[14.5px] text-[#001050]/80 leading-snug">
                      Tourist • Business • Family Visit Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "USA",
                  desc: "New York • California • Las Vegas",
                  img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop",
                },
                {
                  title: "UK",
                  desc: "London • Manchester • Scotland",
                  img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  title: "Canada",
                  desc: "Toronto • Vancouver • Niagara Falls",
                  img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop",
                },
                {
                  title: "Schengen",
                  desc: "Paris • Rome • Switzerland",
                  img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop",
                },
                {
                  title: "Australia",
                  desc: "Sydney • Melbourne • Gold Coast",
                  img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop",
                },
                {
                  title: "New Zealand",
                  desc: "Auckland • Queenstown • Rotorua",
                  img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  title: "Asia",
                  desc: "Singapore • Thailand • Malaysia",
                  img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  title: "Gulf",
                  desc: "Dubai • Qatar • Saudi Arabia",
                  img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2068&auto=format&fit=crop",
                },
                {
                  title: "Africa",
                  desc: "Kenya • Egypt • South Africa",
                  img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
                },
              ].map((dest, idx) => (
                <div
                  key={idx}
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="group relative h-64 rounded-xl overflow-hidden corporate-card border border-gray-100 cursor-pointer"
                >
                  <img loading="lazy"
                    src={dest.img}
                    alt={dest.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent z-10 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h3 className="text-2xl font-display font-semibold text-white mb-1 drop-shadow-md">
                      {dest.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90 text-sm font-medium drop-shadow-sm">
                      <MapPin
                        size={14}
                        className="text-brand-accent shrink-0"
                      />
                      {dest.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us & Additional Services Section */}
        <section id="about" className="py-20 relative overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 relative">
              <div className="flex justify-center items-center gap-2 md:gap-4 mb-[22px]">
                <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#0a6cff]/40 rounded-full"></div>
                <div className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-2.5 md:py-3 rounded-full bg-[linear-gradient(90deg,#ebf3ff_0%,#ffffff_50%,#ebf3ff_100%)] border border-[#d6e6ff] text-[#0050d0] font-bold text-[18px] md:text-[22px] tracking-[1.5px] shadow-sm whitespace-nowrap">
                  <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                    ★
                  </span>
                  <span>ABOUT <span className="text-[#001050]">LUX</span><span className="text-[#0a6cff]">VISA</span></span>
                  <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                    ★
                  </span>
                </div>
                <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#0a6cff]/40 rounded-full"></div>
              </div>
              <h2 className="text-[28px] md:text-[40px] leading-[1.2] text-[#001050] font-extrabold m-0 flex flex-col items-center">
                <span className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] whitespace-nowrap text-center">
                  Making International Travel Simple
                </span>
                <span className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] mt-1 md:mt-2 text-center">
                  & Stress-Free
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col bg-white/50 hover:bg-white transition-all duration-300 border border-[#dceaff] rounded-[24px] shadow-[0_8px_20px_rgba(0,80,208,0.04)] hover:shadow-[0_12px_30px_rgba(0,80,208,0.08)] overflow-hidden">
                <div className="p-6 md:p-8">
                  <p className="text-[#001050] font-medium leading-relaxed text-justify m-0 text-[15px] sm:text-base">
                    <span className="font-extrabold text-[#001050]">Lux</span>
                    <span className="font-extrabold text-[#0a6cff]">
                      Visa
                    </span>{" "}
                    Global Services is a trusted Delhi-based visa and travel
                    document legalization consultancy delivering professional solutions
                    for travel partners, corporate clients, professionals,
                    individuals and families across Pan India.
                  </p>
                </div>
                
                <div className="w-full flex justify-center">
                  <div className="w-[85%] h-[2.5px] bg-gradient-to-r from-transparent via-[#0a6cff]/30 to-transparent rounded-full"></div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-[#001050] font-medium leading-relaxed text-justify m-0 text-[15px] sm:text-base">
                    We specialize in Tourist Visa, Business Visa and Family Visit
                    Visa services along with international flight booking, hotel
                    reservations and complete document legalization support for global
                    destinations.
                  </p>
                </div>
                
                <div className="w-full flex justify-center">
                  <div className="w-[85%] h-[2.5px] bg-gradient-to-r from-transparent via-[#0a6cff]/30 to-transparent rounded-full"></div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-[#001050] font-medium leading-relaxed text-justify m-0 text-[15px] sm:text-base">
                    From Apostille and MEA Attestation to Embassy Legalization,
                    Translation, Notary and Affidavit services — we provide
                    reliable end-to-end assistance under one roof with a focus on
                    professionalism, transparency and customer satisfaction.
                  </p>
                </div>
                
                <div className="w-full flex justify-center">
                  <div className="w-[85%] h-[2.5px] bg-gradient-to-r from-transparent via-[#0a6cff]/30 to-transparent rounded-full"></div>
                </div>

                <div className="p-6 md:p-8 bg-gradient-to-b from-transparent to-[#f5f8ff]/50">
                  <p className="text-[#001050] leading-relaxed text-justify m-0 text-[15px] sm:text-base font-medium">
                    Our mission is to make international travel smooth, reliable
                    and hassle-free with expert guidance, fast processing and
                    personalized support for every client.
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-full lg:min-h-[400px] mt-8 lg:mt-0 z-10 w-full mb-8 lg:mb-0">
                <img loading="lazy"
                  src="/my-office.jpg"
                  alt="Consultancy Office"
                  className="w-full h-full object-cover rounded-2xl"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse at center, black 50%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, black 50%, transparent 100%)",
                  }}
                />
              </div>
            </div>

            {/* Stats / Trust Badges Grid placed statically below About LuxVisa */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white border border-[#dceaff] text-left p-5 rounded-[20px] shadow-[0_10px_30px_rgba(0,80,208,0.06)] flex items-center gap-4 transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:border-[#0a6cff] hover:shadow-[0_16px_40px_rgba(10,108,255,0.15)] cursor-pointer">
                <div className="bg-brand-accent/10 text-brand-accent p-3 rounded-lg border border-brand-accent/20 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="font-display font-bold text-brand-primary text-base leading-tight">
                    98% Visa Approval Rate
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-text/60 font-semibold mt-1.5">
                    High Success Rate
                  </p>
                </div>
              </div>

              <div className="group bg-white border border-[#dceaff] text-left p-5 rounded-[20px] shadow-[0_10px_30px_rgba(0,80,208,0.06)] flex items-center gap-4 transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:border-[#0a6cff] hover:shadow-[0_16px_40px_rgba(10,108,255,0.15)] cursor-pointer">
                <div className="bg-[#eaf3ff] text-[#0a6cff] p-3 rounded-lg border border-[#0a6cff]/20 group-hover:scale-110 group-hover:bg-[#0a6cff] group-hover:text-white transition-all duration-300">
                  <Users size={28} />
                </div>
                <div>
                  <p className="font-display font-bold text-brand-primary text-base leading-tight">
                    10,000+ Happy Customers
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-text/60 font-semibold mt-1.5">
                    Satisfied Travelers
                  </p>
                </div>
              </div>

              <div className="group bg-white border border-[#dceaff] text-left p-5 rounded-[20px] shadow-[0_10px_30px_rgba(0,80,208,0.06)] flex items-center gap-4 transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:border-[#0a6cff] hover:shadow-[0_16px_40px_rgba(10,108,255,0.15)] cursor-pointer">
                <div className="bg-purple-50 text-purple-600 p-3 rounded-lg border border-purple-100 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="font-display font-bold text-brand-primary text-base leading-tight">
                    Fast & Reliable Processing
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-text/60 font-semibold mt-1.5">
                    Quick Turnaround
                  </p>
                </div>
              </div>

              <div className="group bg-white border border-[#dceaff] text-left p-5 rounded-[20px] shadow-[0_10px_30px_rgba(0,80,208,0.06)] flex items-center gap-4 transition-all duration-[350ms] ease-out hover:-translate-y-2 hover:border-[#0a6cff] hover:shadow-[0_16px_40px_rgba(10,108,255,0.15)] cursor-pointer">
                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-lg border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="font-display font-bold text-brand-primary text-base leading-tight">
                    Pan India Service
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-text/60 font-semibold mt-1.5">
                    Available Everywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 relative z-10 overflow-hidden bg-gradient-to-b from-[#f8faff] to-white"
        >
          {/* Background Elements */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, #0a6cff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>

          {/* Top Right Floating Visual Elements */}
          <div className="absolute top-10 right-10 lg:top-20 lg:right-20 z-0 pointer-events-none opacity-60">
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48"
            >
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <Plane className="absolute top-0 right-10 text-[#0a6cff] w-12 h-12 transform rotate-45 opacity-80" />
              <MapPin className="absolute bottom-10 left-10 text-[#0050d0] w-10 h-10 opacity-60" />
              <svg className="absolute w-[200px] h-[100px] top-10 right-5" viewBox="0 0 200 100" fill="none" stroke="currentColor">
                <path d="M0,100 Q100,0 200,50" className="text-[#0a6cff]/20" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </motion.div>
          </div>

          <div className="max-w-[1240px] mx-auto px-6 relative z-10">
            {/* Headers */}
            <div className="text-center mb-16 relative">
              <div className="flex justify-center items-center gap-2 md:gap-4 mb-[22px]">
                <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#0a6cff]/40 rounded-full"></div>
                <div className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-2.5 md:py-3 rounded-full bg-[linear-gradient(90deg,#ebf3ff_0%,#ffffff_50%,#ebf3ff_100%)] border border-[#dceaff] text-[#0050d0] font-bold text-[18px] md:text-[22px] tracking-[1.5px] shadow-sm whitespace-nowrap">
                  <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                    ★
                  </span>
                  <span>CONTACT <span className="text-[#001050]">US</span></span>
                  <span className="text-[#0a6cff] text-base md:text-lg leading-none">
                    ★
                  </span>
                </div>
                <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#0a6cff]/40 rounded-full"></div>
              </div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] text-[#001050] font-extrabold max-w-[850px] mx-auto text-center"
              >
                Get in touch with our experts for your <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a6cff] to-[#0050d0]">visa and travel</span> needs
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
              {/* Left Side: Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[25px] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,16,80,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(10,108,255,0.08)] transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0a6cff]/5 to-transparent rounded-bl-full rounded-tr-[25px]"></div>
                  
                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300 group/item cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0f6ff] to-[#e0eeff] flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-gradient-to-br group-hover/item:from-[#0a6cff] group-hover/item:to-[#0050d0] transition-colors duration-500">
                        <MapPin className="w-6 h-6 text-[#0a6cff] group-hover/item:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#0a6cff] uppercase tracking-wider mb-1">
                          Location
                        </p>
                        <p className="text-[#001050] font-bold text-lg leading-tight">
                          Delhi, India
                        </p>
                        <p className="text-[#001050]/60 text-sm font-medium mt-0.5">
                          Service Area: Pan India
                        </p>
                      </div>
                    </div>

                    <a href="tel:+919560367678" className="flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300 group/item">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0f6ff] to-[#e0eeff] flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-gradient-to-br group-hover/item:from-[#0a6cff] group-hover/item:to-[#0050d0] transition-colors duration-500">
                        <Phone className="w-6 h-6 text-[#0a6cff] group-hover/item:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#0a6cff] uppercase tracking-wider mb-1">
                          Phone
                        </p>
                        <p className="text-[#001050] font-bold text-lg leading-tight">
                          +91 9560367678
                        </p>
                      </div>
                    </a>

                    <a href="mailto:info@luxvisaglobal.com" className="flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300 group/item">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f0f6ff] to-[#e0eeff] flex items-center justify-center shrink-0 shadow-inner group-hover/item:bg-gradient-to-br group-hover/item:from-[#0a6cff] group-hover/item:to-[#0050d0] transition-colors duration-500">
                        <Mail className="w-6 h-6 text-[#0a6cff] group-hover/item:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#0a6cff] uppercase tracking-wider mb-1">
                          Email
                        </p>
                        <p className="text-[#001050] font-bold text-lg break-all leading-tight">
                          info@luxvisaglobal.com
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* Quick Connect */}
                  <div className="mt-10 pt-8 border-t border-[#001050]/5">
                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="https://wa.me/919560367678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-b from-[#25D366] to-[#1DA851] text-white font-semibold text-sm shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1"
                      >
                        <MessageCircle size={18} /> <span>WhatsApp</span>
                        <ArrowRight size={16} className="opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300" />
                      </a>
                      <a
                        href="tel:+919560367678"
                        className="group/btn flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-b from-[#001050] to-[#000830] text-white font-semibold text-sm shadow-[0_8px_20px_rgba(0,16,80,0.25)] hover:shadow-[0_12px_25px_rgba(0,16,80,0.35)] transition-all duration-300 hover:-translate-y-1"
                      >
                        <Phone size={18} /> <span>Call Now</span>
                        <ArrowRight size={16} className="opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 shadow-[0_4px_15px_rgba(0,16,80,0.03)] border border-[#dceaff] flex flex-col sm:flex-row items-start sm:items-center gap-4 group">
                    <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#f0f6ff] to-[#e0eeff] flex flex-shrink-0 items-center justify-center text-[#0a6cff] group-hover:scale-105 transition-transform duration-300">
                      <Clock size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#001050] mb-1">Business Hours</h4>
                      <p className="text-[13px] font-semibold text-[#001050]/70">Mon – Sat</p>
                      <p className="text-[13px] font-semibold text-[#001050]/70 mt-0.5">10:00 AM – 07:00 PM</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-[0_4px_15px_rgba(0,16,80,0.03)] border border-[#dceaff] flex flex-col sm:flex-row items-start sm:items-center gap-4 group">
                    <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#f0f6ff] to-[#e0eeff] flex flex-shrink-0 items-center justify-center text-[#0a6cff] group-hover:scale-105 transition-transform duration-300">
                      <Headset size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#001050] mb-1">Average Response</h4>
                      <p className="text-[13px] font-semibold text-[#001050]/70">Within</p>
                      <p className="text-[13px] font-semibold text-[#001050]/70 mt-0.5">15 – 30 Minutes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_15px_rgba(0,16,80,0.03)] border border-[#dceaff] flex flex-col sm:flex-row items-center gap-5 sm:gap-6 group hover:shadow-[0_8px_25px_rgba(10,108,255,0.08)] transition-all">
                  <div className="w-full sm:w-[50%] h-[120px] rounded-xl overflow-hidden relative border border-[#dceaff]/50">
                    <img loading="lazy" 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80" 
                      alt="Office Location Map" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-white/10"></div>
                    {/* Add a pin in the middle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] drop-shadow-md">
                      <div className="relative">
                        <MapPin size={36} className="text-[#0a6cff] fill-[#0a6cff] drop-shadow-sm z-10 relative" />
                        <div className="absolute top-[8px] left-[8px] w-[20px] h-[20px] bg-white rounded-full z-20"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-[50%] flex flex-col justify-center items-start">
                    <h4 className="text-[16px] font-bold text-[#001050] mb-2">Our Office</h4>
                    <p className="text-[14px] font-semibold text-[#001050]/70 mb-4">Delhi, India</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#0a6cff] hover:text-[#0050d0] transition-colors group/link">
                      View on Map <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/90 backdrop-blur-xl border border-white rounded-[25px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,16,80,0.08)] relative z-10">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2 relative group">
                        <label className="text-[13px] font-bold text-[#001050] ml-1">Full Name</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 bg-[#f8faff] border border-[#dceaff] text-[#001050] focus:bg-white focus:border-[#0a6cff] focus:ring-4 focus:ring-[#0a6cff]/10 outline-none transition-all rounded-[18px] text-[15px] font-medium shadow-sm hover:border-[#0a6cff]/40"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2 relative group">
                        <label className="text-[13px] font-bold text-[#001050] ml-1">Phone Number</label>
                        <input
                          type="text"
                          className="w-full px-5 py-4 bg-[#f8faff] border border-[#dceaff] text-[#001050] focus:bg-white focus:border-[#0a6cff] focus:ring-4 focus:ring-[#0a6cff]/10 outline-none transition-all rounded-[18px] text-[15px] font-medium shadow-sm hover:border-[#0a6cff]/40"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2 relative group">
                        <label className="text-[13px] font-bold text-[#001050] ml-1">Email</label>
                        <input
                          type="email"
                          className="w-full px-5 py-4 bg-[#f8faff] border border-[#dceaff] text-[#001050] focus:bg-white focus:border-[#0a6cff] focus:ring-4 focus:ring-[#0a6cff]/10 outline-none transition-all rounded-[18px] text-[15px] font-medium shadow-sm hover:border-[#0a6cff]/40"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2 relative group">
                        <label className="text-[13px] font-bold text-[#001050] ml-1">Service Required</label>
                        <div className="relative">
                          <select defaultValue="" className="w-full px-5 py-4 bg-[#f8faff] border border-[#dceaff] text-[#001050] focus:bg-white focus:border-[#0a6cff] focus:ring-4 focus:ring-[#0a6cff]/10 outline-none transition-all appearance-none rounded-[18px] text-[15px] font-medium shadow-sm hover:border-[#0a6cff]/40 cursor-pointer">
                            <option value="" disabled className="text-gray-400">Select a Service</option>
                            <option value="visa">Visa Assistance</option>
                            <option value="flight">Flight Booking</option>
                            <option value="hotel">Hotel Booking</option>
                            <option value="insurance">Travel Insurance</option>
                            <option value="doc">Document Legalization</option>
                            <option value="other">Other Query</option>
                          </select>
                          <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#001050]/50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 relative group">
                      <label className="text-[13px] font-bold text-[#001050] ml-1">Message</label>
                      <textarea
                        className="w-full px-5 py-4 bg-[#f8faff] border border-[#dceaff] text-[#001050] focus:bg-white focus:border-[#0a6cff] focus:ring-4 focus:ring-[#0a6cff]/10 outline-none transition-all rounded-[18px] text-[15px] font-medium min-h-[250px] resize-none shadow-sm hover:border-[#0a6cff]/40"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                      <button className="group w-full sm:w-auto px-8 py-4.5 bg-[#0a6cff] text-white font-bold text-[16px] rounded-[14px] hover:bg-[#0050d0] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 shrink-0 shadow-[0_8px_20px_rgba(10,108,255,0.25)] hover:shadow-[0_12px_25px_rgba(10,108,255,0.35)]">
                        Submit Request 
                        <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </button>
                      
                      {/* Privacy Badge */}
                      <div className="flex items-center gap-4">
                        <div className="bg-[#f0f6ff] text-[#0a6cff] p-3 rounded-full shrink-0 shadow-sm border border-white">
                          <ShieldCheck size={26} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="text-[#001050] font-bold text-[13px]">Your Information is Safe</h4>
                          <p className="text-[12px] text-[#001050]/70 mt-0.5 leading-snug font-medium">
                            We respect your privacy. Your details are secure and will never be shared.
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom Trust Strip */}
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 mt-16 pb-8">
             <div className="bg-white py-4 px-6 md:px-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,16,80,0.03)] border border-blue-50 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                <div className="flex -space-x-3 shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100"><img loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Client"/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"><img loading="lazy" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Client"/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0a6cff] flex items-center justify-center text-white text-[10px] font-bold">+10k</div>
                </div>
                <p className="text-[14px] md:text-[15px] font-semibold text-[#001050] text-center">
                  Trusted by Travelers, Families & Corporate Clients Across India
                </p>
             </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-brand-primary text-white pt-16 pb-8 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="inline-block bg-white/5 p-3 rounded-[1.5rem] mb-6">
                <img
                  src="/logo.png"
                  alt="LuxVisa Logo"
                  className="h-24 lg:h-28 w-auto object-contain brightness-0 invert"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              <p className="text-brand-accent font-accent uppercase tracking-widest text-[10px] font-semibold mb-4">
                Passport to Possibilities
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
                Trusted visa consultancy providing professional visa, travel and
                document legalization services across Pan India.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/LuxVisaGlobalServices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-accent transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://instagram.com/luxvisaglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-accent transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/luxvisa-global-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-accent transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@LuxVisaGlobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-accent transition-colors"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-accent transition-colors"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-display font-semibold mb-5 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a
                    href="#"
                    onClick={(e) => scrollToSection(e, "home")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, "services")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#countries"
                    onClick={(e) => scrollToSection(e, "countries")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-display font-semibold mb-5 text-white">
                Services
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, "services")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Visa Assistance
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, "services")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Flight Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, "services")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Hotel Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, "services")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, "services")}
                    className="hover:text-brand-accent transition-colors"
                  >
                    Document Legalization
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-display font-semibold mb-5 text-white">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold text-white">Lux</span>
                    <span className="font-semibold text-brand-accent">
                      Visa
                    </span>{" "}
                    Global Services
                    <br />
                    Delhi, India
                    <br />
                    Serving Pan India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  <a
                    href="tel:+919560367678"
                    className="hover:text-brand-accent transition-colors"
                  >
                    +91 9560367678
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <a
                    href="mailto:info@luxvisaglobal.com"
                    className="hover:text-brand-accent transition-colors break-all"
                  >
                    info@luxvisaglobal.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 pt-8 border-t border-white/10">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Lux</span>
            <span className="font-semibold text-brand-accent">Visa</span> Global
            Services. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <a
        href="https://wa.me/919560367678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <a
        href="tel:+919560367678"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-brand-accent hover:bg-brand-secondary text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        title="Call Us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}

export default App;
