import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function Form() {

    const [resumeDeatils,setResumeDetails]=React.useState({
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
      console.log(resumeDeatils)
  
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
           <UserInputs resumeDeatils={resumeDeatils}  setResumeDetails={setResumeDetails}/> 
        </div>
        <div className="col-lg-6">
          {
            resumeDeatils.username &&
            <Preview resumeDeatils={resumeDeatils} />
          }
        </div>

      </div>
    </div>
  )
}

export default Form