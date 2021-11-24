/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserResolvers } from './users.resolvers';
import { UserService } from './users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserResolvers, UserService, PrismaService],
})

export class UserModule {}

