import React, { useState, useRef } from 'react';
import "./Styles.css"
import { Container, Box, Grid, Typography, Stack, Button } from '@mui/material'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {

  const form = useRef();
  const [mail, setMail] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMail({
      ...mail, [name]: value
    })
  }


  const sendEmail = (e) => {
    e.preventDefault();
    let { name, email, subject, message } = mail;

    if (!name || !email || !subject || !message) {
      alert("please fill completely contact form");
    }
    else {
      emailjs.sendForm('service_loumlb8', 'template_tjmf0fk', form.current, 'HT8b5-jSjZAyo-2Cz')
        .then((result) => {
          console.log(result.text);
          alert("Your mail sent successfully.");
          window.location.reload();
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <Box sx={{ mt: { xs: 10, md: 10 } }} id="ContactMe">
      <Container>
        <Box className="sectionTitle">
          <Typography variant="h4" className='title name' fontWeight={600}>Contact Me</Typography>
        </Box>
        <Grid container spacing={4} mt={4} color="#ffffff">
          <Grid item xs={12}>
            <Box textAlign='center'>
              <Typography variant="h4" fontWeight={600}>Send me an email</Typography>
              <Typography variant="body1" >I'm very responsive to messages</Typography>
            </Box>
            <form ref={form} onSubmit={sendEmail}>
              <Stack direction="column" spacing={2} mt={4}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <input type="text" placeholder='Name' className='input' value={mail.name} name="name" onChange={handleInput} />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <input type="email" placeholder='Email' className='input' value={mail.email} name="email" onChange={handleInput} />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <input type="text" placeholder='Subject' className='input' value={mail.subject} name="subject" onChange={handleInput} />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <textarea placeholder='Message' cols="30" rows="10" className='textInput' value={mail.message} name="message" onChange={handleInput} />
                </motion.div>
                <Button style={{ borderRadius: '20px', height: "40px",  color: 'white' }} className='baton' onClick={sendEmail}>Send me</Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact