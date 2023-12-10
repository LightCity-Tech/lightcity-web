import axios from 'axios'

const baseUrl = 'https://api.lightcitychurch.ng/api/v1'

export const getAllSeries = async(page: number) => {
  console.log('here:', page)
    const { data } = await axios({
      method: 'GET',
      url: `${baseUrl}/series?page=${page}`,
    });
  
    return data;
  };

  export const getASeries = async (id: string) => {
    const { data } = await axios({
      method: 'GET',
      url: `${baseUrl}/series/${id}`,
    });
  
    return data;
  };