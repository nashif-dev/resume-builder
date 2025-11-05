import CommonAPI from "./CommonAPI";
import ServerURL from "./ServerURL";

//add resume api
export const addResumeAPI=async(resume)=>{
    return await CommonAPI(`${ServerURL}/resumes`,"POST",resume)
}