import { getWeatherData } from './api.js'
import { createrContent } from './appContent.js'
import { createHeader } from './appHeader.js'

const app = async () => {
  const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Москва')
  const header = createHeader(weather.name)
  const content = createrContent(weather)
  document.body.append(header, content)
}

app()
