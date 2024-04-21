/**
 * Component: StyledLink
 *
 * RouterLink that look like a button
 */
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(RouterLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
}));

export default StyledLink;
