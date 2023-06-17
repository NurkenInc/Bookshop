import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { SidebarProvider } from '@/widgets/Sidebar/providers';
import AppRouter from './providers/router/ui/AppRouter';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [])}>
      <SidebarProvider>
        <Navbar />
        <Suspense fallback="">
          <div className="page-content">
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>
      </SidebarProvider>
    </div>
  );
};

export default App;
