import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import securityImage from "../assets/security.png";
import cloud from "../assets/cloud.png"
import cyber from "../assets/cyber.png"
import network from "../assets/network+.png"
import pmp from "../assets/PMP.png";
import advancedCyber from "../assets/advanced cyber.png"
import security from "../assets/Add-a-subheading-1.png"
import cloud2 from "../assets/cloud-essentials2.png"
import project from "../assets/project.png"
import {
  Star,
  Users,
  Clock,
  Award,
  Filter,
  X,
  ArrowRight,
  Search,
  TrendingUp,
  DollarSign,
  Eye,
  Calendar,
  ArrowUpDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface Course {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  students: number;
  badge: string;
  level: string;
  duration: string;
  category: string;
  status: string;
  description: string;
  instructor: string;
  lessons: number;
  views: number;
  dateAdded: Date;
}

interface CoursesProps {
  onCourseClick: (courseId: number) => void;
  onWhatsAppClick: () => void;
}

type SortOption =
  | "newest"
  | "trending"
  | "price-high"
  | "price-low"
  | "most-viewed"
  | "highest-rated";

export default function Courses({
  onCourseClick,
  onWhatsAppClick,
}: CoursesProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [minRating, setMinRating] = useState([0]);
  const [sortBy, setSortBy] = useState<SortOption>("trending");

  const courses: Course[] = [
    {
      id: 1,
      title: "CompTIA Security+ Certification",
      image:securityImage,
      price: 299,
      rating: 4.8,
      students: 12450,
      badge: "Best Seller",
      level: "Intermediate",
      duration: "40 hours",
      category: "Cybersecurity",
      status: "Featured",
      description:
        "Master cybersecurity fundamentals and prepare for the CompTIA Security+ certification exam.",
      instructor: "John Smith",
      lessons: 120,
      views: 45200,
      dateAdded: new Date("2024-10-15"),
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      image:cloud,
      price: 399,
      rating: 4.9,
      students: 18230,
      badge: "Popular",
      level: "Advanced",
      duration: "60 hours",
      category: "Cloud Computing",
      status: "Trending",
      description:
        "Design and deploy scalable systems on AWS and become a certified solutions architect.",
      instructor: "Sarah Johnson",
      lessons: 150,
      views: 58900,
      dateAdded: new Date("2024-09-20"),
    },
    {
      id: 3,
      title: "Project Management Professional (PMP)",
      image:pmp,
      price: 349,
      rating: 4.7,
      students: 9870,
      badge: "Trending",
      level: "Professional",
      duration: "50 hours",
      category: "Project Management",
      status: "New",
      description:
        "Learn project management best practices and prepare for the PMP certification.",
      instructor: "Michael Chen",
      lessons: 100,
      views: 32100,
      dateAdded: new Date("2024-11-01"),
    },
    {
      id: 4,
      title: "Certified Ethical Hacker (CEH)",
      image:cyber,
      price: 449,
      rating: 4.9,
      students: 15600,
      badge: "Best Seller",
      level: "Advanced",
      duration: "45 hours",
      category: "Cybersecurity",
      status: "Featured",
      description:
        "Master ethical hacking techniques and prepare for the CEH certification exam.",
      instructor: "David Williams",
      lessons: 130,
      views: 51300,
      dateAdded: new Date("2024-08-10"),
    },
    {
      id: 5,
      title: "Microsoft Azure Fundamentals",
      image:cloud2,
      price: 249,
      rating: 4.6,
      students: 11200,
      badge: "New",
      level: "Beginner",
      duration: "30 hours",
      category: "Cloud Computing",
      status: "New",
      description:
        "Get started with Microsoft Azure cloud services and earn your fundamentals certification.",
      instructor: "Emily Rodriguez",
      lessons: 80,
      views: 28400,
      dateAdded: new Date("2024-10-28"),
    },
    {
      id: 6,
      title: "CISSP - Information Security",
      image:cyber,
      price: 499,
      rating: 4.8,
      students: 8950,
      badge: "Premium",
      level: "Expert",
      duration: "70 hours",
      category: "Cybersecurity",
      status: "Featured",
      description:
        "Master information security and prepare for the prestigious CISSP certification.",
      instructor: "Robert Anderson",
      lessons: 160,
      views: 36700,
      dateAdded: new Date("2024-07-15"),
    },
    {
      id: 7,
      title: "Google Cloud Professional",
      image:cloud2,
      price: 379,
      rating: 4.7,
      students: 10500,
      badge: "Popular",
      level: "Advanced",
      duration: "55 hours",
      category: "Cloud Computing",
      status: "Trending",
      description:
        "Become a Google Cloud expert and earn your professional cloud architect certification.",
      instructor: "Lisa Thompson",
      lessons: 140,
      views: 42800,
      dateAdded: new Date("2024-09-05"),
    },
    {
      id: 8,
      title: "Agile Scrum Master Certification",
      image:project,
      price: 299,
      rating: 4.5,
      students: 9200,
      badge: "New",
      level: "Intermediate",
      duration: "35 hours",
      category: "Project Management",
      status: "New",
      description:
        "Master Agile methodologies and become a certified Scrum Master.",
      instructor: "James Wilson",
      lessons: 90,
      views: 25600,
      dateAdded: new Date("2024-10-20"),
    },
    {
      id: 9,
      title: "Network+ Certification",
      image:network,
      price: 279,
      rating: 4.6,
      students: 11800,
      badge: "Best Seller",
      level: "Beginner",
      duration: "38 hours",
      category: "Networking",
      status: "Featured",
      description:
        "Learn networking fundamentals and prepare for CompTIA Network+ certification.",
      instructor: "Patricia Martinez",
      lessons: 95,
      views: 39200,
      dateAdded: new Date("2024-08-25"),
    },
  ];

  const categories = Array.from(new Set(courses.map((c) => c.category)));
  const levels = Array.from(new Set(courses.map((c) => c.level)));
  const statuses = Array.from(new Set(courses.map((c) => c.status)));

  const toggleFilter = (
    value: string,
    list: string[],
    setter: (list: string[]) => void
  ) => {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
    } else {
      setter([...list, value]);
    }
  };

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(course.category);
      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.level);
      const matchesStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(course.status);
      const matchesRating = course.rating >= minRating[0];

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesStatus &&
        matchesRating
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.dateAdded.getTime() - a.dateAdded.getTime();
        case "trending":
          return b.students - a.students;
        case "price-high":
          return b.price - a.price;
        case "price-low":
          return a.price - b.price;
        case "most-viewed":
          return b.views - a.views;
        case "highest-rated":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedLevels([]);
    setSelectedStatuses([]);
    setMinRating([0]);
    setSearchQuery("");
    setSortBy("trending");
  };

  const sortOptions = [
    {
      value: "trending" as SortOption,
      label: "Most Trending",
      icon: TrendingUp,
    },
    { value: "newest" as SortOption, label: "Newest First", icon: Calendar },
    { value: "most-viewed" as SortOption, label: "Most Viewed", icon: Eye },
    {
      value: "highest-rated" as SortOption,
      label: "Highest Rated",
      icon: Star,
    },
    {
      value: "price-low" as SortOption,
      label: "Price: Low to High",
      icon: DollarSign,
    },
    {
      value: "price-high" as SortOption,
      label: "Price: High to Low",
      icon: DollarSign,
    },
  ];

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <Label className="text-gray-900 mb-3 block">Search Courses</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <div>
        <Label className="text-gray-900 mb-3 block">Categories</Label>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() =>
                  toggleFilter(
                    category,
                    selectedCategories,
                    setSelectedCategories
                  )
                }
              />
              <label
                htmlFor={`category-${category}`}
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                {category}
              </label>
              <span className="text-xs text-gray-500">
                ({courses.filter((c) => c.category === category).length})
              </span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Level */}
      <div>
        <Label className="text-gray-900 mb-3 block">Level</Label>
        <div className="space-y-3">
          {levels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={`level-${level}`}
                checked={selectedLevels.includes(level)}
                onCheckedChange={() =>
                  toggleFilter(level, selectedLevels, setSelectedLevels)
                }
              />
              <label
                htmlFor={`level-${level}`}
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                {level}
              </label>
              <span className="text-xs text-gray-500">
                ({courses.filter((c) => c.level === level).length})
              </span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Status */}
      <div>
        <Label className="text-gray-900 mb-3 block">Status</Label>
        <div className="space-y-3">
          {statuses.map((status) => (
            <div key={status} className="flex items-center space-x-2">
              <Checkbox
                id={`status-${status}`}
                checked={selectedStatuses.includes(status)}
                onCheckedChange={() =>
                  toggleFilter(status, selectedStatuses, setSelectedStatuses)
                }
              />
              <label
                htmlFor={`status-${status}`}
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                {status}
              </label>
              <span className="text-xs text-gray-500">
                ({courses.filter((c) => c.status === status).length})
              </span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Rating */}
      <div>
        <Label className="text-gray-900 mb-3 block">Minimum Rating</Label>
        <div className="space-y-4">
          <Slider
            value={minRating}
            onValueChange={setMinRating}
            max={5}
            step={0.5}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              {minRating[0]} {minRating[0] === 1 ? "star" : "stars"} & up
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-gray-900">{minRating[0]}</span>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Clear Filters */}
      <Button variant="outline" onClick={clearFilters} className="w-full">
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#247AB0] to-[#1d5f8a] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-1" />
              All Courses
            </Badge>
            <h1 className="text-4xl lg:text-5xl mb-4">
              Explore Our Certification Courses
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Choose from {courses.length} industry-recognized certification
              programs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <Card className="sticky top-24 border-0 shadow-lg rounded-2xl">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-900">Filters</h3>
                  <Filter className="w-5 h-5 text-gray-600" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[calc(100vh-250px)]">
                  <FilterSection />
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <Button
              onClick={() => setShowMobileFilters(true)}
              style={{ backgroundColor: "#247AB0" }}
              className="shadow-2xl hover:opacity-90"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              {selectedCategories.length +
                selectedLevels.length +
                selectedStatuses.length >
                0 && (
                <Badge className="ml-2 bg-white text-[#247AB0]">
                  {selectedCategories.length +
                    selectedLevels.length +
                    selectedStatuses.length}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Filters Modal */}
          <AnimatePresence>
            {showMobileFilters && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                  onClick={() => setShowMobileFilters(false)}
                />
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 25 }}
                  className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl"
                >
                  <div className="p-6 border-b flex items-center justify-between">
                    <h3 className="text-gray-900">Filters</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowMobileFilters(false)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <ScrollArea className="h-[calc(100vh-80px)] p-6">
                    <FilterSection />
                  </ScrollArea>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Courses Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="text-gray-900">{filteredCourses.length}</span>{" "}
                of <span className="text-gray-900">{courses.length}</span>{" "}
                courses
              </p>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-600" />
                <Select
                  value={sortBy}
                  onValueChange={(value: string) =>
                    setSortBy(value as SortOption)
                  }
                >
                  {" "}
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            <span>{option.label}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className="overflow-hidden border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-full bg-white cursor-pointer"
                      onClick={() => onCourseClick(course.id)}
                    >
                      <div className="relative overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <ImageWithFallback
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge
                          style={{ backgroundColor: "#247AB0" }}
                          className="absolute top-4 right-4 text-white shadow-lg"
                        >
                          {course.badge}
                        </Badge>
                      </div>

                      <CardHeader className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="text-gray-700 border-gray-300"
                          >
                            {course.level}
                          </Badge>
                          <Badge
                            variant="outline"
                            style={{ color: "#247AB0", borderColor: "#247AB0" }}
                            className="bg-blue-50"
                          >
                            {course.category}
                          </Badge>
                        </div>
                        <h3 className="text-gray-900 text-xl line-clamp-2">
                          {course.title}
                        </h3>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(course.rating)
                                    ? "fill-amber-400 text-amber-400"
                                    : i < course.rating
                                    ? "fill-amber-200 text-amber-200"
                                    : "fill-gray-200 text-gray-200"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-900">{course.rating}</span>
                          <span className="text-gray-500 text-sm">
                            ({course.students.toLocaleString()})
                          </span>
                        </div>

                        {/* Meta info */}
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{course.students.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <Button
                          style={{ backgroundColor: "#247AB0" }}
                          className="hover:opacity-90 text-white shadow-lg w-full group"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            onCourseClick(course.id);
                          }}
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search query
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
