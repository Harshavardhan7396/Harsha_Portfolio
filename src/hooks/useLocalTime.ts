import { useState, useEffect } from 'react';

export function useLocalTime() {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    function updateTime() {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setTimeStr(`${formatter.format(now)} IST`);
      } catch (e) {
        setTimeStr('');
      }
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeStr;
}
