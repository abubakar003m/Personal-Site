import React from 'react'
import {
  Box, Typography, Container, Grid, Card, CardContent, CardActions, Button
} from '@mui/material'
import './Styles.css'
import { ServiceData } from '../Data/DummyData.js'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <Box id="service">
      <Container>
        <Box className="sectionTitle" sx={{ mt: { xs: 10, md: 10 } }}>
          <Typography variant="h4" className='title name' fontWeight={600}>Services</Typography>
        </Box>
        <Grid container spacing={2} sx={{ mt: { xs: 6, md: 8 } }}>
          {
            ServiceData.map((data) => {
              return (
                <Grid item xs={12} sm={6} md={3} sx={{ mt: { xs: 0, md: `${data.mt}` } }}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: data.x },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <Card variant="outlined">
                      <CardContent>
                        <Box textAlign='center' display='flex' flexDirection='column' alignItems='center'>
                          <Box sx={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", borderRadius: '30px', p: 1.7, width: '50px', height: '50px' }}>
                            <data.icon color='#ffffff' />
                          </Box>
                          <Typography variant="body1" color="initial" fontWeight={600} mt={2}>{data.title}</Typography>
                          <Typography variant="body2" color="initial" mt={2}>{data.desc}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default Services