import React, { useContext } from 'react';

export type PageProps = {};
export type PageContext = {
  Page: (pageProps: PageProps) => React.ReactElement;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

const Context = React.createContext<PageContext>(undefined as any);

export function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

export function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
