

export const SearchApi = async (string) => {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '85953732d7msh5eb0c447f8596ddp17bfc6jsn39b2ecde3cac',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };
  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${string}`, options)
  try {
    const data = response.json();
    console.log("I am response from API",data)
    return data;
  } catch (error) {
    console.log(error);
  }
};