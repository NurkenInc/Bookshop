import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { SidebarProvider } from '@/widgets/Sidebar/providers';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [])}>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>
      <Suspense fallback="">
        <div className="page-content">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
