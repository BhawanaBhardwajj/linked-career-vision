import ConnectionCard from "./ConnectionCard";
import NetworkOpportunityCard from "./NetworkOpportunityCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NetworkingSection = () => {
  const connections = [
    {
      name: "Alex Thompson",
      title: "Software Engineer at Apple",
      mutualConnections: 12,
      type: "request" as const,
    },
    {
      name: "Jessica Martinez",
      title: "Product Manager at Microsoft",
      mutualConnections: 8,
      type: "request" as const,
    },
    {
      name: "David Park",
      title: "Senior Developer at Netflix",
      mutualConnections: 15,
      type: "suggestion" as const,
    },
    {
      name: "Lisa Wang",
      title: "UX Designer at Adobe",
      mutualConnections: 6,
      type: "suggestion" as const,
    },
  ];

  const requests = connections.filter(c => c.type === "request");
  const suggestions = connections.filter(c => c.type === "suggestion");

  const networkOpportunities = [
    {
      jobTitle: "Senior Software Engineer",
      company: "Microsoft",
      connectionName: "John Doe",
      connectionTitle: "Engineering Manager at Microsoft",
      mutualConnections: 24,
    },
    {
      jobTitle: "Product Designer",
      company: "Airbnb",
      connectionName: "Emma Wilson",
      connectionTitle: "Design Lead at Airbnb",
      mutualConnections: 18,
    },
    {
      jobTitle: "Frontend Developer",
      company: "Shopify",
      connectionName: "Ryan Lee",
      connectionTitle: "Senior Developer at Shopify",
      mutualConnections: 31,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Pending Invitations</h2>
          <span className="text-sm text-muted-foreground">{requests.length} pending</span>
        </div>
        
        <div className="space-y-3">
          {requests.map((connection, index) => (
            <ConnectionCard key={index} {...connection} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Career Opportunities in Your Network</h2>
          <span className="text-sm text-muted-foreground">{networkOpportunities.length} available</span>
        </div>
        
        <div className="space-y-3">
          {networkOpportunities.map((opportunity, index) => (
            <NetworkOpportunityCard key={index} {...opportunity} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">People You May Know</h2>
        </div>
        
        <div className="space-y-3">
          {suggestions.map((connection, index) => (
            <ConnectionCard key={index} {...connection} />
          ))}
        </div>
      </div>
      
      <Button variant="ghost" className="w-full text-primary hover:text-primary/90 hover:bg-primary/5">
        View All Connections
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NetworkingSection;
