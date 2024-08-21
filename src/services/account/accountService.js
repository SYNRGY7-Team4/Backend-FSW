import { AccountModels } from "../../models/Models.js"; // Ensure this import is correct

class AccountService {
  constructor(AccountModels) {
    this.accountModels = AccountModels;
  }

  async getUserAccountData(account_number) {
    return await this.accountModels.findUnique({
      where: {
        account_number: account_number,
      },
      select: {
        id: true,
        account_number: true,
        users: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}

// Create and export a single instance of AccountService
const accountService = new AccountService(AccountModels);

export default accountService;
