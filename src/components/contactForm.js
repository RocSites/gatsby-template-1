import React from "react"
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ReCAPTCHA from "react-google-recaptcha"


const withStyles = makeStyles((theme) => ({
    formRoot: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        "& input":{
          borderRadius: "3px",
          fontWeight: "normal"
        },
        "& textarea":{
          fontWeight: "normal",
          height: "100px"
        },
        "& form":{
          marginTop: "1.5rem",
          width: "40%",
          "@media(max-width: 650px)":{
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
        margin:"20px",
        backgroundColor: "#f07539",
        color: "white",
        borderRadius: "35px",
        padding:"15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        width: "190px",
        fontWeight: "bold",
        '&:hover': {
          backgroundColor: 'gray',
          boxShadow: 'none',
        },
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
    <div id="form" className={classes.formRoot}>
      <form 
        name="Contact Form" 
        method="POST" 
        data-netlify="true" 
        data-netlify-recaptcha="true"
        action="/thank-you"
        >
        <input type="hidden" name="form-name" value="Contact Form" />

          <Typography className={classes.formHeader}>Contact Us</Typography>

        <div className={classes.formEmail}>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div className={classes.formTextarea}>
          <label>How can we help?</label>
          <textarea name="message" />
        </div>
        <div className={classes.captchaWrapper}>
          <ReCAPTCHA sitekey="6Le9Z0YaAAAAAKmid2I2A10qNfD86kqqGI7oKOGR" />
        </div>
        <div className={classes.submitButtonWrapper}>
          <button className={classes.submitButton} type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
