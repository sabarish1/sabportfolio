import { Link } from 'react-scroll';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('header');

  const navItems = [
    { to: 'header', icon: '🏠', label: 'Home' },
    { to: 'about', icon: '🖋️', label: 'About' },
    { to: 'skills', icon: '💻', label: 'Skills' },
    { to: 'experience', icon: '💼', label: 'Experience' },
    { to: 'awards', icon: '🏆', label: 'Awards' },
    { to: 'education', icon: '🎓', label: 'Education' },
    { to: 'socials', icon: '💡', label: 'Socials' },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex flex-row gap-3 bg-card/80 backdrop-blur-sm rounded-2xl p-3 border border-border shadow-lg">
        {navItems.map((item) => (
          <Tooltip key={item.to}>
            <TooltipTrigger asChild>
              <div>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`w-12 h-12 flex items-center justify-center text-2xl cursor-pointer hover:scale-150 rounded-xl transition-all duration-300 ${
                    activeSection === item.to ? 'bg-yellow-400' : 'hover:bg-transparent-accent'
                  }`}
                >
                  {item.icon}
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-popover text-popover-foreground border border-border">
              <p className="text-sm font-medium">{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </header>
    </TooltipProvider>
  );
};

export default Navigation;
