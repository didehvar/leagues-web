import faker from 'faker/locale/en_GB';

export default () => ({
  id: faker.random.number(),
  title: faker.random.words(),
  countryCode: faker.address.countryCode().toLowerCase(),
  onView: () => {},
  onJoin: () => {}
});
