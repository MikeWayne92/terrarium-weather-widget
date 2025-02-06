import { Terrarium } from "@/components/Terrarium";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <ThemeToggle />
      <div className="container mx-auto py-12">
        <Terrarium />
      </div>
    </div>
  );
};

export default Index;