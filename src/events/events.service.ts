/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Event } from '@prisma/client';
import { NewEvent, UpdateEvent } from 'src/graphql';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  // Get a single post
  async event(id: string): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple events
  async events(): Promise<Event[]> {
    return this.prisma.event.findMany({});
  }

  // Create a post
  async createEvent(input: NewEvent): Promise<Event> {
    return this.prisma.event.create({
      data: input,
    });
  }

  // Update a post
  async updateEvent(params: UpdateEvent): Promise<Event> {
    const { id, published, title, content } = params;
    return this.prisma.event.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(published && { published }),
        ...(title && { title }),
        ...(content && { content }),
      },
    });
  }

  // delete a event
  async deleteEvent(id: string): Promise<Event> {
    return this.prisma.event.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
