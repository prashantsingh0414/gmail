import jwt from "jsonwebtoken";

const isAuthenticated =async(req,res,next)=>{
    try{
     const token = req.cookies.token;
     

     if(!token){
        return res.status(401).json({Message:"User not authenticated"});
    
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if(!decode) {
        return res.status(401).json({Message:"Invalid token"});
    }
    req.id=decode.userId;
    next();
    
     
    }catch(error){
        console.log(error);
        
    }

}
export default isAuthenticated;