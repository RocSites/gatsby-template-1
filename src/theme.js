import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f07539",
      light: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)"
    },
    background: {
      default: "#f5f6f8",
      paper: "#fff"
    },
    text: {
        primary: "#2c3340"
    },
    action: {
        active: "d3d8e1",
        hover: "#adb0b5"
    }
  },
  typography: {
      fontFamily: 'Raleway'
  }
});

export default theme;