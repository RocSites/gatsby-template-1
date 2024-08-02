import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import CallIcon from "../images/call_icon2.png"
import EmailIcon from '@mui/icons-material/Email';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ReCAPTCHA from "react-google-recaptcha"


const withStyles = makeStyles((theme) => ({
  formRoot: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontWeight: "bold",
    marginTop: "100px",
    "& input": {
      borderRadius: "3px",
      fontWeight: "normal"
    },
    "& textarea": {
      fontWeight: "normal",
      height: "100px",
    },
    "& form": {
      marginTop: "1.5rem",
      width: "40%",
      "@media(max-width: 650px)": {
        width: "75%"
      }

    }
  },
  formHeader: {
    fontSize: "2.0rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  formEmail: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "10px",
  },
  formTextarea: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "10px",
    marginBottom: "20px"
  },
  submitButton: {
    margin: "20px",
    backgroundColor: theme.palette.primary.main,
    color: "black",
    borderColor: theme.palette.primary.main,
    borderRadius: "35px",
    padding: "15px",
    paddingLeft: "25px",
    paddingRight: "25px",
    textTransform: "none",
    fontSize: "1.0rem",
    width: "190px",
    fontWeight: "bold",
    '&:hover': {
      backgroundColor: "white",
      cursor: "pointer",
      boxShadow: 'none',
    },
  },
  callButton: {
    display: "flex",
    textDecoration: "none",
    color: "black",
    backgroundColor: "#88df95",
    margin: "auto",
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "35px",
    fontFamily: "sans-serif",
    "& img": {
      height: "30px",
      width: "30px", 
      margin: "10px"
    }
  },
  submitButtonWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  captchaWrapper: {
    margin: "10px"
  }

}));

const ContactForm = (props) => {

  const classes = withStyles();

  return (
    <div id="contactForm" className={classes.formRoot}>
      <form
        name="Rocsites Contact Form"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="Rocsites Contact Form" />

        <Typography className={classes.formHeader}>Let's Connect</Typography>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <a className={classes.callButton} href="mailto: doug@rocsites.com">
            <EmailIcon sx={{marginRight: "10px"}} />
            doug@rocsites.com
          </a>
          <a className={classes.callButton} href="tel:(585)204-0052">
            <img src={CallIcon} />
            (585) 204-0052
          </a>
        </div>

        <div className={classes.formEmail}>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div className={classes.formTextarea}>
          <label>How can we help?</label>
          <textarea name="message" />
        </div>
        <div className={classes.captchaWrapper}>
          <ReCAPTCHA sitekey="6LevMeshAAAAAJ3QDvN0h3-gystjzxxMGZj094DL" />
        </div>
        <div className={classes.submitButtonWrapper}>
          <button className={classes.submitButton} type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
