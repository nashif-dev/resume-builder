import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI';

function History() {  

  const [allHistory,setAllHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])
  const getHistory=async()=>{
    const result=await getHistoryAPI()
    if(result.status==200){
      setAllHistory(result.data)
    }
  }
  const deleteHistory=async(id)=>{
    await removeHistoryAPI(id)
    getHistory()
  }
  return (
    <div className='text-center'>
      <h1 className='text-4xl m-4'>Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-30px'}}> Back</Link>
      <Box component='section' className='container-fluid'>
        <div className="row">
          {
            allHistory.length>0?
            allHistory?.map(item=>(
            <div key={item?.id} className="col-md-4 mx-4">
            <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
              <div className="d-flex justify-content-between align-items-center mx-4 mb-4" >
                <h6 className='text-[20px]'>review at: {item?.timeStamp} </h6>
                <button onClick={()=>deleteHistory(item?.id)} className='btn text-[red] fs-4' style={{margin:'0px'}}><MdDelete /></button>
              </div>
              <div className="p-3 rounded border">
                <img src={item?.resumeImg} alt="Not Found" />
              </div>
            </Paper>
          </div>
            ))
            :
            <p className='text-xl my-5'>No resumes are downloded yet!</p>
          }
        </div>
      </Box>  
    </div>
  )
}

export default History