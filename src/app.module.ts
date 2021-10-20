import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EventModule } from './events/events.module';

@Module({
  imports: [
    EventModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
