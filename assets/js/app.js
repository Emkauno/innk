window.onload = ()=> {
  var ctx = document.getElementById('myChart');
  let chartData = {
    labels: ['14:00', '18:00', '20:00'],
    datasets: [{
      label: "Temperatura en ºC",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "#F8ECDD",
      borderColor: "#FF9900",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointRadius: 5,
      pointHitRadius: 10,
      data: [16, 20, 24],
    }]
  }
  let chartOptions = {
  responsive : true,
  maintainAspecRatio : true,
  aspectRatio : (window.innerWidth > 700 ? 6 : 2.3),
  usePointStyle: true
    
  }
  function adddata(bgparam,borderparam,chartpoints){
    myChart.data.datasets[0].backgroundColor = bgparam
    myChart.data.datasets[0].borderColor = borderparam
    myChart.data.datasets[0].data = chartpoints
    myChart.update();
  }
  var myChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions
  })

  const sideBarMenu = ()=>{
    const buttons = Array.from(document.querySelectorAll('.sidebar-item'))
    buttons.forEach((button)=>{
      button.onclick = () => {
        buttons.forEach((btn)=>btn.classList.remove('active'))
        button.classList.add('active')
        menuClose() 
      }
    })
  } 
  sideBarMenu()

  const menuToggler = (menu, hamburger, overlay, body)=>{
    hamburger.onclick = () => {
        menu.classList.contains('active') ? (
        menu.classList.remove('active'),
        hamburger.classList.remove('is-active'),
        overlay.classList.remove('active'),
        body.classList.remove('noscroll')
       ) : (
        menu.classList.add('active'),
        hamburger.classList.add('is-active'),
        overlay.classList.add('active'),
        body.classList.add('noscroll')
      )
    }
  }

  menuToggler((document.getElementById('menu')), (document.getElementById('hamb')), (document.getElementById('overlay')),(document.body))

  const menuClose = ()=>{
    document.getElementById('menu').classList.remove('active')
    document.getElementById('hamb').classList.remove('is-active')
    document.getElementById('overlay').classList.remove('active')
    document.body.classList.remove('noscroll')
  }

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
      secondaryColor:'#cbe8ff',
      chartPoints:[-3, 8, 5],
      img:'nublado'
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
      secondaryColor:'#cbe8ff',
      chartPoints:[15, 10, 18],
      img:'lluvioso'
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
      secondaryColor:'#F8ECDD',
      chartPoints:[12, 19, 20],
      img:'nublado'
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
      secondaryColor:'#F8ECDD',
      chartPoints:[16, 20, 24],
      img:'nublado'
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
      secondaryColor:'#cbe8ff',
      chartPoints:[13, 10, 8],
      img:'lluvioso'
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
      secondaryColor:'#ffc5c5',
      chartPoints:[25, 20, 26],
      img:'nublado'
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
      chartPoints:[30, 38, 35],
      img:'soleado'
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
    const titleImg = document.getElementById('title-img')
    

      cards.forEach((card)=>{
      card.onclick = ()=>{
        cards.forEach((item)=>item.classList.remove('active'))
        card.classList.add('active')
        const cardData = data.find((d)=> d.day === card.dataset.day)
        mainTemp.innerText = cardData.temp
        secondaryTemp.innerText = `${cardData.minTemp}º / ${cardData.maxTemp}º `
        humidity.innerText = `${cardData.humidity}%`
        precipitations.innerText = `${cardData.precipitations}%`
        winds.innerText = `${cardData.winds} Km/h`
        root.style.setProperty('--color-primary', cardData.primaryColor)
        root.style.setProperty('--color-secondary', cardData.secondaryColor)
        adddata(cardData.secondaryColor,cardData.primaryColor,cardData.chartPoints)
        titleImg.src = `../assets/img//img/weather/${cardData.img}.svg`
      }
    })
  }
  cardsHandler()
}