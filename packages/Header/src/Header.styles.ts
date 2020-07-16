import { createStyles, Theme } from '@material-ui/core/styles';


export const styles = (theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.grey['A200'],
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '70px',
      padding: '0 16px',
      color: theme.palette.primary.contrastText,
    },
    navLinks: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      height: '100%',
      textDecoration: 'none',
    },
    rightSide: {
      display: 'flex',
      flexGrow: 0,
      justifyContent: 'center',
    },
    navLink: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0 12px 8px 12px',
      color: theme.palette.primary.contrastText,
      borderBottom: '3px solid transparent',
      transition: '.2s',
      opacity: '.5',
      cursor: 'pointer',
      '&--active:hover': {
        borderBottom: `3px solid ${theme.palette.primary.contrastText}`,
        opacity: 1,
      },
      '&__icon': {
        position: 'relative',
        display: 'inline-block',
        width: '24px',
        height: '24px',
        margin: '0 0 8px 0',
        fill: theme.palette.primary.contrastText,
      },
      '&__text': {
        display: 'block',
        fontSize: '11px',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '.2px',
      }
    },
  });
