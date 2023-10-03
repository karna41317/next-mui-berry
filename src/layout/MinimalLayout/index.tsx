import { FC } from 'react';
// project imports
import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout: FC = ({ children }) => (
  <>
    {children}
    <Customization />
  </>
);

export default MinimalLayout;
