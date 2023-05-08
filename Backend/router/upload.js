const express= require("express");
const router= express.Router();
const DetailsSchema = require("../models/Details");

router.post("/upload",uploadZipFile);

async function uploadZipFile(req, res){
    try{
        const {Fullname,Subname,Modeldes,Paramdes,email,Giturl,Contact,Linkurl} = req.body;
        const details = new DetailsSchema({
            FullName:Fullname,
            SubmissionName:Subname,
            ModelDescription:Modeldes,
            ParameterDescription:Paramdes,
            Email:email,
            GithubUrl:Giturl,
            ContactNumber:Contact,
            LinkedinUrl:Linkurl
        });
        await details.save();
       return res.send({details:details});
    }
    catch(err){
        console.error(err);
        return res.send({msg:"Unable to process the Request"});
    }
   
}

module.exports = router;
