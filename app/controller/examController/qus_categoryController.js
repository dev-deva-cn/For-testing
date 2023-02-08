const {getAllgetAll_Qus_categories}= require('../../model/examModel/qus_categorieModel.js')

const GetAll_Qus_categories = (req,res)=>{
    getAllgetAll_Qus_categories((err,result)=>{
        if(err){
            console.log(err);
            return res.status(5000).json({
                data:'error accured'
            });
        }else{
            res.status(200).json({
                error:"false",
                data:result
            })
        }
    })
}
module.exports={GetAll_Qus_categories}