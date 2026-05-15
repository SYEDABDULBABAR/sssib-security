'use client';

import { ThemeProvider } from '@/lib/ThemeContext';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: { borderRadius: '12px', background: '#0a1628', color: '#fff', fontSize: '14px' },
          success: { iconTheme: { primary: '#d4a853', secondary: '#0a1628' } },
        }}
      />
    </ThemeProvider>
  );
}
