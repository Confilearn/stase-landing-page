import { Smartphone } from "lucide-react";
import StepCard from "./StepCard";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PlatformSectionProps {
  platform: string;
  icon: React.ReactNode;
  steps: Step[];
}

const PlatformSection = ({ platform, icon, steps }: PlatformSectionProps) => {
  return (
    <section className="w-full">
      <div className="mb-8 flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
          {icon}
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground">{platform}</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <StepCard key={i} step={i + 1} title={step.title} description={step.description} icon={step.icon} />
        ))}
      </div>
    </section>
  );
};

export default PlatformSection;
