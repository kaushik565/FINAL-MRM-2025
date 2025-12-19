import React from 'react'
import ReactDOM from 'react-dom/client'
import Presentation from './Presentation'
import ComplaintsShowcase from './pages/ComplaintsShowcase'
import './styles.css'

// Suppress React DevTools async message errors in development
if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      args[0]?.toString?.().includes('A listener indicated an asynchronous response') ||
      args[0]?.toString?.().includes('message channel closed')
    ) {
      return; // Silently ignore DevTools errors
    }
    originalError(...args);
  };
}

const isComplaintsPage = typeof window !== 'undefined' && (
  window.location.hash === '#complaints-page' ||
  window.location.search.includes('complaints-page=true')
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isComplaintsPage ? <ComplaintsShowcase /> : <Presentation />}
  </React.StrictMode>
)
