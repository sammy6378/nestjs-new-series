import { Injectable } from '@nestjs/common';
import { Role, TUser } from '../../@types/user';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: TUser[] = [
    {
      id: 1,
      name: 'samuel',
      email: 'samuel2@gmail.com',
      role: 'USER',
    },
    {
      id: 2,
      name: 'James',
      email: 'james23@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'John',
      email: 'john23@gmail.com',
      role: 'USER',
    },
    {
      id: 4,
      name: 'Charles',
      email: 'charles67@gmail.com',
      role: 'SUPERADMIN',
    },
  ];

  findAll(role?: Role) {
    if (role) {
      return this.users.filter((user: TUser) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user: TUser) => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    // generate id
    const id = this.users.length + 1;
    const newUser = { ...createUserDto, id };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = this.findOne(id);
    if (!existingUser) {
      return null;
    }
    const updatedUser = { ...existingUser, ...updateUserDto };
    this.users = this.users.map((u: TUser) => (u.id === id ? updatedUser : u));
    return updatedUser;
  }

  delete(id: number) {
    const existingUser = this.findOne(id);
    if (!existingUser) {
      return null;
    }
    this.users = this.users.filter((u: TUser) => u.id !== id);
    return existingUser;
  }
}
