import React from 'react'
import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material'
import "./Styles.css"
import Typed from 'react-typed';
import { motion } from "framer-motion";
import Profile from '../Assets/Profile.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Fiverr from '../Assets/Fiverr.png'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom';

const Header = () => {
  const handleGithub = () => {
    // window.open("https://github.com/ProgrammingWithMudassar", "_blank", "noopener,noreferrer");
  }
  const handleLinkedIn = () => {
    // window.open("https://www.linkedin.com/in/mudassar-hussain-788b4522a/", "_blank", "noopener,noreferrer");
  }
  const handleFiverr = () => {
    // window.open("https://www.fiverr.com/mudassarhuss306?source=gig_page", "_blank", "noopener,noreferrer");
  }
  return (
    <Box color='#ffffff' sx={{ mt: { xs: 6, md: 2 }, mb: { xs: 10, md: 0 } }} id="/">
      <Container>
        <Grid container spacing={4} sx={{ height: { xs: '110vh', sm: "50vh", md: '50vh' } }} >
          <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: { xs: "", sm: "center", md: 'center' } }} >
            <Box >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Typography variant="h3" color="myColor" fontWeight={300} sx={{ mt: { xs: -4, md: 2 }, fontFamily: "'Patua One', cursive", fontSize: { xs: '40px', md: '50px' } }} >Hi! My name is <span className='name'>Muhammad Abubakar</span> </Typography>
                <Box mt={1} display="flex" >
                  <Typography variant="body1" color="myColor" sx={{ fontSize: '18px' }}>I am  </Typography>
                  <Typed
                    strings={[
                      'Website Developer',
                      'Web App Developer',
                      'Mobile App Developer',
                      'UI/UX Desinger'
                    ]}
                    typeSpeed={60}
                    backSpeed={60}
                    className="typed-header"
                    style={{ fontSize: '16px', margin: "1px 0 0 8px" }}
                    loop />
                </Box>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -150 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Typography variant="body1" color="myColor" mt={0} sx={{ textIndent: '10px' }}>
                 <p style={{ fontSize: 'large' }}> I am website developer with extensive experience of more than 1 year's. My expertise is to create eye catching and attractive website or mobile application for growing your business. I am also perfessional to create UI/UX desing for mobile or website and much more...</p>
                </Typography>
                <BrowserRouter>
                  <Link to="#ContactMe">
                    <Button
                    className='baton'
                      sx={{
                        mt: { xs: 2, md: 3 },
                        p: { xs: 1, md: 2 }
                      }} style={{ color: 'white' }} >
                      Hire me
                    </Button>
                  </Link>
                </BrowserRouter>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.4 }}
                variants={{
                  hidden: { opacity: 0, x: -150 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Stack direction="row" sx={{ mt: 2, gap: 2 }}>
                  <GitHubIcon onClick={handleGithub} sx={{ cursor: 'pointer', fontSize: '3rem' }} />
                  <LinkedInIcon onClick={handleLinkedIn} sx={{ cursor: 'pointer', fontSize: '3.4rem' }} />
                  <img src={Fiverr} alt="" style={{ cursor: 'pointer' }} width="62px" onClick={handleFiverr} />
                </Stack>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
           
              <Box className="image" >
                <img src={Profile} alt="" width={400} className="profileImg" />
              </Box>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}

export default Header