import { before, test } from 'node:test';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { Test } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { userStub } from './stubs/user.stub';

jest.mock('../users.service');

describe('Users controller', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });
  it('should be defined usersController', () => {
    expect(usersController).toBeDefined();
  });
  it('should be defined usersService', () => {
    expect(usersService).toBeDefined();
  });

  describe('create user', () => {
    describe('when createUser id caled', () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().email,
        };
        user = await usersController.createUser(createUserDto);
        console.log(user);
      });
      it('then it should call usersService', () => {
        expect(usersService.createUser).toHaveBeenCalledWith(createUserDto);
      });
      it('then it should return', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getOneUser', () => {
    describe('when getOneUser id called', () => {
      let user: User;
      beforeAll(async () => {
        user = await usersController.getOneUser(userStub().id);
        console.log(user);
      });
      it('then it should call usersService', () => {
        expect(usersService.getOneUser).toBeCalledWith(userStub().id);
      });
      it('then it should return user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  // describe('getAllUSers', () => {
  //   describe('when getAllUSers is called', () => {
  //     let user: User[];
  //     beforeAll(async () => {
  //       user = await usersController.getAllUSers();
  //     });
  //     test('then it should call usersService', () => {
  //       expect(usersService.getAllUsers).toBeCalled();
  //     });
  //     test('then it should return user', () => {
  //       expect(user).toEqual([userStub()]);
  //     });
  //   });
  // });

  // describe('deleteUser', () => {
  //   describe('when deleteUser is called', () => {
  //     let res: number;
  //     beforeAll(async () => {
  //       res = await usersController.deleteUser(userStub().id.toString());
  //       console.log(res);
  //     });
  //     it('then it should call usersService', () => {
  //       expect(usersService.deleteUser).toBeCalledWith(userStub().id);
  //     });
  //     it('then it should return user', () => {
  //       expect(res).toEqual({ message: 'User deleted successfully' });
  //     });
  //   });
  // });
});
