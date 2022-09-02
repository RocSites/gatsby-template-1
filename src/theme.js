import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#88df95",
      // light: "#000000"
    },
    background: {
      default: "#88df95",
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
      fontFamily: 'Raleway'
  }
});

export default theme;