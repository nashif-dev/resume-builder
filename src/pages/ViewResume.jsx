import React, { useEffect, useState } from 'react'
import Preview  from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { MdFileDownload } from "react-icons/md";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Edit from '../components/Edit';


function ViewResume() {
  const {id}=useParams()
  console.log(id); 
  const [resume,setResume]=useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails= async ()=>{
    const result=await getResumeAPI(id)
    console.log(result);
    if (result.status==200){
      setResume(result.data)
    }
    
  }


  return (
    <div>
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="flex justify-center gap-4 ">
                    <Link to={'/resume'} className=' text-4xl text-[red]'> <IoArrowBackCircle /></Link>
                    <button className=' text-3xl text-[blue]'> <MdFileDownload /></button>
                    <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                    <Link to={'/history'} className=' text-4xl text-[green]'> <IoArrowForwardCircleSharp />  </Link>
                  </div>
                  <div> <Preview resumeDetails={resume}/> </div> 
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </div>
  )
}

export default ViewResume