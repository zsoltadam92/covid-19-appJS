export const setMonth = number => {
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
    
  export const setYear = number => {
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