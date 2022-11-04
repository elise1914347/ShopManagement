import ProductModel from "../models/product";
import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";
import SalesModel from "../models/sales"


export const createController = create(SalesModel)
export const getAllController = getAll(SalesModel)

export const getOneController = getOneById(SalesModel)


export const updateController = updateOneById(SalesModel)

export const deleteController =deleteOneById(SalesModel)