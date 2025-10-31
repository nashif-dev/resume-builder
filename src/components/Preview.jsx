import { Divider } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'

function Preview({ resumeDeatils }) {

  return (
    <div style={{ margin: "15px 30px" }} className='p-3 shadow rounded w-100 text-center'>
      <h1 className='my-2 text-4xl'>{resumeDeatils?.username}</h1>
      <h1 className='my-2 text-2xl'>{resumeDeatils?.jobTitle}</h1>
      <h6> <span className='mx-2'>{resumeDeatils?.location}</span> | <span className='mx-2'>{resumeDeatils?.email}</span> | <span className='mx-2'>{resumeDeatils?.mobile}</span></h6>
      <p className='my-2'>
        <a href={resumeDeatils?.github} target='_blank' className='mx-2'>GITHUB</a>|
        <a href={resumeDeatils?.linkdin} target='_blank' className='mx-2'>LINKDIN</a>|
        <a href={resumeDeatils?.portfolio} target='_blank' className='mx-2'>PORTFOLIO</a>
      </p>

      <Divider sx={{ fontSize: '30px' }}>summary</Divider>
      <p style={{ textAlign: 'justify' }}>{resumeDeatils?.summary}</p>

      <Divider sx={{ fontSize: '30px', marginBottom: '10px' }}>Education</Divider>
      <h5 className='text-[20px] mb-2'>{resumeDeatils?.course}</h5>
      <p><span className='mx-2'>{resumeDeatils?.college}</span> | <span className='mx-2'>{resumeDeatils?.university}</span> | <span className='mx-2'>{resumeDeatils?.passout}</span></p>

      <Divider sx={{ fontSize: '30px', marginBottom: '10px' }}>professional Experiance</Divider>
      <h5 className='text-[20px] mb-2'>{resumeDeatils?.jobType}</h5>
      <p><span className='mx-2'>{resumeDeatils?.companyName}</span> | <span className='mx-2'>{resumeDeatils?.companyLocation}</span> | <span className='mx-2'>{resumeDeatils?.duration}</span></p>

      <Divider sx={{ fontSize: '30px', marginBottom: '10px' }}>Skills</Divider>
      <div className="d-flex justify-content-center flex align-items-center flex-wrap m-3 ">
        {
          resumeDeatils?.userSkills?.map((item, index) => (
            <Button variant='contained' sx={{ m: 1 }}> {item} </Button>
          ))
        }
      </div>


    </div>
  )
}

export default Preview