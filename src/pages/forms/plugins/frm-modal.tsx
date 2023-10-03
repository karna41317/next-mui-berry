// project imports
import SimpleModal from 'components/forms/plugins/Modal/SimpleModal';
import ServerModal from 'components/forms/plugins/Modal/ServerModal';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// ==============================|| MODAL PAGE ||============================== //

const Modal = () => (
  <MainCard title="Simple Modal" secondary={<SecondaryAction link="https://next.material-ui.com/components/modal/" />}>
    <ServerModal />
    <SimpleModal />
  </MainCard>
);
Modal.Layout = 'authGuard';
export default Modal;
