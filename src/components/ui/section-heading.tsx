import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 inline-block relative">
        {title}
        <span className="absolute -bottom-3 left-0 w-12 h-1.5 bg-secondary rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-lg max-w-2xl mt-4 leading-relaxed font-light mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

