import { Divider } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'

function Preview() {
  return (
    <div style={{margin:"15px 30px"}} className='p-3 shadow rounded w-100 text-center'>
      <h1 className='my-2'>Name</h1>
      <h1 className='my-2'>Job title</h1>
      <h6> <span className='mx-2'>location</span> | <span className='mx-2'>E Mail</span> | <span className='mx-2'>mobile</span></h6>
      <p className='my-2'>
        <a href="" target='_blank' className='mx-2'>GITHUB</a>|
        <a href="" target='_blank' className='mx-2'>LINKDIN</a>|
        <a href="" target='_blank' className='mx-2'>PORTFOLIO</a>
      </p>

      <Divider sx={{fontSize:'30px'}}>summary</Divider>
      <p style={{textAlign:'justify'}}>MERN Stack Developer with strong skills in MongoDB, Express.js, React, and Node.js. Experienced in building responsive, user-friendly web apps with clean code and modern UI using Tailwind CSS and Bootstrap. Passionate about great UX, debugging efficiently, and delivering scalable, professional solutions that align with business goals</p>

      <Divider sx={{fontSize:'30px',marginBottom:'10px'}}>education</Divider>
      <h5 className='text-[20px] mb-2'>Course name</h5>
      <p><span className='mx-2'>college</span> | <span className='mx-2'>university</span> | <span className='mx-2'>passout year</span></p>

      <Divider sx={{fontSize:'30px',marginBottom:'10px'}}>professional Experiance</Divider>
      <h5 className='text-[20px] mb-2'>job/internship</h5>
      <p><span className='mx-2'>compant name</span> | <span className='mx-2'>company location</span> | <span className='mx-2'>Duration</span></p>

      <Divider sx={{fontSize:'30px',marginBottom:'10px'}}>Skills</Divider>
      <div className="d-flex justify-content-center flex align-items-center flex-wrap m-3 ">
        <Button variant='contained'> REACT </Button>
      </div>
      

    </div>
  )
}

export default Preview