import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon' | 'watermark';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
  showText?: boolean;
  inverted?: boolean;
}

const Logo = ({ 
  variant = 'full', 
  size = 'md', 
  className = "", 
  showText = true,
  inverted = false 
}: LogoProps) => {
  
  const sizeClasses = {
    xs: "h-6 w-auto",
    sm: "h-8 w-auto", 
    md: "h-10 w-auto",
    lg: "h-12 w-auto",
    xl: "h-16 w-auto",
    '2xl': "h-20 w-auto",
    '3xl': "h-24 w-auto"
  };

  const textSizeClasses = {
    xs: "text-xs",
    sm: "text-sm", 
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    '2xl': "text-2xl",
    '3xl': "text-3xl"
  };

  const logoImage = (
    <img
      src="/lovable-uploads/ea65a1e7-9ad8-4414-a796-05ea67ee1e19.png"
      alt="DeerPark Tours"
      className={cn(
        sizeClasses[size],
        inverted && "filter brightness-0 invert",
        variant === 'watermark' && "opacity-20",
        "transition-all duration-300 hover:scale-105"
      )}
    />
  );

  if (variant === 'icon') {
    return (
      <div className={cn("flex items-center", className)}>
        {logoImage}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        {logoImage}
        {showText && (
          <div className={cn("font-playfair font-bold tracking-tight", textSizeClasses[size])}>
            <span className="text-secondary">Deer</span>
            <span className="text-accent">Park</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'watermark') {
    return (
      <div className={cn("absolute pointer-events-none select-none", className)}>
        {logoImage}
      </div>
    );
  }

  // Full variant
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {logoImage}
      {showText && (
        <div className="flex flex-col">
          <div className={cn("font-playfair font-bold tracking-tight leading-none", textSizeClasses[size])}>
            <span className="text-secondary">Deer</span>
            <span className="text-accent">Park</span>
          </div>
          <div className={cn("font-inter text-primary font-medium leading-none mt-1", 
            size === 'xs' ? 'text-xs' :
            size === 'sm' ? 'text-xs' :
            size === 'md' ? 'text-sm' :
            size === 'lg' ? 'text-base' :
            size === 'xl' ? 'text-lg' :
            size === '2xl' ? 'text-xl' :
            'text-2xl'
          )}>
            Tours
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;