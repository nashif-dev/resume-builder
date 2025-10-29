import { Box, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div className='text-center'>
      <h1 className='text-4xl m-4'>Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-30px'}}> Back</Link>
      <Box component='section' className='container-fluid'>
        <div className="row">
          <div className="col-md-4 mx-4">
            <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
              <div className="d-flex justify-content-between align-items-center mx-4 mb-4" >
                <h6 className='text-[20px]'>review at: date & time</h6>
                <button className='btn text-[red] fs-4' style={{margin:'0px'}}><MdDelete /></button>
              </div>
              <div className="p-3 rounded border">
                <img src="/resuma1.png" alt="Not Found" />
              </div>
            </Paper>
          </div>
        </div>
      </Box>  



    </div>
  )
}

export default History