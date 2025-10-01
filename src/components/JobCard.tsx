import { Building2, MapPin, Calendar, ExternalLink, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StatusBadge from "./StatusBadge";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  appliedDate: string;
  status: "applied" | "interview" | "offer" | "rejected" | "pending";
  source: "linkedin" | "saved" | "external";
  deadline?: string;
  progress?: number;
  companyLogo?: string;
}

const sourceConfig = {
  linkedin: {
    label: "Applied on LinkedIn",
    className: "bg-primary/10 text-primary border-primary/20",
  },
  saved: {
    label: "Saved Job",
    className: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-800",
  },
  external: {
    label: "External Application",
    className: "bg-muted text-muted-foreground border-border",
  },
};

const JobCard = ({ title, company, location, appliedDate, status, source, deadline, progress }: JobCardProps) => {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <Avatar className="h-14 w-14 rounded">
          <AvatarFallback className="bg-muted rounded">
            <Building2 className="h-7 w-7 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate text-base">{title}</h3>
            <Badge variant="outline" className={sourceConfig[source].className}>
              {sourceConfig[source].label}
            </Badge>
          </div>
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
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                <Bell className="h-3.5 w-3.5" />
                <span>Reminder: {deadline}</span>
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
          
          <div className="flex items-center gap-2 flex-wrap">
            <StatusBadge status={status} />
            <Button size="sm" variant="ghost" className="ml-auto text-primary hover:text-primary/90">
              Update Status
            </Button>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
