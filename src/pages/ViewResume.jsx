import React, { useEffect, useState } from 'react'
import Preview  from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { MdFileDownload } from "react-icons/md";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Edit from '../components/Edit';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


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
    const handleDownloadResume= async ()=>{
      //create pdf document
      const doc =new jsPDF()
      const preview =document.getElementById("preview")
      //screenshot preview
      const canvas= await html2canvas(preview,{scale:2})
      // console.log(canvas);
      //covert canvas to image
      const resumeImg= canvas.toDataURL('image/png')
      // console.log(resumeImg);
      //add screenshot to pdf
      const pageWidth=doc.internal.pageSize.getWidth()
      const imgWidth=pageWidth-20
      const imgHieght=doc.internal.pageSize.getHeight()
      // const imgHieght=canvas.hieght*imgWidth/canvas.width

      doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHieght)
      //download pdf
      doc.save(`${resume.username}-resume.pdf`)

      const localTimeStamp=new Date()
  }


  return (
    <div>
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="flex justify-center gap-4 ">
                    <Link to={'/resume'} className=' text-4xl text-[red]'> <IoArrowBackCircle /></Link>
                    <button onClick={handleDownloadResume} className=' text-3xl text-[blue]'> <MdFileDownload /></button>
                    <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                    <Link to={'/history'} className=' text-4xl text-[green]'> <IoArrowForwardCircleSharp />  </Link>
                  </div>
                  <div id='preview'> <Preview resumeDetails={resume}/> </div> 
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </div>
  )
}

export default ViewResume