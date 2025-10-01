import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ApplicationsSection = () => {
  const applications = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      appliedDate: "2 days ago",
      status: "interview" as const,
      source: "linkedin" as const,
      deadline: "May 15, 2025",
      progress: 75,
    },
    {
      title: "React Developer",
      company: "StartupXYZ",
      location: "Remote",
      appliedDate: "1 week ago",
      status: "applied" as const,
      source: "linkedin" as const,
      progress: 25,
    },
    {
      title: "Full Stack Engineer",
      company: "Innovation Labs",
      location: "New York, NY",
      appliedDate: "2 weeks ago",
      status: "offer" as const,
      source: "external" as const,
      progress: 100,
    },
    {
      title: "UI/UX Developer",
      company: "Design Studio",
      location: "Austin, TX",
      appliedDate: "3 weeks ago",
      status: "rejected" as const,
      source: "linkedin" as const,
      progress: 50,
    },
    {
      title: "Product Designer",
      company: "Creative Co",
      location: "Los Angeles, CA",
      appliedDate: "Saved",
      status: "pending" as const,
      source: "saved" as const,
      deadline: "Apply by May 20, 2025",
      progress: 0,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
        <p className="text-sm text-foreground">
          <span className="font-semibold">Future Vision:</span> This dashboard could integrate with ATS systems like Workday, Greenhouse, and Lever for automatic status updates, giving you real-time insights across all your applications.
        </p>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Your Applications</h2>
        <span className="text-sm text-muted-foreground">{applications.length} active</span>
      </div>
      
      <div className="space-y-3">
        {applications.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      
      <Button variant="ghost" className="w-full text-primary hover:text-primary/90 hover:bg-primary/5">
        View All Applications
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default ApplicationsSection;
