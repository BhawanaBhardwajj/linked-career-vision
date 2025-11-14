import Navigation from "@/components/Navigation";
import ApplicationsSection from "@/components/ApplicationsSection";
import RecruitersSection from "@/components/RecruitersSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Career Dashboard</h1>
          <p className="text-muted-foreground">Track your applications, connect with recruiters, and grow your network</p>
        </div>

        <Tabs defaultValue="applications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-card border">
            <TabsTrigger value="applications" className="data-[state=active]:bg-background data-[state=active]:text-primary">
              Applications
            </TabsTrigger>
            <TabsTrigger value="recruiters" className="data-[state=active]:bg-background data-[state=active]:text-primary">
              Recruiters
            </TabsTrigger>
          </TabsList>
          
          <Card className="p-6">
            <TabsContent value="applications" className="mt-0">
              <ApplicationsSection />
            </TabsContent>
            
            <TabsContent value="recruiters" className="mt-0">
              <RecruitersSection />
            </TabsContent>
          </Card>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
