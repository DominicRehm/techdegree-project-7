const trafficCanvas = document.querySelector('#traffic-canvas');
const dailyCanvas = document.getElementById('dailyChart');
const mobileCanvas = document.getElementById('mobileChart');


const alertBanner = document.querySelector('.alert-banner')
alertBanner.innerHTML = 
`
<div class="alert">
    <p><strong>Alert! </strong>Take a look into your message area. There are a few new messages!</p>
    <p class="alert-banner-close">X</p>
</div>
`
alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none" }
})

const bellDropdown = document.querySelector('.bell-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');


bellDropdown.addEventListener('mouseover', () => {
    dropdownContent.style.display = 'block';
})

bellDropdown.addEventListener('mouseout', () => {
    dropdownContent.style.display = 'none';
})


//TRAFFIC CHART

const currentData = [
    [50, 80, 120, 100, 70, 90, 140, 100, 40, 60, 80],
    [450, 300, 160, 200, 220, 260, 240, 200, 180, 400, 350],
    [700, 950, 600, 750, 1000, 850, 1100, 1500, 1000, 1200, 1600],
    [1600, 2200, 1300, 1700, 2400, 2900, 2400, 2800, 2500, 2600, 1400]
  ];
  
  var trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: currentData[2],                
            lineTension: 0,
            borderColor: '#7477bf',
            borderWidth: 1,
            backgroundColor: '#7477bf50',
            pointBorderColor: '#7477bf',
            pointBackgroundColor: '#fff',
            pointRadius: 6,
            pointBorderWidth: 2,
        }]
    },
    options: {
        
        animation: {
            duration: 500
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false
        }
    }

})

function addData(chart, data) {
    chart.data.datasets.forEach(dataset => {
      dataset.data = data;
    });
    chart.update();
  }
  
  function removeData(chart) {
    chart.data.datasets.forEach(dataset => {
      dataset.data = [];
    });
    chart.render();
  }

  const listItems = document.querySelectorAll(".traffic-nav-li");
  
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function(e) {
      const current = document.querySelector(".active");
      current.className = e.target.className.replace(" active", "");
      this.className += " active";
      removeData(trafficChart);
      addData(trafficChart, currentData[i]);
    });
  }

// Daily Traffic Chart


// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
    const dailyOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        }
    }

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Users Chart

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
        position: 'right',
        labels: {
            boxWidth: 13,
            fontStyle: 'bold'
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// User Warning

const userSearch = document.querySelector('.user-search');
const userTextarea = document.getElementById('user-textarea');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    if (userSearch.value == '' && userTextarea.value == '') {
        alert('Please fill out the user-field and textarea!');
        userSearch.style.borderColor = 'red';
        userTextarea.style.borderColor = 'red';
    } else if (userSearch.value == '') {
        alert('Please fill out the user-field');
        userSearch.style.borderColor = 'red';
        userTextarea.style.borderColor = 'green';
    } else if (userTextarea.value == '') {
        alert('Please fill out the textarea!');
        userSearch.style.borderColor = 'green';
        userTextarea.style.borderColor = 'red';
    } else {
        alert('Message successfully sent!')
        userSearch.style.borderColor = 'green';
        userTextarea.style.borderColor = 'green';
        userSearch.value = '';
        userTextarea.value = '';
    }
})

// Local Storage

const emailChecked = document.getElementById('notiChecked');
const publicChecked = document.getElementById('publicChecked');
const timeZone = document.getElementById('timezone');
const saveButton = document.getElementById('save-button');
const cancelButton = document.getElementById('cancel-button');


saveButton.addEventListener('click', () => {
    let mailIsChecked = emailChecked.checked;
    let publicIsChecked = publicChecked.checked;
    let saveTimezone = timeZone.value;
    localStorage.setItem('emailChecked', mailIsChecked);
    localStorage.setItem('publicChecked', publicIsChecked);  
    localStorage.setItem('timezone', saveTimezone);  
})

cancelButton.addEventListener('click', () => {
    localStorage.clear();
    emailChecked.checked = false;
    publicChecked.checked = false;
    timeZone.value = timeZone.firstChild;
})

var mailSettingStorage = JSON.parse(localStorage.getItem('emailChecked'));
emailChecked.checked = mailSettingStorage;
var publicSettingStorage = JSON.parse(localStorage.getItem('publicChecked'));
publicChecked.checked = publicSettingStorage;
var timeZoneStorage = localStorage.getItem('timezone');
timeZone.value = timeZoneStorage;


var input = document.getElementById('autoComplete');
var autocomplete = new Awesomplete(input, {
	list: ['Victora Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Jason Freeman', 'Josh Sullivan']
});


