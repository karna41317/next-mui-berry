import { FC } from 'react';
// project imports
import Customization from './Customization';
import GuestGuard from 'utils/route-guard/GuestGuard';
import NavMotion from './NavMotion';
// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout: FC = ({ children }) => (
  <NavMotion>
    <GuestGuard>
      <>
        {children}
        <Customization />
      </>
    </GuestGuard>
  </NavMotion>
);

export default MinimalLayout;
