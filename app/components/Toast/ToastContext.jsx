"use client";
import { createContext, useContext } from 'react';

export const ToastContext = createContext({
  addToast: () => {},
  removeToast: () => {}
});

export const useToast = () => useContext(ToastContext); 