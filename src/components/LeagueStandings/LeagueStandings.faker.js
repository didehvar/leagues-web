import faker from 'faker';

export default () => ({
  id: faker.random.number(),
  avatar: faker.image.imageUrl(50, 50),
  name: faker.name.findName(),
  points: faker.random.number()
});
