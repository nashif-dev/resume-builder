import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { CgOverflow } from 'react-icons/cg';
import { FaXmark } from "react-icons/fa6";




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: "80vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "auto"
};

function Edit({ resumeDetails, setResumeDetails }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const skillRef = React.useRef()

    const addSkill = (skill) => {
    if (resumeDetails.userSkills.includes(skill)) {
      alert("The given skill already added, Please add another!")
    } else {
      setResumeDetails({ ...resumeDetails, userSkills: [...resumeDetails.userSkills, skill] })
      skillRef.current.value = ""
    }
  }

  const removeSkill = (skill) => {
    setResumeDetails({ ...resumeDetails, userSkills: resumeDetails.userSkills.filter(item => item != skill) })
  }
    

    return (
        <div>
            <button onClick={handleOpen} className='text-3xl text-[blue]'> <FaRegEdit /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Personal Details */}
                        <div>
                            <h1 className='text-[30px]'>Personal Details</h1>
                            <div className="row p-3">
                                <TextField value={resumeDetails.username} onChange={e => setResumeDetails({ ...resumeDetails, username: e.target.value })} id='userFullname' label='Full Name' variant='standard' />
                                <TextField value={resumeDetails.jobTitle} onChange={e => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} id='userJob' label='job-title' variant='standard' />
                                <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id='userLocation' label='location' variant='standard' />
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div>
                            <h1 className='text-[30px]'>Contact Details</h1>
                            <div className="row p-3">
                                <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} id='userEmail' label='E-Mail' variant='standard' />
                                <TextField value={resumeDetails.mobile} onChange={e => setResumeDetails({ ...resumeDetails, mobile: e.target.value })} id='userPhone' label='Phone Number' variant='standard' />
                                <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} id='userGithub' label='Github Profile Link' variant='standard' />
                                <TextField value={resumeDetails.linkdin} onChange={e => setResumeDetails({ ...resumeDetails, linkdin: e.target.value })} id='userLinkdin' label='LinkdIn Profile Link' variant='standard' />
                                <TextField value={resumeDetails.portfolio} onChange={e => setResumeDetails({ ...resumeDetails, portfolio: e.target.value })} id='userPortfolio' label='Portfolio Link' variant='standard' />
                            </div>
                        </div>

                        {/* Educational Details */}
                        <div>
                            <h1 className='text-[30px]'>Educational Details</h1>
                            <div className="row p-3">
                                <TextField value={resumeDetails.course} onChange={e => setResumeDetails({ ...resumeDetails, course: e.target.value })} id='userCourse' label='course Name' variant='standard' />
                                <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} id='userCollege' label='College Name' variant='standard' />
                                <TextField value={resumeDetails.university} onChange={e => setResumeDetails({ ...resumeDetails, university: e.target.value })} id='userUni' label='University' variant='standard' />
                                <TextField value={resumeDetails.passout} onChange={e => setResumeDetails({ ...resumeDetails, passout: e.target.value })} id='userPass' label='Passout Year' variant='standard' />
                            </div>
                        </div>

                        {/* Professional Details */}
                        <div>
                            <h1 className='text-[30px]'>Professional Details</h1>
                            <div className="row p-3">
                                <TextField value={resumeDetails.jobType} onChange={e => setResumeDetails({ ...resumeDetails, jobType: e.target.value })} id='userdesig' label='Job or Intership' variant='standard' />
                                <TextField value={resumeDetails.companyName} onChange={e => setResumeDetails({ ...resumeDetails, companyName: e.target.value })} id='userCompany' label='Company Name' variant='standard' />
                                <TextField value={resumeDetails.companyLocation} onChange={e => setResumeDetails({ ...resumeDetails, companyLocation: e.target.value })} id='companyLocation' label='Company Location' variant='standard' />
                                <TextField value={resumeDetails.duration} onChange={e => setResumeDetails({ ...resumeDetails, duration: e.target.value })} id='jobDuration' label='Duration' variant='standard' />
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h1 className='text-[30px]'>Skills</h1>
                            <div className="d-flex justify-center-center flex-wrap my-3 ">
                                <TextField inputRef={skillRef} id='outline-basic' label='Add Skills'></TextField>
                                <Button onClick={() => addSkill(skillRef.current.value)} variant='text' type='button'>ADD</Button>
                            </div>

                            
                            <h1 className='text-[30px]'>Added Skills</h1>
                            <div className="d-flex justify-content-center flex-wrap m-3 ">
                                {
                                    resumeDetails.userSkills?.length > 0
                                        ?
                                        resumeDetails.userSkills.map((skill, index) => (
                                            <Button key={index} variant='contained' className='m-2'> {skill} <FaXmark onClick={() => removeSkill(skill)} className='ms-2' /></Button>
                                        ))
                                        :
                                        <p className='fw-bolder'>No Skills are added yet!</p>
                                }
                            </div>
                        </div>
                        <div className="flex items-center justify-center ">
                            <button className='text-center border rounded bg-[green] text-[white] font-bold text-3xl px-3 py-1'>Update</button>
                        </div>

                    </Box>
                </Box>
            </Modal>

        </div>
    )
}

export default Edit