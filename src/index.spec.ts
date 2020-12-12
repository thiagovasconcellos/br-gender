import { getGenderByName } from './index';

beforeAll(() => {
  jest.setTimeout(30000);
})

it('should return Female when name is Rebeca', async () => {
  const gender = await getGenderByName('Rebeca');
  expect(gender).toBe('Female');
});

it('should return Male when name is Thiago', async () => {
  const gender = await getGenderByName('Thiago');
  expect(gender).toBe('Male');
});


it('should return NA when name is pretty hard to define by census', async () => {
  const gender = await getGenderByName('asdfg');
  expect(gender).toBe('NA');
});

it('should have property percentage when pass to method -> percentage: true', async () => {
  const gender = await getGenderByName('Rebeca', { percentage: true });
  expect(gender).toHaveProperty('percentage');
});

it('should have property percentage when pass to method -> percentage: true', async () => {
  const gender = await getGenderByName('Thiago', { percentage: true });
  expect(gender).toHaveProperty('percentage');
});

it('should return NA when name is pretty hard to define by census with percentage', async () => {
  const gender = await getGenderByName('asdfg', { percentage: true });
  expect(gender).toHaveProperty('percentage');
});