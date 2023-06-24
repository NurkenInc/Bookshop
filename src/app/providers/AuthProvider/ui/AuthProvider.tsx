import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode,
}

const domain = process.env.VITE_AUTH0_DOMAIN || '';
const clientId = process.env.VITE_CLIENT_ID || '';

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
