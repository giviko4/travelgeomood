import { useState, useEffect } from 'react';

// ეს hook-ი გვატყობინებს, არის თუ არა ეკრანი მობილურის ზომის
function useWindowSize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    // მნიშვნელოვანია, რომ მოვაშოროთ event listener-ი, როცა კომპონენტი ქრება
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default useWindowSize;