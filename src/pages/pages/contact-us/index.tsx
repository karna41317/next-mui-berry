// material-ui
import { styled } from '@mui/material/styles';

// project imports
import ContactCard from 'components/contact-us/ContactCard';
import AppBar from 'ui-component/extended/AppBar';

// assets
const headerBackground = '/assets/images/landing/header-bg.jpg';

const HeaderWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${headerBackground})`,
  backgroundSize: '100% 600px',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  paddingTop: 30,
  [theme.breakpoints.down('md')]: {
    paddingTop: 0
  }
}));

// ============================|| CONTACT US MAIN ||============================ //

const ContactUsPage = () => (
  <HeaderWrapper>
    <AppBar />
    <ContactCard />
  </HeaderWrapper>
);
ContactUsPage.Layout = 'minimalLayout';
export default ContactUsPage;
