export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb08ee4b2e016951f3182537e4cbccee&lang=ru&units=metric`)

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
