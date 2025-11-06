import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function Form() {

    const [resumeDetails,setResumeDetails]=React.useState({
    username:"",
    jobTitle:"",
    location:"",
    email:"",
    mobile:"",
    github:"",
    linkdin:"",
    portfolio:"",
    course:"",
    college:"",
    university:"",
    passout:"",
    jobType:"",
    companyName:"",
    companyLocation:"",
    duration:"",
    userSkills:[],
    summary:"",
  
    })
      console.log(resumeDetails)
  
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
           <UserInputs resumeDetails={resumeDetails}  setResumeDetails={setResumeDetails}/> 
        </div>
        <div className="col-lg-6">
          {
            resumeDetails.username &&
            <Preview resumeDetails={resumeDetails} />
          }
        </div>

      </div>
    </div>
  )
}

export default Form