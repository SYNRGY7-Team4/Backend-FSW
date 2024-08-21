import ClientError from "../../utils/exceptions/ClientError.js";
import accountService from "../../services/account/accountService.js";

export const getUserAccount = async (req, res, next) => {
  try {
    const account_number = req.query.accountNumber;

    const result = await accountService.getUserAccountData(account_number);

    if (!result) {
      throw new ClientError(`Nomor rekening tidak terdaftar`);
    }

    res.status(200).json({
      success: true,
      data: {
        id: result.id,
        account_number: result.account_number,
        name: result.users.name,
      },
      message: `Berhasil mendapatkan data`,
    });
  } catch (error) {
    next(error);
  }
};
