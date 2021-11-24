import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EventModule } from './events/events.module';
import { UserModule } from './users/users.module';


@Module({
  imports: [
    EventModule,
    UserModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
