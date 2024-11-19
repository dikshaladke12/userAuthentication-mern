import { userRegister, getUserdetails } from "../contoller/UserController";
import { helperUpload } from "../helper/UploadImage";

export default (router)=> {
    // console.log("ggggggg")
    router.post('/user/register',helperUpload, userRegister)
    router.get('/user/getDetails/:id', getUserdetails)
    
    return router;
}