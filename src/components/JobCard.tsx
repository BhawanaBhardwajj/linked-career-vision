import { Building2, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StatusBadge from "./StatusBadge";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  appliedDate: string;
  status: "applied" | "interview" | "offer" | "rejected";
  deadline?: string;
  progress?: number;
  companyLogo?: string;
}

const JobCard = ({ title, company, location, appliedDate, status, deadline, progress }: JobCardProps) => {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <Avatar className="h-14 w-14 rounded">
          <AvatarFallback className="bg-muted rounded">
            <Building2 className="h-7 w-7 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 truncate text-base">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{company}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>Applied {appliedDate}</span>
            </div>
            {deadline && (
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>Deadline: {deadline}</span>
              </div>
            )}
          </div>
          
          {progress !== undefined && (
            <div className="mb-3">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">Application Progress</span>
                <span className="font-medium text-foreground">{progress}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-3">
            <StatusBadge status={status} />
            <button className="ml-auto text-sm font-medium text-primary hover:underline">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
