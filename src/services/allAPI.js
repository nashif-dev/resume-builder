import CommonAPI from "./CommonAPI";
import ServerURL from "./ServerURL";

//add resume api-POST
export const addResumeAPI=async(resume)=>{
    return await CommonAPI(`${ServerURL}/resumes`,"POST",resume)
}
//get resume api-GET
export const getResumeAPI=async (id)=>{
    return await CommonAPI(`${ServerURL}/resumes/${id}`,"GET")
}   
//update resume api-PUT
export const updateResumeAPI=async (id,resume)=>{
    return await CommonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}
//add history api-POST
export const addHistoryAPI=async(history)=>{
    return await CommonAPI(`${ServerURL}/history`,"POST",history)
}
//get history api-GET
export const getHistoryAPI=async ()=>{
    return await CommonAPI(`${ServerURL}/history`,"GET",{})
}
//remove history api-GET
export const removeHistoryAPI=async (id)=>{
    return await CommonAPI(`${ServerURL}/history/${id}`,"DELETE",{})
}

