import genderByName from './index';

beforeAll(() => {
  jest.setTimeout(30000);
})

it('should return Female when name is Rebeca', async () => {
  const gender = await genderByName('Rebeca');
  expect(gender).toBe('Female');
});

it('should return Male when name is Thiago', async () => {
  const gender = await genderByName('Thiago');
  expect(gender).toBe('Male');
});


it('should return NA when name is pretty hard to define by census', async () => {
  const gender = await genderByName('asdfg');
  expect(gender).toBe('NA');
});

it('should have property percentage when pass to method -> percentage: true', async () => {
  const gender = await genderByName('Rebeca', { percentage: true });
  expect(gender).toHaveProperty('percentage');
});

it('should have property percentage when pass to method -> percentage: true', async () => {
  const gender = await genderByName('Thiago', { percentage: true });
  expect(gender).toHaveProperty('percentage');
});

it('should return NA when name is pretty hard to define by census with percentage', async () => {
  const gender = await genderByName('asdfg', { percentage: true });
  expect(gender).toHaveProperty('percentage');
});