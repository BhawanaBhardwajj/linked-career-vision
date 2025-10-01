import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Users } from "lucide-react";

interface ConnectionCardProps {
  name: string;
  title: string;
  mutualConnections: number;
  type: "request" | "suggestion";
}

const ConnectionCard = ({ name, title, mutualConnections, type }: ConnectionCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-3 mb-3">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-muted">
            <User className="h-6 w-6 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{name}</h3>
          <p className="text-sm text-muted-foreground truncate mb-1">{title}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            <span>{mutualConnections} mutual connections</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2">
        {type === "request" ? (
          <>
            <Button size="sm" variant="outline" className="flex-1">
              Ignore
            </Button>
            <Button size="sm" className="flex-1">
              Accept
            </Button>
          </>
        ) : (
          <Button size="sm" variant="outline" className="w-full">
            Connect
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ConnectionCard;
