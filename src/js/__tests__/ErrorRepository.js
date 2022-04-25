import ErrorRepository from '../ErrorRepository';

test('testing whether there is necessary error in the repository (there is)', () => {
  const ErRepo = new ErrorRepository();
  const code = '1';
  expect(ErRepo.translate(code)).toBe('Что-то пошло не так');
});

test('testing whether there is necessary error in the repository (there is not)', () => {
  const ErRepo = new ErrorRepository();
  const code = '16';
  expect(ErRepo.translate(code)).toBe('Unknown error');
});
