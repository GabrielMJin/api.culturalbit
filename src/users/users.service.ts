/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { NewUser, UpdateUser } from 'src/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Get a single post
  async user(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple events
  async users(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  // Create a post
  async createUser(input: NewUser): Promise<User> {
    return this.prisma.user.create({
      data: input,
    });
  } 

  // Update a post
  async updateUser(params: UpdateUser): Promise<User> {
    const { id, email } = params;
    return this.prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(email && { email }),
      },
    });
  } 

  // delete a event
  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
