export const isObjectEmpty = (obj) =>
  obj && Object.keys(obj).length === 0 && obj.construcor === Object;
