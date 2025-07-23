export const postTeacherController = async(req,res) =>{
    try {
        const { name, teacher_id,dob,qualification}= req.body;
        if (!name || !teacher_id || !dob || !qualification){
            return res.status(400).json({
                success : false, message: "All fields are mandatory"

            });

        }
        const payload={
            name,
            teacher_id,
            dob,
            qualification,
        };
        return res.status(201).json({
            success : true, message: "Teacher profile created"
        });

    } catch (error) {
        return res.status(500).json({
            success: false, message:"Internal server error"
        }); 
    }
};