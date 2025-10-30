import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { duration, TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";

const steps = ['Basic Information', 'Contact Details', 'Educational Deatils', 'Work Experiance', 'Skills & Certifications', 'Review & submit'];


function UserInputs() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const skillSuggest=['NODE-JS','REACT','PYTHON','ANGULAR','BOOTSTRAP','TAILWIND','EXPRESS-JS','MONGO-DB']

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

    const skillRef=React.useRef()

    const addSkill=(skill)=>{
      if(resumeDeatils.userSkills.includes(skill)){
        alert("The given skill already added, Please add another!")
      }else{
        setResumeDetails({...resumeDeatils,userSkills:[...resumeDeatils.userSkills,skill]})
        skillRef.current.value=""
      }
    }

    const removeSkill=(skill)=>{
      setResumeDetails({...resumeDeatils,userSkills:resumeDeatils.userSkills.filter(item=>item!=skill)})
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
                    <TextField value={resumeDeatils.username} onChange={e=>setResumeDetails({...resumeDeatils,username:e.target.value})} id='userFullname' label='Full Name' variant='standard' />
                    <TextField value={resumeDeatils.jobTitle} onChange={e=>setResumeDetails({...resumeDeatils,jobTitle:e.target.value})} id='userJob' label='job-title' variant='standard' />
                    <TextField value={resumeDeatils.location} onChange={e=>setResumeDetails({...resumeDeatils,location:e.target.value})} id='userLocation' label='location' variant='standard' />
                </div>
            </div>
        )
        case 1 : return(
          <div>
            <h1 className='text-[30px]'>Contact Details</h1>
            <div className="row p-3">
                  <TextField value={resumeDeatils.email} onChange={e=>setResumeDetails({...resumeDeatils,email:e.target.value})} id='userEmail' label='E-Mail' variant='standard' />
                  <TextField value={resumeDeatils.mobile} onChange={e=>setResumeDetails({...resumeDeatils,mobile:e.target.value})} id='userPhone' label='Phone Number' variant='standard' />
                  <TextField value={resumeDeatils.github} onChange={e=>setResumeDetails({...resumeDeatils,github:e.target.value})} id='userGithub' label='Github Profile Link' variant='standard' />
                  <TextField value={resumeDeatils.linkdin} onChange={e=>setResumeDetails({...resumeDeatils,linkdin:e.target.value})} id='userLinkdin' label='LinkdIn Profile Link' variant='standard' />
                  <TextField value={resumeDeatils.portfolio} onChange={e=>setResumeDetails({...resumeDeatils,portfolio:e.target.value})} id='userPortfolio' label='Portfolio Link' variant='standard' />

            </div>
          </div>            
        )
        case 2 : return(
          <div>
            <h1 className='text-[30px]'>Educational Details</h1>
            <div className="row p-3">
                  <TextField value={resumeDeatils.course} onChange={e=>setResumeDetails({...resumeDeatils,course:e.target.value})} id='userCourse' label='course Name' variant='standard' />
                  <TextField value={resumeDeatils.college} onChange={e=>setResumeDetails({...resumeDeatils,college:e.target.value})} id='userCollege' label='College Name' variant='standard' />
                  <TextField value={resumeDeatils.university} onChange={e=>setResumeDetails({...resumeDeatils,university:e.target.value})} id='userUni' label='University' variant='standard' />
                  <TextField value={resumeDeatils.passout} onChange={e=>setResumeDetails({...resumeDeatils,passout:e.target.value})} id='userPass' label='Passout Year' variant='standard' />

            </div>
          </div>  
        )
        case 3 : return(
          <div>
            <h1 className='text-[30px]'>Professional Details</h1>
            <div className="row p-3">
                  <TextField value={resumeDeatils.jobType} onChange={e=>setResumeDetails({...resumeDeatils,jobType:e.target.value})} id='userdesig' label='Job or Intership' variant='standard' />
                  <TextField value={resumeDeatils.companyName} onChange={e=>setResumeDetails({...resumeDeatils,companyName:e.target.value})} id='userCompany' label='Company Name' variant='standard' />
                  <TextField value={resumeDeatils.companyLocation} onChange={e=>setResumeDetails({...resumeDeatils,companyLocation:e.target.value})} id='companyLocation' label='COmpany Location' variant='standard' />
                  <TextField value={resumeDeatils.duration} onChange={e=>setResumeDetails({...resumeDeatils,duration:e.target.value})} id='jobDuration' label='Duration' variant='standard' />
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
                  resumeDeatils.userSkills?.length>0
                    ?
                    resumeDeatils.userSkills.map((skill,index)=>(
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
                <TextField onChange={e=>setResumeDetails({...resumeDeatils,summary:e.target.value})} id='userSummary' variant='standard' label='write a short summary of yourself' multiline rows={4} defaultValue="MERN Stack Developer with strong skills in MongoDB, Express.js, React, and Node.js. Experienced in building responsive, user-friendly web apps with clean code and modern UI using Tailwind CSS and Bootstrap. Passionate about great UX, debugging efficiently, and delivering scalable, professional solutions that align with business goals"/>
              </div>
            
            </div>
        )

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
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInputs