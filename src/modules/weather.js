const weather = (() => {
    function convertData(data) {
      const {
        name: cityName,
        main: { temp: temperature, feels_like: feelsLike, humidity },
        wind: { speed: windSpeed },
      } = data;
      return { cityName, temperature, feelsLike, humidity, windSpeed };
    }
  
    async function getData(city) {
      const endpoint = `https://api.weatherapi.com/v1/current.json?key=020e077f80b14328913141206231901&q=Harare&aqi=no`;
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        if (!response.ok) throw new Error(`City ${city} not found`);
        const data = convertData(await response.json());
        return data;
      } catch (error) {
        alert(error);
        return null;
      }
    }
    return { getData };
  })();
  
  export default weather;