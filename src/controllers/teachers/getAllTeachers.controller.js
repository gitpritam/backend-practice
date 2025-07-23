

export const getAllTeachersController = async(req,res) => {
    try{
    return res.status(200).json({
        success : true,
        messsage : "teachers data found succesfully",
    });
}
    catch(error){
        return res.status(500).json({success: false, message : "internal server error"

          });

    }
    
};