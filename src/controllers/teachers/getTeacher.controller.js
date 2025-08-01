export const getTeachercontroller = async(req,res)=>{
    try{
        const{teacher_id} = req.params;
        console.log(teacher_id);
       if(!teacher_id){
        return res.status(400).json({
            success: false, message: "Please enter the id"
        });
       } 
        return res.status(200).json({
        success : true,message : "Teacher data found succesfully"
        });
    }
    catch(error)
    {
        return res.status(500).json({
            success : false, message : "Internal server error"
        });
    }

    };
    export default getTeachercontroller;
