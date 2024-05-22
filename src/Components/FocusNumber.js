import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import react-bootstrap components
import NumberScroller from './NumberScroller'; // Import your NumberScroller component

const FocusAwareNumberScroller = ({ initialValue, finalValue, duration }) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    // Add event listeners for focus and blur events
    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('blur', handleBlur, true);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);
    };
  }, []);

  return isFocused ? (
    <NumberScroller initialValue={initialValue} finalValue={finalValue} duration={duration} />
  ) : null;
};


export default FocusAwareNumberScroller;
