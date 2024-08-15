import userService from "../../services/Users/userService.js";
import ClientError from "../../utils/exceptions/ClientError.js";

export const getUsers = async (req, res, next) => {
  try {
    const { filter } = req.body;

    let Message = "";
    if (filter.no_hp) {
      Message = `No Hp`;
    } else if (filter.email) {
      Message = `Email`;
    } else if (filter.no_ktp) {
      Message = `No KTP`;
    }

    const result = await userService.getUser(filter);
    if (result.length > 0) {
      throw new ClientError(`${Message} sudah terdaftar`);
    }

    res.status(200).json({
      success: true,
      data: result,
      message: `${Message} belum terdaftar`,
    });
  } catch (error) {
    next(error);
  }
};
