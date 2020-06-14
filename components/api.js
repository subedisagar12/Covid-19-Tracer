import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (e) {
    console.log(e);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (e) {
    console.log(e);
  }
};

export const fetchTodayData = async (country) => {
  let uri = "https://corona.lmao.ninja/v2";
  let changeableUri = uri;
  if (country) {
    changeableUri = `${uri}/countries/${country}`;
  } else {
    changeableUri = `${uri}/all`;
  }
  try {
    const { data } = await axios.get(changeableUri);

    return data;
  } catch (e) {
    console.log(e);
  }
};
