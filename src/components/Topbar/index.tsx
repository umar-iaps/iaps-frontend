import { LayoutProps } from '../../interfaces/LayoutProps';

const Topbar = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {children}
    </div>
  );
};

export default Topbar;