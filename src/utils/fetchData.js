export const searchParam = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0954bac186msh893f5cc948970bap11eb89jsn5743d648b4e3",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
