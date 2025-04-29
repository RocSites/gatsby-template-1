import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#162444",
      // light: "#000000"
    },
    background: {
      default: "#162444",
      paper: "#fff"
    },
    text: {
        primary: "#2c3340"
    },
    action: {
        active: "#d3d8e1",
        hover: "#adb0b5"
    }
  },
  typography: {
      fontFamily: 'Roboto'
  }
});

export default theme;