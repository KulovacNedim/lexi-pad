import { useEffect, useRef, useState } from 'react';
import React from 'react';

export const EmojiPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Close the popup when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative flex h-full mx-1'>
      {/* Button to toggle popup */}
      <button
        onClick={togglePopup}
        className='cursor-pointer hover:bg-gray-200 rounded-full transition-colors'
      >
        😊
      </button>

      {/* Popup content */}
      {isOpen && (
        <div
          ref={popupRef}
          className='absolute bottom-10 bg-white border border-gray-300 shadow-lg p-4 rounded z-10 w-48'
        >
          <h4 className='text-lg font-semibold mb-2'>Popup Content</h4>
          <button onClick={() => setCounter((p) => p + 1)}>{counter}</button>
          <p className='text-sm'>
            This is a popup window. You can put anything here.
          </p>
        </div>
      )}
    </div>
  );
};
