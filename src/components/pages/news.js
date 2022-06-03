import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function News() {
  const [news,setNews] = useState([])
  const navigate = useNavigate()

  const getNews = ()=>{
    let api = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-03&sortBy=publishedAt&apiKey=12b88a83364447829119e6f980da62dc"
  axios.get(api)
  .then((success)=>{
    setNews(success.data.articles)
    console.log(news)
  })
  .catch((err)=>{
    console.log(err)
  })  
  
  }
  useEffect(() => {
      getNews();
   
  }, [])
  console.log(news)
  const clickTo = (item)=>{
   navigate("/headlines",{
     state: item 
   })
   console.log(item)
  }; 
  


  return (<>
  <Box>
    <Typography>News</Typography>
    {news.map((e,i)=>(
      <>
      <Box onClick={()=>clickTo(e)} className="box" sx={{padding:3}}>

      <Box sx={{display:"flex",justifyContent:"start",marginBottom:4}}>
        <img width={"300px"} src={e.urlToImage}/>
      <Typography variant='h3'>{e.title}</Typography>
      </Box>
    <Typography variant='h6'>{e.content}</Typography>
      </Box>
     </>
    ))}
  </Box>
  </>
    )
}

export default News