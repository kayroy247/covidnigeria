import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'https://covidnigeria.herokuapp.com/api',
  headers: {'Content-Type': 'application/json'}
});


export const getCovidData = async () => {
  try {
    const covid = await axios.get()

    return covid.data;
  } catch(err) {
    return console.error(err)
  }
}

