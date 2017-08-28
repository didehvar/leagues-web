import faker from 'faker';

export default () => ({
  id: faker.random.number(),
  title: faker.random.words(),
  countryCode: faker.address.countryCode().toLowerCase(),
  onView: () => {},
  onJoin: () => {}
});
