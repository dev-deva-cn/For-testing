const pool = require('../../config/db.config');
const {}= require('../../config/db.config');

const getAllgetAll_Qus_categories = (data)=>{
    pool.query ("select * FROM assessment_exam_questions_categories",(err,result)=>{
        if(err){
            return data(err);
        }else{
            return data(null,result.rows)
        }
    })
}
module.exports={getAllgetAll_Qus_categories}