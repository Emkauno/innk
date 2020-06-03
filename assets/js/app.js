window.onload = ()=> {
  var ctx = document.getElementById('myChart');
  
  var myChart = new Chart(ctx, {
    
    type: 'line',
     data: {
        labels: ['14:00', '18:00', '20:00'],
        datasets: [{
          label: "My First dataset",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointRadius: 5,
          pointHitRadius: 10,
          data: [65, 59, 80],
        }]
    },
    options: {
        scales: {
          maintainAspectratio: false,
            }
    }
  })

  const sideBarMenu = ()=>{
    const buttons = Array.from(document.querySelectorAll('.sidebar-item'))
    buttons.forEach((button)=>{
      button.onclick = () => {
        buttons.forEach((btn)=>btn.classList.remove('active'))
        button.classList.add('active')
      }
    })
  } 
  sideBarMenu()
  const data = [
    {
      day:'lunes',
      temp:5,
      minTemp:-3,
      maxTemp:8,
      humidity:40,
      precipitations:8,
      winds:5,
      primaryColor:'#44a9ff',
      secondaryColor:'#cbe8ff'
    },
    {
      day:'martes',
      temp:15,
      minTemp:10,
      maxTemp:18,
      humidity:55,
      precipitations:25,
      winds:9,
      primaryColor:'#44a9ff',
      secondaryColor:'#cbe8ff'
    },
    {
      day:'miercoles',
      temp:19,
      minTemp:12,
      maxTemp:20,
      humidity:30,
      precipitations:2,
      winds:10,
      primaryColor:'#FF9900',
      secondaryColor:'#F8ECDD'
    },
    {
      day:'jueves',
      temp:20,
      minTemp:16,
      maxTemp:24,
      humidity:15,
      precipitations:2,
      winds:8,
      primaryColor:'#FF9900',
      secondaryColor:'#F8ECDD'
    },
    {
      day:'viernes',
      temp:10,
      minTemp:8,
      maxTemp:13,
      humidity:60,
      precipitations:30,
      winds:10,
      primaryColor:'#44a9ff',
      secondaryColor:'#cbe8ff'
    },
    {
      day:'sabado',
      temp:25,
      minTemp:20,
      maxTemp:26,
      humidity:15,
      precipitations:0,
      winds:8,
      primaryColor:'#ff5454',
      secondaryColor:'#ffc5c5'
    },
    {
      day:'domingo',
      temp:35,
      minTemp:30,
      maxTemp:38,
      humidity:5,
      precipitations:0,
      winds:4,
      primaryColor:'#ff5454',
      secondaryColor:'#ffc5c5',
    },
  ]
  const cardsHandler = ()=>{
    const root = document.documentElement
    const mainTemp = document.getElementById('main-temp')
    const secondaryTemp = document.getElementById('secondary-temp')
    const humidity = document.getElementById('humidity')
    const precipitations = document.getElementById('prec')
    const winds = document.getElementById('winds')
    const cards = Array.from(document.querySelectorAll('.weather__card-item'))
    

      cards.forEach((card)=>{
      card.onclick = ()=>{
        cards.forEach((item)=>item.classList.remove('active'))
        card.classList.add('active')
        const cardData = data.find((d)=> d.day == card.dataset.day)
        mainTemp.innerText = cardData.temp
        secondaryTemp.innerText = `${cardData.minTemp}º / ${cardData.maxTemp}º `
        humidity.innerText = `${cardData.humidity}%`
        precipitations.innerText = `${cardData.precipitations}%`
        winds.innerText = `${cardData.winds} Km/h`
        root.style.setProperty('--color-primary', cardData.primaryColor)
        root.style.setProperty('--color-secondary', cardData.secondaryColor)
      }
    })
  }
  cardsHandler()
}