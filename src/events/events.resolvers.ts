/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventService } from './events.service';
import { Event, NewEvent, UpdateEvent } from 'src/graphql';

@Resolver('Event')
export class EventResolvers {
  constructor(private readonly eventService: EventService) {}

  @Query('events')
  async events() {
    return this.eventService.events();
  }

  @Query('event')
  async event(@Args('id') args: string) {
    return this.eventService.event(args);
  }

  @Mutation('createEvent')
  async create(@Args('input') args: NewEvent) {
    return this.eventService.createEvent(args);
  }

  @Mutation('updateEvent')
  async update(@Args('input') args: UpdateEvent) {
    return this.eventService.updateEvent(args);
  }

  @Mutation('deleteEvent')
  async delete(@Args('id') args: string) {
    return this.eventService.deleteEvent(args);
  }
}
