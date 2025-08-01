

export const getAllNoticeController = async (req, res) => {
  try{
    return res.status(200).json({
        success : true,
        messsage : "Notice found succesfully",
    });
}
    catch(error){
        return res.status(500).json({success: false, message : "internal server error"

          });

    }
    
};
