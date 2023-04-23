export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '330ee949aamsh89f9729ab2b771ap158e75jsn3337c98fdc12',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '330ee949aamsh89f9729ab2b771ap158e75jsn3337c98fdc12',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}