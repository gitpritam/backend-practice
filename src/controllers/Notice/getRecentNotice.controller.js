export const getRecentNoticecontroller = async(req,res)=>{
    try{
        const{Year} = req.params;
        console.log(Year);
       if(!Year){
        return res.status(400).json({
            success: false, message: "Please enter the year"
        });
       } 
        return res.status(200).json({
        success : true,message : "Notice found succesfully"
        });
    }
    catch(error)
    {
        return res.status(500).json({
            success : false, message : "Internal server error"
        });
    }

    };
    export default getRecentNoticecontroller;

