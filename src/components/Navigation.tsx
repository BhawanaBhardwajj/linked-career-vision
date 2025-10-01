import { Home, Users, Briefcase, MessageSquare, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navigation = () => {
  const navItems = [
    { icon: Home, label: "Home", active: false },
    { icon: Users, label: "My Network", active: false },
    { icon: Briefcase, label: "Jobs", active: true },
    { icon: MessageSquare, label: "Messaging", active: false },
    { icon: Bell, label: "Notifications", active: false },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[var(--nav-height)]">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-lg">
                in
              </div>
            </div>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className={`flex flex-col items-center gap-1 h-auto py-2 px-4 hover:text-foreground ${
                    item.active ? "text-foreground border-b-2 border-primary rounded-none" : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs font-normal">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Profile */}
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 h-auto py-2 px-4 text-muted-foreground hover:text-foreground"
          >
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs bg-muted">ME</AvatarFallback>
            </Avatar>
            <span className="text-xs font-normal">Me</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
