import React, { createContext, useState, useContext, useCallback } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [queue, setQueue] = useState([]);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (queue.length > 0) {
      const next = queue[0];
      setQueue((q) => q.slice(1));
      setToasts((prev) => [...prev, next]);
    }
  };

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    const newToast = { id, message, type };

    setToasts((prev) => {
      if (prev.length < 3) {
        setTimeout(() => removeToast(id), 3000);
        return [...prev, newToast];
      } else {
        setQueue((q) => [...q, newToast]);
        return prev;
      }
    });
  }, [queue]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            <span>{toast.message}</span>
            <button className="close-btn" onClick={() => removeToast(toast.id)}>×</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);