import axios from "axios";

const baseUrl = "https://api.lightcitychurch.ng/api/v1";

export const getAllSeries = async (page: number, search?: string) => {
  console.log("here:", page);
  const url = search
    ? `${baseUrl}/series?page=${page}&search=${search}`
    : `${baseUrl}/series?page=${page}`;
  const { data } = await axios({
    method: "GET",
    url,
  });

  return data;
};

export const getASeries = async (id: string) => {
  const { data } = await axios({
    method: "GET",
    url: `${baseUrl}/series/${id}`,
  });

  return data;
};

export const registerMeeting = async (registrationDetails: {
  meetingId: string,
  fullname: string,
  email: string,
  location: string,
  phonenumber: string,
  circuit: any,
}) => {
  try {
    registrationDetails.meetingId = "65b417da2a42204f5102e45c";
    const response = await axios.post(
      `${baseUrl}/meetings/register`,
      registrationDetails
    );
    return response.status
  } catch (error:any) {
    console.log(error?.message);
  }
};
