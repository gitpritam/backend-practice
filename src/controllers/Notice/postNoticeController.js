export const postNoticeController = async(req,res) =>{
    try {
        const { title,noticce_id,description, year, posted_by }= req.body;
        if (!title || !noticce_id || !description || !year || !posted_by){
            return res.status(400).json({
                success : false, message: "All fields are mandatory"

            });

        }
        const payload={
           
        };
        return res.status(201).json({
            success : true, message: "Notice posted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false, message:"Internal server error"
        }); 
    }
};