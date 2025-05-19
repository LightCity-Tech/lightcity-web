import axios from "axios";

const baseUrl = "https://lightcity-platform-backend.onrender.com/api/v1";

export const getAllSeriesPaginated = async (page: number, search?: string) => {
  const url = search
    ? `${baseUrl}/series?page=${page}&search=${search}`
    : `${baseUrl}/series?page=${page}`;
  const { data } = await axios({
    method: "GET",
    url,
  });

  return data;
};

//API call to fetch all series without pagination
export const getAllSeriesNonPaginated = async () => {
  const {data} = await axios({
    method: "GET",
    url: `${baseUrl}/series/non-paginated`
  })

  return data
}

export const getASeries = async (id: string) => {
  const { data } = await axios({
    method: "GET",
    url: `${baseUrl}/series/${id}`,
  });

  return data;
};

//API call for registering for special meetings
export const registerMeeting = async (registrationDetails: {
  meetingId: string,
  fullname: string,
  email: string,
  location: string,
  phonenumber: string,
  circuit: any,
}) => {
  try {
    // registrationDetails.meetingId = "65b417da2a42204f5102e45c";
    const response = await axios.post(
      `${baseUrl}/meetings/register`,
      registrationDetails
    );
    return response.status
  } catch (error:any) {
    throw new Error(error?.message);
  }
};

//API call to fetch latest sermons/series for the Home Page
export const getLatestSermons = async() => {
  try{
    const {data} = await axios.get(`${baseUrl}/series/latest`);
    return data.data.latestSeries
  }catch(error:any){
    throw new Error(error?.message)
  }
};
