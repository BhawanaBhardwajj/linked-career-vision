import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Briefcase } from "lucide-react";
import RecruiterStatusBadge from "./RecruiterStatusBadge";

interface RecruiterCardProps {
  name: string;
  title: string;
  company: string;
  message: string;
  time: string;
  status: "new" | "replied" | "pending";
}

const RecruiterCard = ({ name, title, company, message, time, status }: RecruiterCardProps) => {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow border-l-4 border-l-primary/20">
      <div className="flex gap-3 mb-3">
        <Avatar className="h-14 w-14">
          <AvatarFallback className="bg-primary/10 text-primary">
            <User className="h-7 w-7" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            <RecruiterStatusBadge status={status} />
          </div>
          <p className="text-sm text-muted-foreground truncate">{title}</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
            <Briefcase className="h-3 w-3" />
            <span>{company}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-1">Last message · {time}</p>
        <p className="text-sm text-foreground line-clamp-2 bg-muted/30 p-3 rounded-md">{message}</p>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        <Button size="sm" variant="outline" className="flex-1 min-w-[100px]">
          View Profile
        </Button>
        <Button size="sm" variant="outline" className="flex-1 min-w-[100px]">
          View Job Post
        </Button>
        <Button size="sm" className="flex-1 min-w-[100px]">
          Reply
        </Button>
      </div>
    </Card>
  );
};

export default RecruiterCard;
