import faker from 'faker';

export const mockHedaer = ['email', 'name', 'country', 'age', 'createdAt'];

export const funcMockTableBody = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const {
      internet: { email, userName },
      address: { country },
      date: { month },
    } = faker;
    const randomAge = Math.floor(Math.random() * (40 - 20) + 20);
    result.push([email(), userName(), country(), randomAge, month()]);
  }
  return result;
};
