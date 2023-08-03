import { userStub } from '../test/stubs/user.stub';

export const UsersService = jest.fn().mockReturnValue({
  getOneUser: jest.fn().mockResolvedValue(userStub()),
  getAllUSers: jest.fn().mockResolvedValue([userStub()]),
  createUser: jest.fn().mockResolvedValue(userStub()),
  // deleteuser:jest.fn().mockResolvedValue({message:"User deleted"})
});
