import ProductModel from "../models/product";
import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";
import UserModel from "../models/user"


export const createController = create(UserModel)
export const getAllController = getAll(UserModel)

export const getOneController = getOneById(UserModel)


export const updateController = updateOneById(UserModel)

export const deleteController =deleteOneById(UserModel)