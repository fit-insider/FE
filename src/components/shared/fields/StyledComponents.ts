import styled from 'styled-components';
import colors from '../theme/Colors';

export const StyledTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px auto;
`;


export const StyledTextField = styled.input<{ error?: boolean }>`
  padding: 8px 5px;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border: ${({ error }) => error === false ? `1px solid ${colors.grey}` : `1px solid ${colors.error}`};
  transition: .2s;

  &:hover {
    border: ${({ error }) => error === false ? `1px solid ${colors.dark}` : `1px solid ${colors.error}`};
  }

  &:focus{
    border: ${({ error }) => error === false ? `2px solid ${colors.primary}` : `1px solid ${colors.error}`};
`;

export const StyledTextArea = styled.textarea<{ error?: boolean }>`
  padding: 5px;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border: ${({ error }) => error === false ? `1px solid ${colors.grey}` : `1px solid ${colors.error}`};
  transition: .2s;

  &:hover {
    border: ${({ error }) => error === false ? `1px solid ${colors.dark}` : `1px solid ${colors.error}`};
  }

  &:focus{
    border: ${({ error }) => error === false ? `2px solid ${colors.primary}` : `1px solid ${colors.error}`};
`;

export const StyledSelect = styled.select<{ error?: boolean }>`
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  outline: none;
  line-height: 1.1;
  padding: 2px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  
  border: ${({ error }) => error === false ? `1px solid ${colors.grey}` : `1px solid ${colors.error}`};

  &:hover {
    border: ${({ error }) => error === false ? `1px solid ${colors.dark}` : `1px solid ${colors.error}`};
  }

  &:focus{
    border: ${({ error }) => error === false ? `2px solid ${colors.primary}` : `1px solid ${colors.error}`};
  }
`;

export const StyledSelectOption = styled.option`
  color: ${colors.dark};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxContent = styled.div<{ hidden?: boolean }>`
  width: ${({ hidden }) => hidden ? '0px' : 'unset'};
`;

export const StyledCheckboxInput = styled.input<{ error?: boolean }>`
  accent-color: ${colors.primary};
  border: ${({ error }) => error === false ? `1px solid ${colors.dark}` : `1px solid ${colors.error}`};
`;

export const ErrorLabel = styled.p`
  margin: 3px;
  color: ${colors.error};
  font-size: 0.8rem;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchButtonContainer = styled.div<{ labelColor?: string }>`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  background: ${colors.grey};
  border: 2px solid ${({ labelColor }) => labelColor === 'dark' ? colors.dark : colors.white};
  margin: 10px;
  width: 50px;
  height: 25px;
  border-radius: 28px;
  cursor: pointer;
`;

export const SwitchToggle = styled.div<{ active?: boolean }>`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 0;
  border-radius: 100%;
  background: ${colors.primary};
  left: ${({ active }) => active ? '25px' : '0'};
  transition: 0.2s;
`;

export const SwitchLabel = styled.label<{ labelColor?: string, small?: boolean, active?: boolean }>`
  margin: 3px;
  font-size: ${({ small }) => small ? '0.8rem' : '1rem'};
  color: ${({ active, labelColor }) => active ?
    (labelColor === 'dark' ? colors.dark : colors.white) :
    colors.grey
  };
  transition: .2s;
`;