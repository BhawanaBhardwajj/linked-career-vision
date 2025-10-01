import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, User } from "lucide-react";

interface NetworkOpportunityCardProps {
  jobTitle: string;
  company: string;
  connectionName: string;
  connectionTitle: string;
  mutualConnections?: number;
}

const NetworkOpportunityCard = ({ 
  jobTitle, 
  company, 
  connectionName, 
  connectionTitle,
  mutualConnections 
}: NetworkOpportunityCardProps) => {
  return (
    <Card className="p-5 hover:shadow-md transition-shadow border-l-4 border-l-primary/40">
      <div className="flex gap-4 mb-4">
        <Avatar className="h-14 w-14 rounded">
          <AvatarFallback className="bg-primary/10 text-primary rounded">
            <Building2 className="h-7 w-7" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 truncate text-base">{jobTitle}</h3>
          <p className="text-sm text-muted-foreground mb-2">{company}</p>
          
          <div className="flex items-start gap-2 bg-primary/5 p-2.5 rounded-md">
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-xs font-medium text-foreground truncate">{connectionName}</p>
              <p className="text-xs text-muted-foreground truncate">{connectionTitle}</p>
              {mutualConnections && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {mutualConnections} mutual connections
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Button size="sm" className="w-full">
        Apply with Connection
      </Button>
    </Card>
  );
};

export default NetworkOpportunityCard;
