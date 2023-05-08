const mongoose=require('mongoose');

const detailsSchema = new mongoose.Schema({
    FullName:{
        type:String,
    },
    SubmissionName:{
        type:String,
    },
    ModelDescription:{
        type:String,
    },
    ParameterDescription:{
        type:String,
    },
    Email:{
        type:String,
    },
    GithubUrl:{
        type:String,
    },
    ContactNumber:{
        type:String,
    },
    LinkedinUrl:{
        type:String,
    }
})

const DetailsSchema = mongoose.model('DETAILS',detailsSchema);
module.exports =DetailsSchema;
