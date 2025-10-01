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
      deadline: "May 15, 2025",
      progress: 75,
    },
    {
      title: "React Developer",
      company: "StartupXYZ",
      location: "Remote",
      appliedDate: "1 week ago",
      status: "applied" as const,
      progress: 25,
    },
    {
      title: "Full Stack Engineer",
      company: "Innovation Labs",
      location: "New York, NY",
      appliedDate: "2 weeks ago",
      status: "offer" as const,
      deadline: "May 10, 2025",
      progress: 100,
    },
    {
      title: "UI/UX Developer",
      company: "Design Studio",
      location: "Austin, TX",
      appliedDate: "3 weeks ago",
      status: "rejected" as const,
      progress: 50,
    },
  ];

  return (
    <div className="space-y-4">
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
