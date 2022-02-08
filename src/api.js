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

  const arr = [dates[`${year - 1}-${month < 10 ? `0${month}` : month}-01`], dates[`${setYear(11)}-${setMonth(11) < 10 ? `0${setMonth(11)}` : setMonth(11)}-01`], dates[`${setYear(10)}-${setMonth(10) < 10 ? `0${setMonth(10)}` : setMonth(10)}-01`], dates[`${setYear(9)}-${setMonth(9) < 10 ? `0${setMonth(9)}` : setMonth(9)}-01`], dates[`${setYear(8)}-${setMonth(8) < 10 ? `0${setMonth(8)}` : setMonth(8)}-01`], dates[`${setYear(7)}-${setMonth(7) < 10 ? `0${setMonth(7)}` : setMonth(7)}-01`], dates[`${setYear(6)}-${setMonth(6) < 10 ? `0${setMonth(6)}` : setMonth(6)}-01`], dates[`${setYear(5)}-${setMonth(5) < 10 ? `0${setMonth(5)}` : setMonth(5)}-01`], dates[`${setYear(4)}-${setMonth(4) < 10 ? `0${setMonth(4)}` : setMonth(4)}-01`], dates[`${setYear(3)}-${setMonth(3) < 10 ? `0${setMonth(3)}` : setMonth(3)}-01`], dates[`${setYear(2)}-${setMonth(2) < 10 ? `0${setMonth(2)}` : setMonth(2)}-01`], dates[`${setYear(1)}-${setMonth(1) < 10 ? `0${setMonth(1)}` : setMonth(1)}-01`], dates[`${year}-${month < 10 ? `0${month}` : month}-01`],]

  return arr
}


function setMonth (number) {
  const now = new Date()
  let month = now.getMonth() + 1
  
  switch (month - number) {
    case -11:
      return month = 1;
    case -10:
      return month = 2;
    case -9:
      return month = 3;
    case -8:
      return month = 4;
    case -7:
      return month = 5;
    case -6:
      return month = 6;
    case -5:
      return month = 7;
    case -4:
      return month = 8;
    case -3:
      return month = 9;
    case -2:
      return month = 10;
    case -1:
      return month = 11;
    case 0:
      return month = 12;
    case 1:
      return month = 1;
    case 2:
      return month = 2;
    case 3:
      return month = 3;
    case 4:
      return month = 4;
    case 5:
      return month = 5;
    case 6:
      return month = 6;
    case 7:
      return month = 7;
    case 8:
      return month = 8;
    case 9:
      return month = 9;
    case 10:
      return month = 10;
    case 11:
      return month = 11;
      }
    }
    
    function setYear (number) {
      const now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      
      switch (month - number) {
        case -11:
          return year = year - 1;
        case -10:
          return year = year - 1;
        case -9:
          return year = year - 1;
        case -8:
          return year = year - 1;
        case -7:
          return year = year - 1;
        case -6:
          return year = year - 1;
        case -5:
          return year = year - 1;
        case -4:
          return year = year - 1;
        case -3:
          return year = year - 1;
        case -2:
          return year = year - 1;
        case -1:
          return year = year - 1;
        case 0:
          return year = year - 1;
        case 1:
          return year = year;
        case 2:
          return year = year;
        case 3:
          return year = year;
        case 4:
          return year = year;
        case 5:
          return year = year;
        case 6:
          return year = year;
        case 7:
          return year = year;
        case 8:
          return year = year;
        case 9:
          return year = year;
        case 10:
          return year = year;
        case 11:
          return year = year;
          }
        }