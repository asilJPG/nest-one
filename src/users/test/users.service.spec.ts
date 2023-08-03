import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { userStub } from './stubs/user.stub';
import { JwtService } from '@nestjs/jwt';
import { RolesService } from '../../roles/roles.service';
import { getModelToken } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { Role } from '../../roles/models/role.model';
import { CreateUserDto } from '../dto/create-user.dto';

describe('Users service', () => {
  let usersService: UsersService;

  const moockUsersRepository = {
    create: jest.fn().mockImplementation(userStub),
    findOne: jest.fn().mockImplementation(userStub),
    findByPk: jest.fn().mockImplementation(userStub),
    destroy: jest.fn().mockImplementation(() => 1 | 0),
    findAll: jest.fn().mockImplementation(() => [userStub()]),
  };
  const mockRoleRepository = {
    findOne: jest.fn().mockImplementation((value) => 'ADMIN'),
  };
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UsersService,
        JwtService,
        RolesService,
        { provide: getModelToken(User), useValue: moockUsersRepository },
        { provide: getModelToken(Role), useValue: mockRoleRepository },
      ],
    }).compile();
    usersService = moduleRef.get<UsersService>(UsersService);
  });
  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });
  describe('create user', () => {
    describe('when createUser id caled', () => {
      let newUser: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().email,
        };
        newUser = await usersService.createUser(createUserDto);
        console.log(newUser);
      });
      it('should be create new User', async () => {
        expect(newUser).toMatchObject({
          ...userStub(),
          roles: ['ADMIN'],
        });
      });
    });
  });
  describe('getOneUser', () => {
    describe('when getOneUser is called', () => {
      test('then it should call UsersService', async () => {
        expect(await usersService.getOneUser(userStub().id)).toEqual(
          userStub(),
        );
      });
    });
  });
  describe('getAllUsers', () => {
    describe('when getAllUsers is called', () => {
      test('then it should call UsersService', async () => {
        expect(await usersService.getAllUsers()).toEqual([userStub()]);
      });
    });
  });

  describe('deleteUser', () => {
    describe('when deleteUser is called', () => {
      test('then it should call UsersService', async () => {
        expect(await usersService.deleteUser(userStub().id)).toEqual(1 | 0);
      });
    });
  });
});
