
/////////////////////////////////   //////////////////////////////
                            // HEADER //
/////////////////////////////////   //////////////////////////////

// Highlight  svg  navigation menu
const navSvg = document.querySelectorAll('#menu .nav-svg');
for(let i = 0; i < navSvg.length; i += 1){
  navSvg[i].addEventListener('click', (e) => {
    let itemWithCurrentClass = document.querySelector('.current');
    itemWithCurrentClass.classList.remove('current');
    let clickedButton = e.target;
    clickedButton.classList.add('current');
  });
}


// drop down Notification
const clickNotification = document.getElementById("click-notification");
const dropDown = document.getElementById('myDropdown');
const notificationDot = document.querySelector('.notification-dot');
clickNotification.addEventListener('click', (e) => {
 dropDown.classList.toggle("show");
 notificationDot.style.display = 'none';
});



// Hide alert
const Topalert = document.querySelector('.alert');
const closeTopAlert = document.querySelector('.close-alert');

closeTopAlert.addEventListener('click', () => {
  Topalert.style.display = "none";
});


/////////////////////////////////   //////////////////////////////
                            // CHARTS //
/////////////////////////////////   //////////////////////////////

// Charts variables
const hourlyData = ['', 13, 60, 35, 68, 40, 36, 89, 93, 24, 30, 46];
const dailyData = ['', 34, 307, 240, 78, 109, 45, 400, 520, 345, 200, 133];
const weeklyData = ['', 350, 1200, 780, 2200, 650, 1800, 2200, 2800, 500, 900, 1400];
const monthlyData = ['', 3200, 3908, 2018, 1900, 3004, 2098, 1890, 900, 2990, 1000, 2000];
const hourlyDataDoughnut = [15, 28, 22];
const dailyDataDoughnut = [22, 45, 38];
const weeklyDataDoughnut = [104, 187, 220];
const monthlyDataDoughnut = [490, 602, 476];
const chartButtons = document.getElementsByClassName('chart-buttons');
const ctLine = document.getElementById("line-chart");
const ctBar = document.getElementById("bar-chart");
const ctDoughnut = document.getElementById("doughnut-chart");


// default line chart
var myLineChart = new Chart(ctLine, {
    type: 'line',
    data: {
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'weekly',
            data: weeklyData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            lineTension: 0,

            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

            borderWidth: 1

        }]
    },
    options: {

            layout: {
          padding: {
              left: 30,
              right: 50,
              top: 0,
              bottom: 0
          }
      },
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
                ticks: {
                    //beginAtZero:false,
                    scaleBeginAtZero : false

                }
            }],
            xAxes: [{
              ticks: {
                //beginAtZero:false,
                scaleBeginAtZero : false
              }
            }]
        }
    }
});

// ------------------- start function add new line chart --------------
function addNewLineChartFunction(idName, labelName, dataName, ctName, typeName) {
document.querySelector('.current-data-chart').classList.remove('current-data-chart');
var newCurrentClass = document.getElementById(idName);
newCurrentClass.classList.add('current-data-chart');
myLineChart.destroy();
/* */myLineChart = new Chart(ctName, {
    type: typeName,
    data: {
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: labelName,
            data: dataName,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            lineTension: 0,
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

            borderWidth: 1

        }]
    },
    options: {

            layout: {
          padding: {
              left: 30,
              right: 50,
              top: 0,
              bottom: 0
          }
      },
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false

                }
            }],
            xAxes: [{
              ticks: {
                beginAtZero:false
              }
            }]
        }
    }
})

};
// ------------------- end function add new line chart --------------





// default bar chart
var myBarChart = new Chart(ctBar, {
    type: 'bar',
    data: {
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'weekly',
            data: weeklyData,
            backgroundColor: [
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE',
                '#027BCE'

            ],
            lineTension: 0,

            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

            borderWidth: 1

        }]
    },
    options: {

            layout: {
          padding: {
              left: 30,
              right: 50,
              top: 0,
              bottom: 0
          }
      },
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false

                }
            }],
            xAxes: [{
              ticks: {
                beginAtZero:false
              }
            }]
        }
    }
});

// ------------------- start function add new bar chart --------------
function addNewBarChartFunction(idName, labelName, dataName, ctName, typeName) {
document.querySelector('.current-data-chart').classList.remove('current-data-chart');
var newCurrentClass = document.getElementById(idName);
newCurrentClass.classList.add('current-data-chart');
myBarChart.destroy();
/* */myBarChart = new Chart(ctName, {
    type: typeName,
    data: {
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: labelName,
            data: dataName,
            backgroundColor: [
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE',
              '#027BCE'
            ],
            lineTension: 0,
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

            borderWidth: 1

        }]
    },
    options: {

            layout: {
          padding: {
              left: 30,
              right: 50,
              top: 0,
              bottom: 0
          }
      },
      legend: {
        display: false
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false

                }
            }],
            xAxes: [{
              ticks: {
                beginAtZero:false
              }
            }]
        }
    }
})

};
// ------------------- end function add new bar chart --------------


// default doughnut chart
var myDoughnutChart = new Chart(ctDoughnut, {
    type: 'doughnut',
    data: {
        labels: ["phone", "tablet", "desktop"],
        datasets: [{
            label: 'weekly',
            data: [78, 8, 14 ],
            backgroundColor: [
                '#6699CC',
                '#FFF275',
                '#50514F'
            ],

            //lineTension: 0,
          //  borderWidth: 0,



            borderWidth: 1

        }]
    },
    options: {

            layout: {
              padding: {
                  left: 30,
                  right: 20,
                  top: 0,
                  bottom: 0
              }
      },
      legend: {
        display: true,
        position: 'right'

      },

    }
});

// ------------------- start function add new doughnut chart --------------
function addNewDoughnutChartFunction(idName, labelName, dataName, ctName, typeName) {
document.querySelector('.current-data-chart').classList.remove('current-data-chart');
var newCurrentClass = document.getElementById(idName);
newCurrentClass.classList.add('current-data-chart');
myDoughnutChart.destroy();
/* */myDoughnutChart = new Chart(ctName, {
    type: typeName,
    data: {
        labels: ["phone", "tablet", "desktop"],
        datasets: [{
            label: labelName,
            data: dataName,
            backgroundColor: [
              '#6699CC',
              '#FFF275',
              '#50514F'
            ],
            //lineTension: 0,


            borderWidth: 1

        }]
    },
    options: {

            layout: {
          padding: {
              left: 30,
              right: 50,
              top: 0,
              bottom: 0
          }
      },
      legend: {
        display: true,
        position: 'right'
      },

    }
})

};
// ------------------- end function add new doughnut chart --------------



// hourly function Chart
function hourlyFunction() {
addNewLineChartFunction('hourlyId', 'hourly', hourlyData, ctLine, 'line' );
addNewBarChartFunction('hourlyId', 'hourly', hourlyData, ctBar, 'bar' );
addNewDoughnutChartFunction('hourlyId', 'hourly', hourlyDataDoughnut, ctDoughnut, 'doughnut' );
}

// daily function Chart
function dailyFunction() {
addNewLineChartFunction('dailyId', 'daily', dailyData, ctLine, 'line' );
addNewBarChartFunction('dailyId', 'daily', dailyData, ctBar, 'bar' );
addNewDoughnutChartFunction('dailyId', 'daily', dailyDataDoughnut, ctDoughnut, 'doughnut' );
}

// weekly function Chart
function weeklyFunction() {
addNewLineChartFunction('weeklyId', 'weekly', weeklyData, ctLine, 'line' );
addNewBarChartFunction('weeklyId', 'weekly', weeklyData, ctBar, 'bar' );
addNewDoughnutChartFunction('weeklyId', 'weekly', weeklyDataDoughnut, ctDoughnut, 'doughnut' );
}

// monthly function Chart
function monthlyFunction() {
addNewLineChartFunction('monthlyId', 'monthly', monthlyData, ctLine, 'line' );
addNewBarChartFunction('monthlyId', 'monthly', monthlyData, ctBar, 'bar' );
addNewDoughnutChartFunction('monthlyId', 'monthly', monthlyDataDoughnut, ctDoughnut, 'doughnut' );
}




/////////////////////////////////   //////////////////////////////
                            // FORMS //
/////////////////////////////////   //////////////////////////////

// submit message form
function submitForm() {
  const searchUser = document.getElementById('user-search').value;
  const userMessage = document.getElementById('message-textarea').value;
  if(searchUser == "" || searchUser == null || searchUser == "Search for User") {
    alert('please choose a user');
    return false;
  } else if(userMessage == "" || userMessage == null || userMessage == "Message for User") {
    alert('please write your message');
    return false;
  } else if(userMessage && searchUser != null || userMessage && searchUser != "") {
    alert('thank you for your message');
  }
}



// save settings to local storage and display
const settingsForm = document.querySelector('.settings-form');
const setEmail = document.getElementById('onOffEmail');
const setProfile = document.getElementById('onOffProfile');
const inpTimeZone = document.getElementById('timeZone');
const btnSaveSettings = document.getElementById('saveSettings');
const btnCancelSettings = document.getElementById('cancelSettings');

if('localStorage' in window !== null) {
  btnSaveSettings.addEventListener('click', () => {
    window.localStorage.setItem('emailMode', setEmail.checked);
    window.localStorage.setItem('profileMode', setProfile.checked);
    window.localStorage.setItem('selectedTimeZone', inpTimeZone.selectedIndex);
    localStorage.dataExists = true;
  });

  if (localStorage.dataExists){
    setEmail.checked = JSON.parse(localStorage.emailMode);
    setProfile.checked = JSON.parse(localStorage.profileMode);
    inpTimeZone.selectedIndex = localStorage.selectedTimeZone;
  }
}
