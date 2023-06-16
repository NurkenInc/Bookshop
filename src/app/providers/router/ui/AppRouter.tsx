import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([path, route]) => (
        <Route
          path={route.path}
          element={(
            <Suspense fallback={<div>Loading</div>}>
              {route.element}
            </Suspense>
          )}
          key={path}
        />
      ))}
    </Routes>
  );
};
