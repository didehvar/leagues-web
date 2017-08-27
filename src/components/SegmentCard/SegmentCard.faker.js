import faker from 'faker';

export default () => ({
  id: faker.random.number(),
  name: faker.random.words(10),
  startDate: faker.date.past(),
  endDate: faker.date.future()
});
