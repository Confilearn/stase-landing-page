interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard = ({ step, title, description, icon }: StepCardProps) => {
  return (
    <div className="group relative flex flex-col items-center gap-5 rounded-2xl glass-card p-7 text-center transition-all duration-300 hover:-translate-y-1">
      {/* Step badge */}
      <div className="absolute -top-3 left-6 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-display text-xs font-bold shadow-sm">
        {step}
      </div>

      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div className="space-y-2">
        <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
