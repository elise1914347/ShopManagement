import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";
import PurchaseModel from "../models/purchase"


export const createController = create(PurchaseModel)
export const getAllController = getAll(PurchaseModel)

export const getOneController = getOneById(PurchaseModel)


export const updateController = updateOneById(PurchaseModel)

export const deleteController =deleteOneById(PurchaseModel)