import axios from 'axios'

const baseUrl = 'https://api.lightcitychurch.ng/api/v1'

export const getAllSeries = async(page: number) => {
  console.log('here')
    const { data } = await axios({
      method: 'GET',
      url: `${baseUrl}/series?page=${page}`,
    });
  
    return data;
  };