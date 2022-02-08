import { getHistoryData } from "./api";

export const chart = async (country) => {
  
  const chartContainer = document.getElementById('chart-container')
  const chartErrorMessage = document.getElementById('chart-error-message')
  chartContainer.insertAdjacentHTML('afterbegin', `<div class="loader" id="loading"></div>`)
  const loadingSpinner = document.getElementById('loading')

  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1

  try {
    const labels = [
      `${year - 1} ${setMonthLabel(0)}`,
      setMonthLabel(11) === 'Január' ? `${year} ${setMonthLabel(11)}` : setMonthLabel(11),
      setMonthLabel(10) === 'Január' ? `${year} ${setMonthLabel(10)}` : setMonthLabel(10),
      setMonthLabel(9) === 'Január' ? `${year} ${setMonthLabel(9)}` : setMonthLabel(9),
      setMonthLabel(8) === 'Január' ? `${year} ${setMonthLabel(8)}` : setMonthLabel(8),
      setMonthLabel(7) === 'Január' ? `${year} ${setMonthLabel(7)}` : setMonthLabel(7),
      setMonthLabel(6) === 'Január' ? `${year} ${setMonthLabel(6)}` : setMonthLabel(6),
      setMonthLabel(5) === 'Január' ? `${year} ${setMonthLabel(5)}` : setMonthLabel(5),
      setMonthLabel(4) === 'Január' ? `${year} ${setMonthLabel(4)}` : setMonthLabel(4),
      setMonthLabel(3) === 'Január' ? `${year} ${setMonthLabel(3)}` : setMonthLabel(3),
      setMonthLabel(2) === 'Január' ? `${year} ${setMonthLabel(2)}` : setMonthLabel(2),
      setMonthLabel(1) === 'Január' ? `${year} ${setMonthLabel(1)}` : setMonthLabel(1),
      setMonthLabel(0) === 'Január' ? `${year} ${setMonthLabel(0)}` : setMonthLabel(0),
    ];
    
    const data = {
      labels: labels,
      datasets: [{
        label: 'Elhunytak számának változása',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: await getHistoryData(country),
      }]
    };
    
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
  
    const myChart = new Chart(
      document.getElementById('myChart'),
  config
  );
  
} catch (e) {
    chartErrorMessage.style.display = "block"
    chartContainer.removeChild(loadingSpinner)
    chartContainer.style.display = "none"
    console.error("Error loading covid info", e)
    throw e
  }
  chartContainer.removeChild(loadingSpinner)
  
}


function setMonthLabel (number) {
  const now = new Date()
  let month = now.getMonth() + 1
  
  switch (month - number) {
    case -11:
      return month = 'Január';
    case -10:
      return month = 'Február';
    case -9:
      return month = 'Március';
    case -8:
      return month = 'Április';
    case -7:
      return month = 'Május';
    case -6:
      return month = 'Június';
    case -5:
      return month = 'Július';
    case -4:
      return month = 'Augusztus';
    case -3:
      return month = 'Szeptember';
    case -2:
      return month = 'Október';
    case -1:
      return month = 'November';
    case 0:
      return month = 'December';
    case 1:
      return month = 'Január';
    case 2:
      return month = 'Február';
    case 3:
      return month = 'Március';
    case 4:
      return month = 'Április';
    case 5:
      return month = 'Május';
    case 6:
      return month = 'Június';
    case 7:
      return month = 'Július';
    case 8:
      return month = 'Augusztus';
    case 9:
      return month = 'Szeptember';
    case 10:
      return month = 'Október';
    case 11:
      return month = 'November';
    case 12:
      return month = 'December';
      }
    }