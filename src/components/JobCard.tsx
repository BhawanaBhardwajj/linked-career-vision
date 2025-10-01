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
  companyLogo?: string;
}

const JobCard = ({ title, company, location, appliedDate, status }: JobCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-3">
        <Avatar className="h-12 w-12 rounded">
          <AvatarFallback className="bg-muted rounded">
            <Building2 className="h-6 w-6 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 truncate">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{company}</p>
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>Applied {appliedDate}</span>
            </div>
          </div>
          
          <StatusBadge status={status} />
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
