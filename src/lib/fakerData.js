import faker from 'faker';

export const mockHedaer = ['email', 'name', 'country', 'age', 'createdAt'];

export const funcMockTableBody = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const {
      internet: { email, userName },
      address: { countryCode },
      date: { month },
    } = faker;
    const randomAge = Math.floor(Math.random() * (40 - 20) + 20);
    const randomCreatedMonth = Math.floor(Math.random() * (12 - 1) + 1);

    result.push([
      email(),
      userName(),
      countryCode(),
      randomAge,
      randomCreatedMonth,
    ]);
  }
  return result;
};
