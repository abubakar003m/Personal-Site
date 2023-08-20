import React from 'react'
import { Box, Container, Grid, Typography, Button, Card, ListItem, List } from '@mui/material'
import "./Styles.css"
import { aboutData } from '../Data/DummyData'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom';
import { motion } from "framer-motion";

const About = () => {
    return (
        <Box color='#ffffff' sx={{ mt: { xs: 10, md: 10 },overflow:'hidden' }} id="about">
            <Container >
                <Box className="sectionTitle" >
                    <Typography variant="h4" className='title name' fontWeight={600}>About Me</Typography>
                </Box>
                <Grid container spacing={4} sx={{ mt: { xs: 4, md: 6 } }}>
                    <Grid item xs={12} md={8}>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once:true, amount: 0.5 }}
                          transition={{ duration:0.8 }}
                          variants={{
                            hidden:{ opacity: 0, x:-100 },
                            visible:{ opacity: 1, x: 0 },
                          }}
                        >
                            <Typography variant="h5" sx={{ fontSize: { xs: '20px', md: '30px' } }}>I'm perfessional <span className='name' style={{ fontWeight: 600 }}>Full Stack Developer</span></Typography>
                            <Typography variant="body1" sx={{ textIndent: { xs: "50px", md: '100px' }, mt: 2 }}>{aboutData.desc}</Typography>
                            <Typography variant="body1" sx={{ textIndent: { xs: "50px", md: '100px' } }}>{aboutData.desc2}</Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once:true, amount: 0.5 }}
                          transition={{ duration:0.8 }}
                          variants={{
                            hidden:{ opacity: 0, x: 100 },
                            visible:{ opacity: 1, x: 0 },
                          }}
                        > 
                        <Card >
                            <List>
                                <Grid container spacing={0}>
                                    <Grid xs={3} md={3}>
                                        <ListItem><Typography variant="body1" fontWeight={600}>Age :</Typography></ListItem>
                                        <ListItem><Typography variant="body1" fontWeight={600}>Email:</Typography></ListItem>
                                        <ListItem><Typography variant="body1" fontWeight={600}>Number:</Typography></ListItem>
                                        <ListItem><Typography variant="body1" fontWeight={600}>Degree:</Typography></ListItem>
                                        <ListItem><Typography variant="body1" fontWeight={600}>Freelance:</Typography></ListItem>
                                        <ListItem>
                                            <BrowserRouter>
                                                <Link to="#ContactMe">
                                                    <Button  className='baton'style={{ color: 'white' }} sx={{ fontSize: '10px' }}>Hire me</Button>
                                                </Link>
                                            </BrowserRouter>
                                        </ListItem>
                                    </Grid>
                                    <Grid xs={9} md={9}>
                                        <ListItem><Typography variant="body1">20</Typography></ListItem>
                                        <ListItem><Typography variant="body1">abubakar003m@gmail.com</Typography></ListItem>
                                        <ListItem><Typography variant="body1">+923057165645</Typography></ListItem>
                                        <ListItem><Typography variant="body1">BS Software Engineering</Typography></ListItem>
                                        <ListItem><Typography variant="body1">Available</Typography></ListItem>
                                        <ListItem>
                                            <Button className='baton'style={{ color: 'white' }} sx={{ fontSize: '11px' }}>Download CV</Button>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>
                        </Card>
                </motion.div>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default About