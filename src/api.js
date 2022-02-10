import { setMonth,setYear } from "./chartDates"

// országnevek listázása
export const getCountryNames = async () => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases`)
  if(response.status !== 200) {
    throw 'Error loading country data'
  }
  const jsonResponse = await response.json()
 
  return jsonResponse
}

// fertőzöttségi és halálozási adatok
export const getCovidCasesData = async (country) => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)
  if(response.status !== 200) {
    throw 'Error loading covid data'
  }
  const jsonResponse = await response.json()
  return jsonResponse
}

// oltottsági adatok
export const getVaccinesData = async (country) => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`)
  if (response.status !== 200) {
    throw 'Error loading vaccines data'
  }
  const jsonResponse = await response.json()
  return jsonResponse
}

// diagram adatok
export const getHistoryData = async (country) => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=deaths`)
  if (response.status !== 200) {
    throw 'Error loading history data'
  }
  const jsonResponse = await response.json()
  
  const dates = jsonResponse.All.dates

  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1

  const arr = [dates[`${year - 1}-${month < 10 ? `0${month}` : month}-28`], dates[`${setYear(11)}-${setMonth(11) < 10 ? `0${setMonth(11)}` : setMonth(11)}-28`], dates[`${setYear(10)}-${setMonth(10) < 10 ? `0${setMonth(10)}` : setMonth(10)}-28`], dates[`${setYear(9)}-${setMonth(9) < 10 ? `0${setMonth(9)}` : setMonth(9)}-28`], dates[`${setYear(8)}-${setMonth(8) < 10 ? `0${setMonth(8)}` : setMonth(8)}-28`], dates[`${setYear(7)}-${setMonth(7) < 10 ? `0${setMonth(7)}` : setMonth(7)}-28`], dates[`${setYear(6)}-${setMonth(6) < 10 ? `0${setMonth(6)}` : setMonth(6)}-28`], dates[`${setYear(5)}-${setMonth(5) < 10 ? `0${setMonth(5)}` : setMonth(5)}-28`], dates[`${setYear(4)}-${setMonth(4) < 10 ? `0${setMonth(4)}` : setMonth(4)}-28`], dates[`${setYear(3)}-${setMonth(3) < 10 ? `0${setMonth(3)}` : setMonth(3)}-28`], dates[`${setYear(2)}-${setMonth(2) < 10 ? `0${setMonth(2)}` : setMonth(2)}-28`], dates[`${setYear(1)}-${setMonth(1) < 10 ? `0${setMonth(1)}` : setMonth(1)}-28`],]

  return arr
}


