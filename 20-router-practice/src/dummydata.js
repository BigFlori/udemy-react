export const quotes = [
  {
    id: "1",
    author: "BigFlori",
    text: "Hello hello",
  },
  {
    id: "2",
    author: "Thurneer",
    text: "asdasd",
  },
  {
    id: "3",
    author: "BigFlori",
    text: "Isten király császár",
  },
  {
    id: "4",
    author: "dingdong",
    text: "asd123123",
  },
];

export const getQuote = (id) => {
  return quotes.find((item) => item.id === id);
};
