import { Divider } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'

function Preview({ resumeDetails }) {

  return (
    <div style={{ margin: "15px 30px" }} className='p-3 shadow rounded w-100 text-center'>
      <h1 className='my-2 text-4xl'>{resumeDetails?.username}</h1>
      <h1 className='my-2 text-2xl'>{resumeDetails?.jobTitle}</h1>
      <h6> <span className='mx-2'>{resumeDetails?.location}</span> | <span className='mx-2'>{resumeDetails?.email}</span> | <span className='mx-2'>{resumeDetails?.mobile}</span></h6>
      <p className='my-2'>
        <a href={resumeDetails?.github} target='_blank' className='mx-2'>GITHUB</a>|
        <a href={resumeDetails?.linkdin} target='_blank' className='mx-2'>LINKDIN</a>|
        <a href={resumeDetails?.portfolio} target='_blank' className='mx-2'>PORTFOLIO</a>
      </p>

      <Divider sx={{ fontSize: '30px' }}>summary</Divider>
      <p style={{ textAlign: 'justify' }}>{resumeDetails?.summary}</p>

      <Divider sx={{ fontSize: '30px', marginBottom: '10px' }}>Education</Divider>
      <h5 className='text-[20px] mb-2'>{resumeDetails?.course}</h5>
      <p><span className='mx-2'>{resumeDetails?.college}</span> | <span className='mx-2'>{resumeDetails?.university}</span> | <span className='mx-2'>{resumeDetails?.passout}</span></p>

      <Divider sx={{ fontSize: '30px', marginBottom: '10px' }}>professional Experiance</Divider>
      <h5 className='text-[20px] mb-2'>{resumeDetails?.jobType}</h5>
      <p><span className='mx-2'>{resumeDetails?.companyName}</span> | <span className='mx-2'>{resumeDetails?.companyLocation}</span> | <span className='mx-2'>{resumeDetails?.duration}</span></p>

      <Divider sx={{ fontSize: '30px', marginBottom: '10px' }}>Skills</Divider>
      <div className="d-flex justify-content-center flex align-items-center flex-wrap m-3 ">
        {
          resumeDetails?.userSkills?.map((item, index) => (
            <Button variant='contained' sx={{ m: 1 }} key={index}> {item} </Button>
          ))
        }
      </div>


    </div>
  )
}

export default Preview