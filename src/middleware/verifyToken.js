
// import Response from "../utils/Response";
// import status from "http-status";
// import { decodeToken } from "../utils/token";
// import user from "../models/user";
// export const verifyUserToken=async(req,res,next)=>{
//     const token = req.header("auth-token") || 
//     req.params["auth-token"]||
//     req.body.token||
//     req.query["auth-token"];
//     if(!token){
// return Response.errorMessage(res,"No token provided!",status.NOT_FOUND)
//     }
//     const payload = decodeToken(token);
//     const {name}=payload;
//     if(name === "jsonWebTokenError"){
//         return Response.errorMessage(res,"unauthorized,invalid token",
//         status.UNAUTHORIZED
//         ); 
//     }

// else if (name === "TokenExpiredError"){
//         return Response.errorMessage(res,"Token Expires,invalid token",
//         status.UNAUTHORIZED
//         ); 
//     }

//     const user= await useModel.finfOne({_id: payload?.user?._id}).select("-password")
//     if(!user)
//     return Response.errorMessage(
//         res,
//         "User from token not exist, invalid token",
//         status.UNAUTHORIZED
//     );
// };

// req.user = user;
// req.token = token;
// req.body.user = user._id
// return next();
// }catch (error){
//     return Response.errorMessage(
//         res,
//         "FAILED TO VERIFY TOKEN!",
//         status.INTERNAL_SERVER_ERROR
//     );
// }
