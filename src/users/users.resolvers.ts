/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './users.service';
import { User, NewUser, UpdateUser } from 'src/graphql';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async users() {
    return this.userService.users();
  }

  @Query('user')
  async user(@Args('id') args: string) {
    return this.userService.user(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return this.userService.createUser(args);
  } 
 
  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser) {
    return this.userService.updateUser(args);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') args: string) {
    return this.userService.deleteUser(args);
  }
}
