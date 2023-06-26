
export const exerciseOptions = {

    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': '1448b87813msh8c74f7822f70c44p15b85ajsn0f3bde80635a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '1448b87813msh8c74f7822f70c44p15b85ajsn0f3bde80635a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
};


