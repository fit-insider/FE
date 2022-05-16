import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${({ color }) => color};
`;

export default CustomLink;