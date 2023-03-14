export const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/").then((response) => response.json());

  return response;
};
