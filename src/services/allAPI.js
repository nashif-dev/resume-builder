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