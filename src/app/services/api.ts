import axios from 'axios'

const baseUrl = 'https://api.lightcitychurch.ng/api/v1'

export const getAllSeries = (page: number) => {
  console.log('here')
    return axios({
      method: 'GET',
      url: `${baseUrl}/series?page=${page}`,
    });
  };