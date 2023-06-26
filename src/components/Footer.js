import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from './assets/physical-wellbeing.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' pt='24px'>
        <img src={Logo} alt='logo' width='100px' height='40px'/>
        <Typography variant='h5' pb='40px' mt='30px'>
          Made by Shubhanshi Jain
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer