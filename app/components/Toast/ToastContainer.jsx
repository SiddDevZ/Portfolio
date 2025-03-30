"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ToastContext } from './ToastContext';
import ToastNotification from './ToastNotification';

const ToastContainer = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const addToast = (message, type = 'success', duration = 5000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type, duration }]);
    
    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, duration);
    
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.map(toast => 
      toast.id === id ? { ...toast, removing: true } : toast
    ));
    
    // Actually remove after animation completes
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 300);
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      
      {mounted && createPortal(
        <div className="fixed bottom-0 right-0 z-50 p-4 flex flex-col space-y-3 items-end">
          {toasts.map(toast => (
            <ToastNotification
              key={toast.id}
              id={toast.id}
              message={toast.message}
              type={toast.type}
              removing={toast.removing}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export default ToastContainer; 