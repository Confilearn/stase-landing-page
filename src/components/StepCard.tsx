interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard = ({ step, title, description, icon }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-display font-bold text-sm">
        {step}
      </div>
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-secondary">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default StepCard;
