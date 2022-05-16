import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderText, ShowcaseSpan, StyledTextBox, Text } from './StyledComponents';

const Textbox = ({ id }) => {
  const delay = (id - 1) * 5;
  const { t } = useTranslation();

  return (
    <StyledTextBox delay={delay}>
      <HeaderText>{t(`SLIDESHOW_HEADER_${id}`)}</HeaderText>
      <ShowcaseSpan></ShowcaseSpan>
      <Text>{t(`SLIDESHOW_TEXT_${id}`)}</Text>
    </StyledTextBox>
  );
};

export default Textbox;