// material-ui
import { Grid } from '@mui/material';

// project imports
import BasicSlider from 'components/forms/components/Slider/BasicSlider';
import DisableSlider from 'components/forms/components/Slider/DisableSlider';
import VolumeSlider from 'components/forms/components/Slider/VolumeSlider';
import LabelSlider from 'components/forms/components/Slider/LabelSlider';
import PopupSlider from 'components/forms/components/Slider/PopupSlider';
import StepSlider from 'components/forms/components/Slider/StepSlider';
import VerticalSlider from 'components/forms/components/Slider/VerticalSlider';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ==============================|| SLIDER PAGE ||============================== //

const Slider = () => (
  <MainCard title="Slider" secondary={<SecondaryAction link="https://next.material-ui.com/components/slider/" />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={4}>
        <SubCard title="Basic Slider">
          <BasicSlider />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <SubCard title="Disabled">
          <DisableSlider />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <SubCard title="Volume">
          <VolumeSlider />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <SubCard title="With Label">
          <LabelSlider />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <SubCard title="With Popup Value">
          <PopupSlider />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <SubCard title="Steps With Popup Value">
          <StepSlider />
        </SubCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <SubCard title="Vertical Slider">
          <VerticalSlider />
        </SubCard>
      </Grid>
    </Grid>
  </MainCard>
);
Slider.Layout = 'authGuard';
export default Slider;
