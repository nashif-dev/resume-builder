import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";

const steps = ['Basic Information', 'Contact Details', 'Educational Deatils', 'Work Experiance', 'Skills & Certifications', 'Review & submit'];

function UserInputs() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const skillSuggest=['NODE-JS','REACT','PYTHON','ANGULAR','','','','']

  const isStepOptional = (step) => {
    return step === 1;
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
                    <TextField id='userFullname' label='Full Name' variant='standard' />
                    <TextField id='userJob' label='job-title' variant='standard' />
                    <TextField id='userLocation' label='location' variant='standard' />
                </div>
            </div>
        )
        case 1 : return(
          <div>
            <h1 className='text-[30px]'>Contact Details</h1>
            <div className="row p-3">
                  <TextField id='userEmail' label='E-Mail' variant='standard' />
                  <TextField id='userPhone' label='Phone Number' variant='standard' />
                  <TextField id='userGithub' label='Github Profile Link' variant='standard' />
                  <TextField id='userLinkdin' label='LinkdIn Profile Link' variant='standard' />
                  <TextField id='userPortfolio' label='Portfolio Link' variant='standard' />

            </div>
          </div>            
        )
        case 2 : return(
          <div>
            <h1 className='text-[30px]'>Educational Details</h1>
            <div className="row p-3">
                  <TextField id='userFullname' label='E-Mail' variant='standard' />
                  <TextField id='userFullname' label='Phone Number' variant='standard' />
                  <TextField id='userFullname' label='Github Profile Link' variant='standard' />
                  <TextField id='userFullname' label='LinkdIn Profile Link' variant='standard' />
                  <TextField id='userFullname' label='Portfolio Link' variant='standard' />

            </div>
          </div>  
        )
        case 3 : return(
          <div>
            <h1 className='text-[30px]'>Professional Details</h1>
            <div className="row p-3">
                  <TextField id='userdesig' label='Job or Intership' variant='standard' />
                  <TextField id='userCompany' label='Company Name' variant='standard' />
                  <TextField id='userFullname' label='COmpany Location' variant='standard' />
                  <TextField id='userFullname' label='Duration' variant='standard' />
            </div>
          </div>  
        )
        case 4 : return(
          <div>
            <h1 className='text-[30px]'>Skills</h1>
            <div className="d-flex justify-center-center flex-wrap my-3 ">
              <TextField id='outline-basic' label='Skill'></TextField>
              <Button type='button'>ADD</Button>
            </div>

            <h1 className='text-[30px]'>Suggestions</h1>
            <div className="d-flex justify-center-center flex-wrap my-3 ">
              {
                skillSuggest.map((item,index)=>(
                  <Button key={index} varient='outlined' className=''>{item}</Button>
                ))
              }
            </div>

            <h1 className='text-[30px]'>Skills</h1>
            <div className="d-flex justify-content-center flex-wrap m-3 ">
              <Button variant='contained'> REACT <FaXmark className='ml-2 '/></Button>
            </div>
          </div>       
        )
        case 5 : return(
            <div>
              <h1 className='text-[30px]'>Summary</h1>
              <div className="row p-3">
                <TextField id='userSummary' variant='standerd' label='write a short nsummary of yourself' multiline rows={4} defaultValue="ff "/>
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
          <box>
            {renderSteps(activeStep)}
          </box>
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