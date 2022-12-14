import UserModel from "../models/user";
import { hashPassword, isPasswordMatching } from "../utils/hashPassword";
import Response from "../utils/Response";
import status from "http-status";
import { generateToken } from "../utils/token";
export const checkUser = async (req, res, next) => {
  let { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    req.body.password = hashPassword(password);
    return next();
  }
  return Response.errorMessage(res, "user is arleady exist", status.CONFLICT);
};

export const loginUser = async (req, res) => {
  let { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return Response.errorMessage(
      res,
      "user/email is not exist",
      status.NOT_FOUND
    );
  }
  if (isPasswordMatching(password, user.password)) {
    user.password = null;
    const token = generateToken({ user });
    return Response.successMessage(
      res,
      "Successfully logged in",
      { user, token },
      status.OK
    );
  }
  return Response.errorMessage(res, "Invalid password", status.BAD_REQUEST);
};