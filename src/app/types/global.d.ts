declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  import * as React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __APP__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_BOOKS_API: string,
  readonly VITE_AUTH0_DOMAIN: string,
  readonly VITE_CLIENT_ID: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
