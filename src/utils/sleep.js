const sleep = (time) => {
  return new Promise((resolve) => setTimeout(() => resolve(true), time));
};

export default sleep;
