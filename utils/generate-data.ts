import { fa, faker } from '@faker-js/faker'
import  { Thread, User } from '../types/threads'

export function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    verified: Math.random() >= .5,
    bio: faker.person.bio(),
    username: faker.internet.userName(),
    link: faker.internet.url(),
    followers: new Array(Math.floor(Math.random() * 10))
    .fill(null)
    .map((_) => createRandomFollower())
  }
}

export function createRandomFollower(): User {
  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " + faker.person.lastName(),
    verified: Math.random() >= .5,
    bio: faker.person.bio(),
    username: faker.internet.userName(),
    link: faker.internet.url()
  }
}

export function createRandomThread(): Thread {
  return {
    id: faker.string.uuid(),
    author: createRandomUser(),
    content: faker.lorem.paragraph(4),
    image: Math.random() > 0.5 ? faker.image.url() : undefined,
    mention: Math.random() > 0.5,
    createdAt: faker.date.recent().toISOString(),
    mentionUser: createRandomUser(),
    likesCount: Math.floor(Math.random() * 1200),
    repliesCount: Math.floor(Math.random() * 150),
    replies: new Array(Math.floor(Math.random() *10))
    .fill(null)
    .map(() => ({
      id: faker.string.uuid(),
      author: createRandomUser(),
      content: faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1200),
      createdAt: faker.date.recent().toISOString(),
    }))
  }
}


export function generateThreads(): Thread[] {
  return new Array(40).fill(null).map((_) => createRandomThread())
}

