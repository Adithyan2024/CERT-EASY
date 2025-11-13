import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Menu,
  X,
  Star,
  Award,
  BookOpen,
  Users,
  Clock,
  CheckCircle2,
  Shield,
  TrendingUp,
  Sparkles,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Heart,
  MessageCircle,
} from "lucide-react";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import certeasy from "./assets/logo png.png";
import securityImage from "./assets/security.png";
import cloud from "./assets/cloud.png";
import cyber from "./assets/cyber.png";
import network from "./assets/network+.png";
import pmp from "./assets/PMP.png";
import advancedCyber from "./assets/advanced cyber.png";
import security from "./assets/Add-a-subheading-1.png";
import cloud2 from "./assets/cloud-essentials2.png";
import project from "./assets/project.png";
import mainpic from "./assets/pexels-mart-production-7255775.jpg";

type Page = "home" | "courses" | "courseDetail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedCourseId, setSelectedCourseId] = useState<number>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const { scrollYProgress } = useScroll();

  const whatsappNumber = "18482971003";
  const whatsappMessage =
    "Hi Cert-Easy! I would like to know more about your certification courses.";

  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowWhatsApp(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targets = {
      students: 50000,
      courses: 150,
      instructors: 200,
      satisfaction: 98,
    };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setStats({
        students: Math.floor((targets.students / steps) * step),
        courses: Math.floor((targets.courses / steps) * step),
        instructors: Math.floor((targets.instructors / steps) * step),
        satisfaction: Math.floor((targets.satisfaction / steps) * step),
      });

      if (step >= steps) {
        setStats(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  const handleCourseClick = (courseId: number) => {
    setSelectedCourseId(courseId);
    setCurrentPage("courseDetail");
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  const handleBackToCourses = () => {
    setCurrentPage("courses");
    window.scrollTo(0, 0);
  };

  const navigateToCourses = () => {
    setCurrentPage("courses");
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (currentPage === "courses") {
    return (
      <>
        <Header />
        <Courses
          onCourseClick={handleCourseClick}
          onWhatsAppClick={handleWhatsAppClick}
        />
        <Footer />
      </>
    );
  }

  if (currentPage === "courseDetail") {
    return (
      <>
        <Header />
        <CourseDetail
          courseId={selectedCourseId}
          onBack={handleBackToCourses}
          onWhatsAppClick={handleWhatsAppClick}
        />
        <Footer />
      </>
    );
  }

  function Header() {
    return (
      <>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-700 via-teal-600 to-indigo-600 z-[100] origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <AnimatePresence>
          {showWhatsApp && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWhatsAppClick}
              className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-green-600 hover:to-green-700 transition-all group"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.header
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50"
              : "bg-white shadow-sm"
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div
                className="flex items-center gap-2 cursor-pointer"
                whileTap={{ scale: 0.95 }}
                onClick={handleBackToHome}
              >
                <div className="flex items-center justify-center h-12 w-auto">
                  <img
                    src={certeasy}
                    alt="Cert-Easy Logo"
                    className="h-full w-auto object-contain max-w-[150px]"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        e.currentTarget.style.display = "none";
                        parent.innerHTML =
                          '<div class="h-12 w-12 bg-gradient-to-br from-slate-700 via-teal-600 to-indigo-700 rounded-lg flex items-center justify-center"><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div>';
                      }
                    }}
                  />
                </div>
              </motion.div>

              <nav className="hidden md:flex items-center gap-8">
                {[
                  { name: "Home", onClick: handleBackToHome },
                  { name: "Courses", onClick: navigateToCourses },
                  { name: "About Us", onClick: () => scrollToSection("about") },
                  {
                    name: "Contact",
                    onClick: () => scrollToSection("contact"),
                  },
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={item.onClick}
                    className="text-slate-700 hover:text-slate-900 transition-colors relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-700 to-teal-600 transition-all group-hover:w-full" />
                  </motion.button>
                ))}
              </nav>

              <div className="hidden md:flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="text-slate-700 hover:text-slate-900"
                >
                  Login
                </Button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-white shadow-lg shadow-slate-500/30">
                    Sign Up
                  </Button>
                </motion.div>
              </div>

              <motion.button
                className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  className="md:hidden py-4 border-t"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <nav className="flex flex-col gap-4">
                    {[
                      { name: "Home", onClick: handleBackToHome },
                      { name: "Courses", onClick: navigateToCourses },
                      {
                        name: "About Us",
                        onClick: () => scrollToSection("about"),
                      },
                      {
                        name: "Contact",
                        onClick: () => scrollToSection("contact"),
                      },
                    ].map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={item.onClick}
                        className="text-slate-700 hover:text-slate-900 transition-colors px-2 py-1 text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                    <div className="flex flex-col gap-2 pt-4 border-t">
                      <Button
                        variant="ghost"
                        className="text-slate-700 hover:text-slate-900 w-full"
                      >
                        Login
                      </Button>
                      <Button className="bg-gradient-to-r from-slate-700 to-slate-900 text-white w-full">
                        Sign Up
                      </Button>
                    </div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      </>
    );
  }

  function Footer() {
    return (
      <footer
        className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#EEF1F7" }}
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #247AB0 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="flex items-center gap-2 mb-4 cursor-pointer"
                onClick={handleBackToHome}
              >
                <div className="w-auto h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center overflow-hidden px-3">
                  <img
                    src={certeasy}
                    alt="Cert-Easy Logo"
                    className="h-10 w-auto object-contain max-w-[120px]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const svg = document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "svg"
                        );
                        svg.setAttribute("class", "w-8 h-8 text-white");
                        svg.setAttribute("fill", "none");
                        svg.setAttribute("stroke", "currentColor");
                        svg.setAttribute("viewBox", "0 0 24 24");
                        svg.innerHTML =
                          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>';
                        parent.appendChild(svg);
                      }
                    }}
                  />
                </div>
              </div>
              <p className="mb-4" style={{ color: "#4A5568" }}>
                Your trusted partner for professional certification training and
                career advancement.
              </p>
              <motion.button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 transition-colors"
                style={{ color: "#247AB0" }}
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </motion.button>
            </motion.div>

            {[
              {
                title: "Quick Links",
                links: [
                  { name: "Home", onClick: handleBackToHome },
                  { name: "Courses", onClick: navigateToCourses },
                  { name: "About Us", onClick: () => scrollToSection("about") },
                  {
                    name: "Contact",
                    onClick: () => scrollToSection("contact"),
                  },
                ],
              },
              {
                title: "Certifications",
                links: [
                  { name: "CompTIA", onClick: () => {} },
                  { name: "AWS", onClick: () => {} },
                  { name: "PMI", onClick: () => {} },
                  { name: "Microsoft", onClick: () => {} },
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1 }}
              >
                <h4
                  className="mb-4 text-lg"
                  style={{ fontWeight: 600, color: "#2D3748" }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={link.onClick}
                        className="transition-colors hover:translate-x-1 inline-block"
                        style={{ color: "#4A5568" }}
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4
                className="mb-4 text-lg"
                style={{ fontWeight: 600, color: "#2D3748" }}
              >
                Follow Us
              </h4>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                ].map(({ icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href="#"
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all shadow-lg"
                    style={{ backgroundColor: "#247AB0" }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: "#1a5a85",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#ffffff" }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="pt-8 text-center"
            style={{ borderTop: "1px solid #CBD5E0", color: "#4A5568" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              &copy; 2025 Cert-Easy. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </motion.div>
        </div>
      </footer>
    );
  }

  const courses = [
    {
      id: 1,
      title: "CompTIA Security+ Certification",
      image: security,
      price: 299,
      rating: 4.8,
      students: 12450,
      badge: "Best Seller",
      level: "Intermediate",
      duration: "40 hours",
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      image: cloud,
      price: 399,
      rating: 4.9,
      students: 18230,
      badge: "Popular",
      level: "Advanced",
      duration: "60 hours",
    },
    {
      id: 3,
      title: "Project Management Professional (PMP)",
      image: pmp,
      price: 349,
      rating: 4.7,
      students: 9870,
      badge: "Trending",
      level: "Professional",
      duration: "50 hours",
    },
    {
      id: 4,
      title: "Certified Ethical Hacker (CEH)",
      image: security,
      price: 449,
      rating: 4.9,
      students: 15600,
      badge: "Best Seller",
      level: "Advanced",
      duration: "45 hours",
    },
    {
      id: 5,
      title: "Microsoft Azure Fundamentals",
      image: cloud2,
      price: 249,
      rating: 4.6,
      students: 11200,
      badge: "New",
      level: "Beginner",
      duration: "30 hours",
    },
    {
      id: 6,
      title: "CISSP - Information Security",
      image: security,
      price: 499,
      rating: 4.8,
      students: 8950,
      badge: "Premium",
      level: "Expert",
      duration: "70 hours",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Security Specialist",
      company: "TechCorp Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      text: "Cert-Easy helped me pass my CompTIA Security+ on the first try! The course materials were comprehensive and the instructors were incredibly knowledgeable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Cloud Architect",
      company: "CloudSolutions Ltd",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      text: "The AWS certification course exceeded my expectations. The hands-on labs and real-world scenarios were invaluable for my career advancement.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      company: "Global Enterprises",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      text: "I achieved my PMP certification thanks to Cert-Easy's structured approach and excellent support. Highly recommended for serious professionals!",
      rating: 5,
    },
  ];

  const partners = [
    { name: "CompTIA", logo: "CompTIA" },
    { name: "PMI", logo: "PMI" },
    { name: "AWS", logo: "AWS" },
    { name: "Microsoft", logo: "Microsoft" },
    { name: "EC-Council", logo: "EC-Council" },
    { name: "ISC2", logo: "(ISC)²" },
    { name: "Cisco", logo: "Cisco" },
    { name: "Google", logo: "Google" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry-Recognized Certifications",
      description:
        "Gain credentials from top organizations like CompTIA, AWS, PMI, and more.",
      color: "from-slate-600 to-slate-800",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from certified professionals with years of real-world experience.",
      color: "from-teal-600 to-cyan-700",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Course Materials",
      description:
        "Access detailed study guides, practice exams, and hands-on labs.",
      color: "from-indigo-600 to-blue-700",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Study at your own pace with 24/7 access to all course materials.",
      color: "from-emerald-600 to-green-700",
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description:
        "Pass your certification exam or get your money back - we're that confident!",
      color: "from-violet-600 to-purple-700",
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description:
        "Boost your career with certifications that employers actively seek.",
      color: "from-amber-600 to-orange-700",
    },
  ];

  const learningOptions = [
    {
      title: "Self-Paced Learning",
      description:
        "Access all course materials instantly and learn on your own schedule",
      icon: Clock,
      features: [
        "Lifetime access",
        "Download resources",
        "Mobile learning",
        "Study anywhere",
      ],
      gradient: "from-slate-700 to-slate-900",
    },
    {
      title: "Live Online Classes",
      description:
        "Join interactive sessions with expert instructors and fellow students",
      icon: Users,
      features: [
        "Real-time interaction",
        "Q&A sessions",
        "Group discussions",
        "Scheduled classes",
      ],
      gradient: "from-teal-600 to-cyan-700",
    },
    {
      title: "Bootcamp Programs",
      description:
        "Intensive training designed to prepare you for certification in weeks",
      icon: TrendingUp,
      features: [
        "Fast-track learning",
        "Daily sessions",
        "Exam preparation",
        "Guaranteed results",
      ],
      gradient: "from-indigo-600 to-blue-700",
    },
  ];

  const certificates = [
    { name: "CompTIA Security+", provider: "CompTIA" },
    { name: "AWS Solutions Architect", provider: "Amazon" },
    { name: "PMP", provider: "PMI" },
    { name: "CISSP", provider: "(ISC)²" },
    { name: "CEH", provider: "EC-Council" },
    { name: "Azure Fundamentals", provider: "Microsoft" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 -left-20 w-72 h-72 bg-slate-400/10 rounded-full blur-3xl"
              animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 -right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
              animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge
                    className="bg-gradient-to-r from-slate-700 to-slate-900 text-white mb-4 shadow-lg"
                    style={{ fontWeight: 600 }}
                  >
                    <Sparkles className="w-4 h-4 mr-1" />
                    #1 Certification Training Platform
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-slate-900"
                  style={{ fontWeight: 700, lineHeight: 1.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Advance Your Career with{" "}
                  <span className="bg-gradient-to-r from-slate-700 via-teal-600 to-indigo-700 bg-clip-text text-transparent">
                    Industry Certifications
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-slate-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Master the skills you need to succeed with expert-led courses,
                  comprehensive study materials, and guaranteed exam
                  preparation.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={navigateToCourses}
                      className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-white px-8 py-6 text-lg shadow-xl shadow-slate-500/30 w-full sm:w-auto group"
                    >
                      Explore Courses
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="border-2 border-slate-700 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg w-full sm:w-auto group"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Contact Us
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-6 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { icon: CheckCircle2, text: "Money-back guarantee" },
                    { icon: CheckCircle2, text: "Lifetime access" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-500/20 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={mainpic}
                    alt="Online learning"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: "#247AB0",
                      opacity: 0.84,
                      transition:
                        "background 0.3s, border-radius 0.3s, opacity 0.3s",
                    }}
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 hidden lg:block border border-slate-200/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div
                        className="text-3xl bg-gradient-to-r from-slate-700 to-teal-600 bg-clip-text text-transparent"
                        style={{ fontWeight: 700 }}
                      >
                        50,000+
                      </div>
                      <div className="text-sm text-slate-600">
                        Certified Students
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-6 -right-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl px-6 py-3 hidden lg:block border border-slate-200/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span
                      className="text-sm text-slate-700"
                      style={{ fontWeight: 600 }}
                    >
                      4.9/5
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <motion.p
              className="text-center text-slate-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Trusted by leading certification providers worldwide
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div
                    className="text-slate-400 hover:text-slate-700 transition-colors text-center cursor-pointer"
                    style={{ fontWeight: 700 }}
                  >
                    {partner.logo}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="courses"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-slate-100 text-slate-700 mb-4">
                Featured Courses
              </Badge>
              <h2
                className="text-4xl lg:text-5xl mb-4 text-slate-900"
                style={{ fontWeight: 700 }}
              >
                Popular Certification Courses
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Choose from our comprehensive selection of industry-recognized
                certification programs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-full bg-white">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge
                        className="absolute top-4 right-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg"
                        style={{ fontWeight: 600 }}
                      >
                        {course.badge}
                      </Badge>
                      <motion.div
                        className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </motion.div>
                    </div>

                    <CardHeader className="space-y-3">
                      <Badge
                        variant="outline"
                        className="w-fit text-slate-700 border-slate-300"
                      >
                        {course.level}
                      </Badge>
                      <h3
                        className="text-slate-900 text-xl"
                        style={{ fontWeight: 600 }}
                      >
                        {course.title}
                      </h3>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span style={{ fontWeight: 600 }}>
                            {course.rating}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full"
                      >
                        <Button
                          className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-white shadow-lg w-full"
                          onClick={() => handleCourseClick(course.id)}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={navigateToCourses}
                  variant="outline"
                  className="border-2 border-slate-700 text-slate-700 hover:bg-slate-50 px-8 py-6 group"
                >
                  View All Courses
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-teal-100 text-teal-700 mb-4">
                Learning Options
              </Badge>
              <h2
                className="text-4xl lg:text-5xl mb-4 text-slate-900"
                style={{ fontWeight: 700 }}
              >
                Flexible Learning Options
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Choose the learning format that works best for you
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {learningOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="border-2 border-slate-200 hover:border-slate-300 rounded-3xl transition-all duration-300 group h-full relative overflow-hidden shadow-lg hover:shadow-2xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />
                      <CardHeader>
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3
                          className="text-slate-900 text-xl"
                          style={{ fontWeight: 600 }}
                        >
                          {option.title}
                        </h3>
                        <p className="text-slate-600">{option.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {option.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center gap-2 text-slate-700"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  value: stats.students,
                  suffix: "+",
                  label: "Students Certified",
                  icon: Users,
                },
                {
                  value: stats.courses,
                  suffix: "+",
                  label: "Courses Available",
                  icon: BookOpen,
                },
                {
                  value: stats.instructors,
                  suffix: "+",
                  label: "Expert Instructors",
                  icon: Award,
                },
                {
                  value: stats.satisfaction,
                  suffix: "%",
                  label: "Satisfaction Rate",
                  icon: Heart,
                },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <div
                      className="text-5xl lg:text-6xl mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </div>
                    <div className="text-slate-300 text-lg">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-emerald-100 text-emerald-700 mb-4">
                Testimonials
              </Badge>
              <h2
                className="text-4xl lg:text-5xl mb-4 text-slate-900"
                style={{ fontWeight: 700 }}
              >
                What Our Students Say
              </h2>
              <p className="text-xl text-slate-600">
                Real success stories from certified professionals
              </p>
            </motion.div>

            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      className="px-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="border-0 rounded-3xl shadow-2xl bg-white">
                        <CardContent className="p-8 lg:p-12">
                          <motion.div
                            className="flex gap-1 mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                              </motion.div>
                            ))}
                          </motion.div>
                          <p className="text-xl text-slate-700 mb-8 italic leading-relaxed">
                            "{testimonial.text}"
                          </p>
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="relative"
                            >
                              <ImageWithFallback
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover ring-4 ring-slate-100"
                              />
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white" />
                            </motion.div>
                            <div>
                              <div
                                className="text-slate-900 text-lg"
                                style={{ fontWeight: 600 }}
                              >
                                {testimonial.name}
                              </div>
                              <div className="text-slate-600">
                                {testimonial.role}
                              </div>
                              <div className="text-sm text-slate-500">
                                {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </section>

        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-amber-100 text-amber-700 mb-4">
                Why Choose Us
              </Badge>
              <h2
                className="text-4xl lg:text-5xl mb-4 text-slate-900"
                style={{ fontWeight: 700 }}
              >
                Why Choose Cert-Easy?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The complete certification training solution for professionals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3
                        className="text-slate-900 mb-2 text-lg"
                        style={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-teal-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-indigo-100 text-indigo-700 mb-4">
                Certifications
              </Badge>
              <h2
                className="text-4xl lg:text-5xl mb-4 text-slate-900"
                style={{ fontWeight: 700 }}
              >
                Industry-Recognized Certifications
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Earn credentials that open doors to new opportunities
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, rotate: 5 }}
                >
                  <Card className="border-2 border-slate-200 hover:border-slate-300 rounded-2xl cursor-pointer transition-all duration-300 group shadow-lg hover:shadow-2xl">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-slate-700 via-teal-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award className="w-8 h-8 text-white" />
                      </motion.div>
                      <div
                        className="text-sm text-slate-900 mb-1"
                        style={{ fontWeight: 600 }}
                      >
                        {cert.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {cert.provider}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-violet-100 text-violet-700 mb-4">
                Contact
              </Badge>
              <h2
                className="text-4xl lg:text-5xl mb-4 text-slate-900"
                style={{ fontWeight: 700 }}
              >
                Get In Touch
              </h2>
              <p className="text-xl text-slate-600">
                Have questions? We're here to help!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  info: ["info@Cert-Easy.com", "support@Cert-Easy.com"],
                  color: "from-slate-600 to-slate-800",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  info: ["+1 848-297-1003", "Mon-Fri 9am-6pm EST"],
                  color: "from-teal-600 to-cyan-700",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  info: ["Click to chat with us", "Quick support available"],
                  color: "from-emerald-600 to-green-700",
                  onClick: handleWhatsAppClick,
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={contact.onClick}
                    className={contact.onClick ? "cursor-pointer" : ""}
                  >
                    <Card className="border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                      <CardContent className="p-8 text-center">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3
                          className="text-slate-900 mb-2 text-xl"
                          style={{ fontWeight: 600 }}
                        >
                          {contact.title}
                        </h3>
                        {contact.info.map((line, i) => (
                          <p key={i} className="text-slate-600">
                            {line}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
