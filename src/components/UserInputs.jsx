import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { duration, TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";
import { Await, useNavigate } from 'react-router-dom';
import { addResumeAPI } from '../services/allAPI';

const steps = ['Basic Information', 'Contact Details', 'Educational Deatils', 'Work Experiance', 'Skills & Certifications', 'Review & submit'];


function UserInputs({resumeDetails,setResumeDetails}) {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const skillSuggest=['NODE-JS','REACT','PYTHON','ANGULAR','BOOTSTRAP','TAILWIND','EXPRESS-JS','MONGO-DB']


    console.log(resumeDetails)

    const skillRef=React.useRef()
    //to navigaste
    const navigate=useNavigate()

    const addSkill=(skill)=>{
      if(resumeDetails.userSkills.includes(skill)){
        alert("The given skill already added, Please add another!")
      }else{
        setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
        skillRef.current.value=""
      }
    }

    const removeSkill=(skill)=>{
      setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
    }

  const isStepOptional = (step) => {
    return step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderSteps=(stepCount)=>{
    switch(stepCount){
        case 0 : return(
            <div>
                <h1 className='text-[30px]'>Personal Details</h1>
                <div className="row p-3">
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id='userFullname' label='Full Name' variant='standard' />
                    <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id='userJob' label='job-title' variant='standard' />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id='userLocation' label='location' variant='standard' />
                </div>
            </div>
        )
        case 1 : return(
          <div>
            <h1 className='text-[30px]'>Contact Details</h1>
            <div className="row p-3">
                  <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id='userEmail' label='E-Mail' variant='standard' />
                  <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id='userPhone' label='Phone Number' variant='standard' />
                  <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id='userGithub' label='Github Profile Link' variant='standard' />
                  <TextField value={resumeDetails.linkdin} onChange={e=>setResumeDetails({...resumeDetails,linkdin:e.target.value})} id='userLinkdin' label='LinkdIn Profile Link' variant='standard' />
                  <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id='userPortfolio' label='Portfolio Link' variant='standard' />

            </div>
          </div>            
        )
        case 2 : return(
          <div>
            <h1 className='text-[30px]'>Educational Details</h1>
            <div className="row p-3">
                  <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id='userCourse' label='course Name' variant='standard' />
                  <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id='userCollege' label='College Name' variant='standard' />
                  <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id='userUni' label='University' variant='standard' />
                  <TextField value={resumeDetails.passout} onChange={e=>setResumeDetails({...resumeDetails,passout:e.target.value})} id='userPass' label='Passout Year' variant='standard' />

            </div>
          </div>  
        )
        case 3 : return(
          <div>
            <h1 className='text-[30px]'>Professional Details</h1>
            <div className="row p-3">
                  <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id='userdesig' label='Job or Intership' variant='standard' />
                  <TextField value={resumeDetails.companyName} onChange={e=>setResumeDetails({...resumeDetails,companyName:e.target.value})} id='userCompany' label='Company Name' variant='standard' />
                  <TextField value={resumeDetails.companyLocation} onChange={e=>setResumeDetails({...resumeDetails,companyLocation:e.target.value})} id='companyLocation' label='Company Location' variant='standard' />
                  <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id='jobDuration' label='Duration' variant='standard' />
            </div>
          </div>  
        )
        case 4 : return(
          <div>
            <h1 className='text-[30px]'>Skills</h1>
            <div className="d-flex justify-center-center flex-wrap my-3 ">
              <TextField inputRef={skillRef} id='outline-basic' label='Add Skills'></TextField>
              <Button onClick={()=>addSkill(skillRef.current.value)} variant='text' type='button'>ADD</Button>
            </div>

            <h1 className='text-[30px]'>Suggestions</h1>
            <div className="d-flex justify-center-center flex-wrap my-3 ">
              {
                skillSuggest.map((item,index)=>(
                  <Button key={index} onClick={()=>addSkill(item)} variant="outlined" className='m-2'>{item}</Button>
                ))
              }
            </div>
              <h1 className='text-[30px]'>Added Skills</h1>
              <div className="d-flex justify-content-center flex-wrap m-3 ">
                {
                  resumeDetails.userSkills?.length>0
                    ?
                    resumeDetails.userSkills.map((skill,index)=>(
                      <Button key={index} variant='contained' className='m-2'> {skill} <FaXmark onClick={()=>removeSkill(skill)} className='ms-2'/></Button>
                    ))
                    :
                    <p className='fw-bolder'>No Skills are added yet!</p>
                }
              </div>
            </div>       
        )
        case 5 : return(
            <div>
              <h1 className='text-[30px]'>Summary</h1>
              <div className="row p-3">
                <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id='userSummary' variant='standard' label='write a short summary of yourself' multiline rows={4} defaultValue="MERN Stack Developer with strong skills in MongoDB, Express.js, React, and Node.js. Experienced in building responsive, user-friendly web apps with clean code and modern UI using Tailwind CSS and Bootstrap. Passionate about great UX, debugging efficiently, and delivering scalable, professional solutions that align with business goals"/>
              </div>
            
            </div>
        )

    }
  }
  const handleAddResume=async()=>{
    const{username,jobTitle,location}=resumeDetails
    if(!username && !jobTitle && !location){
      alert("Please fill the form completely")
    }else{
    console.log('API call');
    try {
      const results=await addResumeAPI(resumeDetails)
      console.log(results);
      if(results.status==201){
        alert("resume added succesfully")
        const{id}=results.data
        //to redirect to view page
        navigate(`/resume/${id}/view`)
      }
    } catch (error) {
      console.log(error);
    }
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render steps */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ?
             <Button onClick={handleAddResume}> finish </Button>
             : 
            <Button onClick={handleNext}> Next </Button>
            }

            
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInputs