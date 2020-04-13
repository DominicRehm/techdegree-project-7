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




















// Traffic Chart

const trafficNav = document.querySelector('.traffic-nav')
const trafficRange = document.getElementsByClassName('selectRange');

var dataHourly = [350, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 1250, 1500, 2500];
var dataDaily = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
var dataWeekly = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
var dataMonthly = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];

trafficNav.addEventListener('click', (e) => {
    if (event.target.tagName = 'LI' && event.target.value == 'Hourly') {
        alert('test');
    } else {
        alert('möh')
    }
})











var trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data:  [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],                
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
            duration: 0
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

// Daily Traffic Chart

var dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 115, 175, 125, 190, 200, 100],
            backgroundColor: '#7477bf',
            borderWidth: 1,
            barPercentage: 0.7
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
})

// Mobile Users Chart

var mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            data: [2000, 450, 650],
            backgroundColor: [
                '#298A08',
                '#088A85',
                '#7477bf'
            ]
        }]
    },
    options: {
        legend: {
            position: 'right',
            align: 'center',
            labels: {
                boxWidth: 13,
                boxHeight: 18,
                padding: 15
            }
        }
    }
})

// User Warning

const userSearch = document.getElementById('user-search');
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


