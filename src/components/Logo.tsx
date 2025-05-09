
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <span className="text-xl md:text-2xl font-bold">
        Wealth <span className="gold-gradient">PrîMer</span>
      </span>
    </div>
  );
};

export default Logo;
