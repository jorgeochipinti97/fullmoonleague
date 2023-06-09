import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export const FullScreenLoading = () => {
  return (
    <Box 
        display='flex' 
        flexDirection='column'
        justifyContent='center' 
        alignItems='center' 
        height='calc(100vh - 200px)'
    >
        <Typography sx={{ mb: 3, color:'black' }} variant="h2" fontWeight={ 200 } fontSize={ 20 }>¡Por favor espere! Muchas gracias.</Typography>
        <CircularProgress thickness={ 2 } />
    </Box>
  )
}