import RecruiterCard from "./RecruiterCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RecruitersSection = () => {
  const recruiters = [
    {
      name: "Sarah Johnson",
      title: "Senior Technical Recruiter",
      company: "Meta",
      message: "Hi! I came across your profile and would love to discuss an exciting opportunity for a Senior React Developer position on our team.",
      time: "2h ago",
      status: "new" as const,
    },
    {
      name: "Michael Chen",
      title: "Talent Acquisition Manager",
      company: "Google",
      message: "Your experience with React and TypeScript caught my attention. Would you be interested in learning about our Frontend Engineering roles?",
      time: "1d ago",
      status: "replied" as const,
    },
    {
      name: "Emily Rodriguez",
      title: "Recruiting Lead",
      company: "Amazon",
      message: "We're looking for talented engineers to join our team. I'd love to connect and share more details about opportunities that might interest you.",
      time: "3d ago",
      status: "pending" as const,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Recruiter Messages</h2>
        <span className="text-sm text-muted-foreground">{recruiters.length} unread</span>
      </div>
      
      <div className="space-y-3">
        {recruiters.map((recruiter, index) => (
          <RecruiterCard key={index} {...recruiter} />
        ))}
      </div>
      
      <Button variant="ghost" className="w-full text-primary hover:text-primary/90 hover:bg-primary/5">
        View All Messages
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default RecruitersSection;
