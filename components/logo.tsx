import React, { useEffect, useState } from 'react';
import { useTheme } from 'nextra-theme-docs';

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={isDarkMode 
          ? "https://beta.nodebyte.host/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFrontLogo.179d5a77.png&w=96&q=75"
          : "https://beta.nodebyte.host/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo-Black.34859308.png&w=96&q=75"}
        alt={isDarkMode ? "NodeByte Logo (Dark Mode)" : "NodeByte Logo (Light Mode)"}
        style={{ width: 50, height: 50 }}
      />
      <span style={{ marginLeft: 10 }}>
        NodeByte Documentation
      </span>
    </div>
  );
};

export default Logo;
