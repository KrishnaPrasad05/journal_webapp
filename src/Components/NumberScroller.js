import React, { useEffect, useState } from 'react';
import '../styles.css'; // Import your CSS file

const NumberScroller = ({ initialValue, finalValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [isScrolling, setIsScrolling] = useState(true);
  const difference = finalValue - initialValue;
  const step = difference / (duration * 100); // Calculate step based on duration

  useEffect(() => {
    if (isScrolling) {
      const interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          const newValue = prevValue + step;
          if (step > 0 ? newValue >= finalValue : newValue <= finalValue) {
            clearInterval(interval);
            setIsScrolling(false);
            return finalValue;
          }
          return newValue;
        });
      }, 10); // Update every 10ms for smoother animation

      return () => clearInterval(interval);
    }
  }, [finalValue, step, isScrolling]);

  return (
    <div className="number-scroller" style={{color:'white',fontSize:'2rem',fontWeight:600,height:'50px'}}>
      <div className="rolling-number" style={{color:'white',fontSize:'2rem',fontWeight:600}}>{Math.round(currentValue)}</div>
      {isScrolling ? null : <div className="fixed-number">{finalValue}</div>}
    </div>
  );
};

export default NumberScroller;
