import { UsersModels } from "../../models/Models.js";

class UserService {
  constructor(UsersModels) {
    this.userModel = UsersModels;
  }

  async getUser(filter) {
    return await this.userModel.findMany({ where: filter });
  }
}

const userService = new UserService(UsersModels);

export default userService;
