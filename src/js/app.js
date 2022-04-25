import ErrorRepository from './ErrorRepository';

const ErRepo = new ErrorRepository();
const code = '16';
console.log(ErRepo.translate(code));
