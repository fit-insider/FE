import React, { useState } from 'react';
import images from '../../shared/images/Images';
import LanguageSelection from './LanguageSelection';
import { Modal } from '@material-ui/core';
import { SettingsIconButton, SettingsWrapper, StyledSettingsModalContent } from './StyledComponents';

const Settings = () => {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const handleOpen = () => setSettingsModalOpen(true);
  const handleClose = () => setSettingsModalOpen(false);

  return (
    <SettingsWrapper>
      <SettingsIconButton
        onClick={handleOpen}
        src={images.settings}
      />
      <Modal
        open={settingsModalOpen}
        onClose={handleClose}
      >
        <StyledSettingsModalContent>
          <LanguageSelection />
        </StyledSettingsModalContent>
      </Modal>
    </SettingsWrapper>
  );
};

export default Settings;