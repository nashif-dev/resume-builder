import axios from "axios";

const CommonAPI=async(url,httpMethod,reqbody)=>{
    const requestConfig={
        url,
        method:httpMethod,
        data:reqbody
    }
    //api call
    return await axios(requestConfig).then(res=>res).catch(err=>err)
}
export default CommonAPI