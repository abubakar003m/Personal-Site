import React from 'react'
import {
  Box, Typography, Container, Grid
} from '@mui/material'
import './Styles.css'
import { projectData } from '../Data/DummyData'
import { motion } from "framer-motion";




const Project = () => {
  return (
    <Box sx={{ mt: { xs: 10, md: 10 } }} id="projects">
      <Container >
        <Box className="sectionTitle">
          <Typography variant="h4" className='title name' fontWeight={600}>Projects</Typography>
        </Box>
        <Grid container spacing={2} mt={6} >
          {
            projectData.map((data) => {
              return (
                <Grid item xs={12} sm={6} md={4} >
                  <div className='ProjectImgBox' >
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6 }}
                      variants={{
                        hidden: { opacity: 0, y: data.y },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <img src={data.img} alt="" className='ProjectImg' />
                    </motion.div>
                  </div>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box >
  )
}

export default Project