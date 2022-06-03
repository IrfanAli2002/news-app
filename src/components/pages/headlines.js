import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Headlines() {

  const location = useLocation()
  const [headlines,setHeadlines] = useState([])
  useEffect(()=>{
    console.log(location.state)
    setHeadlines(location.state) 

  },[])

  return (
    <>
      <>
      <Box  className="box" sx={{padding:3}}>

      <Box sx={{display:"flex",justifyContent:"start",marginBottom:4}}>
        <img width={"300px"} src={headlines.urlToImage}/>
      <Typography variant='h3'>{headlines.title}</Typography>
      </Box>
    <Typography variant='h6'>{headlines.content}</Typography>
      </Box>
     </>
    
    </>
  )
}

export default Headlines