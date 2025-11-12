import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { 
  Star, Users, Clock, Award, CheckCircle2, PlayCircle, 
  BookOpen, Target, TrendingUp, ArrowLeft, MessageCircle,
  FileText, Video, Download, Shield
} from 'lucide-react';
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';
import { Progress } from '../components/ui/progress';
import securityImage from "../assets/security.png";
import cloud from "../assets/cloud.png"
import cyber from "../assets/cyber.png"
import network from "../assets/network+.png"
import pmp from "../assets/PMP.png";
import advancedCyber from "../assets/advanced cyber.png"
import security from "../assets/Add-a-subheading-1.png"
import cloud2 from "../assets/cloud-essentials2.png"
import project from "../assets/project.png"

interface CourseDetailProps {
  courseId: number;
  onBack: () => void;
  onWhatsAppClick: () => void;
}

export default function CourseDetail({ courseId, onBack, onWhatsAppClick }: CourseDetailProps) {
  // Course data - In a real app, this would be fetched based on courseId
  const courses = {
    1: {
      id: 1,
      title: 'CompTIA Security+ Certification',
      image: security,
      rating: 4.8,
      students: 12450,
      badge: 'Best Seller',
      level: 'Intermediate',
      duration: '40 hours',
      category: 'Cybersecurity',
      description: 'Master cybersecurity fundamentals and prepare for the CompTIA Security+ certification exam with comprehensive training.',
      instructor: {
        name: 'John Smith',
        title: 'Senior Cybersecurity Consultant',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        bio: '15+ years of experience in cybersecurity with multiple industry certifications.'
      },
      lessons: 120,
      enrolled: 12450,
      lastUpdated: 'November 2024',
      language: 'English',
      certificate: true,
      overview: 'This comprehensive course prepares you for the CompTIA Security+ certification exam. You\'ll learn essential security concepts, risk management, cryptography, identity management, and network security. Perfect for IT professionals looking to advance their careers in cybersecurity.',
      learningOutcomes: [
        'Understand core security concepts and terminologies',
        'Implement security controls and risk management strategies',
        'Master cryptography and PKI fundamentals',
        'Configure secure network architecture',
        'Identify and respond to security incidents',
        'Pass the CompTIA Security+ certification exam'
      ],
      requirements: [
        'Basic understanding of networking concepts',
        'Familiarity with operating systems (Windows/Linux)',
        'Basic IT troubleshooting skills',
        'Recommended: CompTIA Network+ or equivalent knowledge'
      ],
      curriculum: [
        {
          section: 'Introduction to Security',
          lessons: 15,
          duration: '3 hours',
          topics: [
            'Security Fundamentals',
            'Threat Actors and Threat Intelligence',
            'Security Controls',
            'Risk Management Concepts',
            'Security Assessment Tools'
          ]
        },
        {
          section: 'Cryptography and PKI',
          lessons: 20,
          duration: '5 hours',
          topics: [
            'Cryptographic Concepts',
            'Symmetric vs Asymmetric Encryption',
            'Hashing Algorithms',
            'Public Key Infrastructure',
            'Certificate Management'
          ]
        },
        {
          section: 'Identity and Access Management',
          lessons: 18,
          duration: '4 hours',
          topics: [
            'Authentication Methods',
            'Authorization Models',
            'Account Management',
            'Federation and Single Sign-On',
            'Access Control Lists'
          ]
        },
        {
          section: 'Network Security',
          lessons: 25,
          duration: '6 hours',
          topics: [
            'Network Protocols and Services',
            'Secure Network Design',
            'Firewalls and VPNs',
            'Wireless Security',
            'Network Monitoring and Analysis'
          ]
        },
        {
          section: 'Security Operations',
          lessons: 22,
          duration: '5 hours',
          topics: [
            'Incident Response',
            'Digital Forensics',
            'Security Monitoring',
            'Vulnerability Management',
            'Disaster Recovery and Business Continuity'
          ]
        },
        {
          section: 'Exam Preparation',
          lessons: 20,
          duration: '4 hours',
          topics: [
            'Practice Questions',
            'Exam Strategy',
            'Full-Length Mock Exams',
            'Review and Reinforcement',
            'Final Exam Tips'
          ]
        }
      ],
      features: [
        { icon: Video, text: '120+ HD video lectures' },
        { icon: FileText, text: 'Comprehensive study materials' },
        { icon: Download, text: 'Downloadable resources' },
        { icon: Award, text: 'Certificate of completion' },
        { icon: Clock, text: 'Lifetime access' },
        { icon: Users, text: 'Student community access' },
        { icon: MessageCircle, text: 'Direct instructor support' },
        { icon: Shield, text: 'Money-back guarantee' }
      ],
      reviews: [
        {
          name: 'Sarah Johnson',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
          rating: 5,
          date: 'October 2024',
          comment: 'Excellent course! Passed my Security+ exam on the first try thanks to this comprehensive training. The instructor explains complex concepts in an easy-to-understand way.'
        },
        {
          name: 'Michael Chen',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
          rating: 5,
          date: 'September 2024',
          comment: 'Best investment in my career. The hands-on labs and practice exams were incredibly valuable. Highly recommend to anyone preparing for the Security+ certification.'
        },
        {
          name: 'Emily Rodriguez',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
          rating: 4,
          date: 'August 2024',
          comment: 'Great content and well-structured course. The only minor issue was some videos could be a bit more concise, but overall fantastic preparation material.'
        }
      ]
    }
    // Add more course details as needed
  };

  const course = courses[courseId as keyof typeof courses] || courses[1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>

          <div className="grid lg:grid-cols-3 gap-8 py-8">
            {/* Course Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-amber-500 text-white">
                    {course.badge}
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                    {course.category}
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-slate-200 mb-6">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(course.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-slate-600 text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg">{course.rating}</span>
                    <span className="text-slate-400">
                      ({course.students.toLocaleString()} students)
                    </span>
                  </div>
                  <Separator orientation="vertical" className="h-6 bg-slate-600" />
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <Separator orientation="vertical" className="h-6 bg-slate-600" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                  <Separator orientation="vertical" className="h-6 bg-slate-600" />
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-4 mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <Avatar className="w-16 h-16 ring-2 ring-white/20">
                    <AvatarImage src={course.instructor.avatar} />
                    <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-slate-300">Instructor</p>
                    <p className="text-lg">{course.instructor.name}</p>
                    <p className="text-sm text-slate-300">{course.instructor.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Course Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden sticky top-24">
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <PlayCircle className="w-10 h-10 text-slate-900" />
                    </motion.button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Last updated</p>
                    <p className="text-slate-900">{course.lastUpdated}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Language</p>
                    <p className="text-slate-900">{course.language}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Certificate</p>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-teal-600" />
                      <p className="text-slate-900">
                        {course.certificate ? 'Yes' : 'No'}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <Button
                    className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-white py-6"
                    onClick={onWhatsAppClick}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enroll Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={onWhatsAppClick}
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-2xl text-slate-900 mb-4">About This Course</h3>
                      <p className="text-slate-700 leading-relaxed">
                        {course.overview}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-2xl text-slate-900 mb-4">What You'll Learn</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {course.learningOutcomes.map((outcome, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{outcome}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-2xl text-slate-900 mb-4">Requirements</h3>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-3 text-slate-700">
                            <span className="text-slate-400 mt-1.5">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6">
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-2xl text-slate-900 mb-6">Course Curriculum</h3>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {course.curriculum.map((section, index) => (
                        <AccordionItem
                          key={index}
                          value={`section-${index}`}
                          className="border border-slate-200 rounded-xl px-6"
                        >
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center justify-between w-full pr-4">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white">
                                  {index + 1}
                                </div>
                                <div className="text-left">
                                  <h4 className="text-slate-900">{section.section}</h4>
                                  <p className="text-sm text-slate-600">
                                    {section.lessons} lessons • {section.duration}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4">
                            <div className="space-y-2 pl-14">
                              {section.topics.map((topic, topicIndex) => (
                                <div
                                  key={topicIndex}
                                  className="flex items-center gap-3 py-2 text-slate-700 hover:text-slate-900 transition-colors"
                                >
                                  <PlayCircle className="w-4 h-4 text-slate-400" />
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6 mb-6">
                      <Avatar className="w-24 h-24 ring-4 ring-slate-100">
                        <AvatarImage src={course.instructor.avatar} />
                        <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-2xl text-slate-900 mb-1">
                          {course.instructor.name}
                        </h3>
                        <p className="text-slate-600 mb-4">{course.instructor.title}</p>
                        <p className="text-slate-700 leading-relaxed">
                          {course.instructor.bio}
                        </p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-3xl text-slate-900 mb-1">
                          {course.rating}
                        </p>
                        <p className="text-sm text-slate-600">Instructor Rating</p>
                      </div>
                      <div>
                        <p className="text-3xl text-slate-900 mb-1">
                          {course.students.toLocaleString()}
                        </p>
                        <p className="text-sm text-slate-600">Students</p>
                      </div>
                      <div>
                        <p className="text-3xl text-slate-900 mb-1">
                          {course.lessons}
                        </p>
                        <p className="text-sm text-slate-600">Lessons</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-slate-50 rounded-2xl">
                        <div className="text-5xl text-slate-900 mb-2">
                          {course.rating}
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(course.rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'fill-slate-300 text-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-slate-600">Course Rating</p>
                      </div>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center gap-3">
                            <span className="text-sm text-slate-600 w-8">
                              {stars} ★
                            </span>
                            <Progress
                              value={stars === 5 ? 85 : stars === 4 ? 10 : 5}
                              className="flex-1"
                            />
                            <span className="text-sm text-slate-600 w-12">
                              {stars === 5 ? '85%' : stars === 4 ? '10%' : '5%'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-6">
                      <h3 className="text-xl text-slate-900">Student Reviews</h3>
                      {course.reviews.map((review, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-start gap-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={review.avatar} />
                              <AvatarFallback>{review.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-slate-900">{review.name}</h4>
                                <span className="text-sm text-slate-500">{review.date}</span>
                              </div>
                              <div className="flex items-center gap-1 mb-2">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 fill-amber-400 text-amber-400"
                                  />
                                ))}
                              </div>
                              <p className="text-slate-700 leading-relaxed">
                                {review.comment}
                              </p>
                            </div>
                          </div>
                          {index < course.reviews.length - 1 && <Separator />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar Features */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg rounded-2xl sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl text-slate-900 mb-6">This course includes</h3>
                <div className="space-y-4">
                  {course.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-slate-700" />
                        </div>
                        <span className="text-slate-700">{feature.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
                <Separator className="my-6" />
                <Button
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
                  onClick={onWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
