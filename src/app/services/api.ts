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
  meetingId: string;
  fullname: string;
  email: string;
  location: string;
  phonenumber: number;
  circuit: string;
}) => {
  try {
    registrationDetails.meetingId = "65a537c873a412f0ed2c4163";
    const response = await axios.post(
      `${baseUrl}/meetings/register`,
      registrationDetails
    );
    console.log(response.data?.message);
  } catch (error:any) {
    console.log(error?.message);
  }
};
