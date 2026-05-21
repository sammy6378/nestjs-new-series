import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import type { Role } from '../../@types/user';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // get all users  /users
  @Get()
  findAll(@Query('role') role?: Role) {
    const user = this.usersService.findAll(role);
    return {
      success: true,
      message: 'Users retrieved successfully',
      data: user,
    };
  }

  // get user by id /users/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.findOne(id);
    return {
      success: true,
      message: 'User retrieved successfully',
      data: user,
    };
  }

  //   create user /users
  @Post()
  create(@Body(ValidationPipe) user: CreateUserDto) {
    const createdUser = this.usersService.create(user);
    return {
      success: true,
      message: 'User created successfully',
      data: createdUser,
    };
  }

  //   patch user /user/:id
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) user: UpdateUserDto,
  ) {
    const updatedUser = this.usersService.update(id, user);
    return {
      success: true,
      message: 'User updated successfully',
      data: updatedUser,
    };
  }

  // delete user /user/:id
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    const deletedUser = this.usersService.delete(id);
    return {
      success: true,
      message: 'User deleted successfully',
      data: deletedUser || null,
    };
  }
}
