import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Layout;
