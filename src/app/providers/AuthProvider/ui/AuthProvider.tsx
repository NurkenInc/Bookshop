import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode,
}

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;
const appUrl = __APP__;

console.log(appUrl);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
