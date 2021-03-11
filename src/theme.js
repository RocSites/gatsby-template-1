import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cd5c5c",
      // light: "#000000"
    },
    background: {
      default: "#f5f6f8",
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