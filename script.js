// script.js 
let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;
let enteredTime = null;

function startTimer() {
  console.log("startTimer");
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  console.log("updateTimer");
  const timerElement = document.getElementById('timer');
  timerElement.textContent = formatTime(minutes, seconds);

  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    alert('Time is up! Take a break.');
  } else if (!isPaused) {
    if (seconds > 0) {
      // console.log()
      seconds--;
    } else {
      seconds = 59;
      minutes--;
    }
  }
  console.log("minutes: ", minutes);
  console.log("seconds: ", seconds);
}

function formatTime(minutes, seconds) {
  console.log("formatTime");
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function togglePauseResume() {
  console.log()
  const pauseResumeButton =
    document.querySelector('.control-buttons button');
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(timer);
    pauseResumeButton.textContent = 'Resume';
  } else {
    startTimer();
    pauseResumeButton.textContent = 'Pause';
  }
}

function restartTimer() {
  console.log("restartTimer");
  clearInterval(timer);
  minutes = enteredTime || 25;
  seconds = 0;
  isPaused = false;
  const timerElement =
    document.getElementById('timer');
  timerElement.textContent =
    formatTime(minutes, seconds);
  const pauseResumeButton =
    document.querySelector('.control-buttons button');
  pauseResumeButton.textContent = 'Pause';
  startTimer();
}

function chooseTime() {
  console.log("chooseTime");
  const newTime = prompt('Enter new time in minutes:');
  if (!isNaN(newTime) && newTime > 0) {
    enteredTime = parseInt(newTime);
    minutes = enteredTime;
    seconds = 0;
    isPaused = false;
    const timerElement =
      document.getElementById('timer');
    timerElement.textContent =
      formatTime(minutes, seconds);
    clearInterval(timer);
    const pauseResumeButton =
      document.querySelector('.control-buttons button');
    pauseResumeButton.textContent = 'Pause';
    startTimer();
  } else {
    alert('Invalid input. Please enter' +
      ' a valid number greater than 0.');
  }
}

function toggleExpand() {
  const expandedIframe = document.getElementById('expandedIframe');
  const expandButton = document.getElementById('expandButton');

  if (expandedIframe.classList.contains('expanded')) {
    expandedIframe.classList.remove('expanded');
    expandButton.textContent = 'Expand Playlist';
    expandedIframe.style.width = '0%';
    expandedIframe.style.height = '0';
  } else {
    expandedIframe.classList.add('expanded');
    expandButton.textContent = 'Collapse Playlist';
    expandedIframe.style.width = '25%';
    expandedIframe.style.height = '352px';
  }
}

function togglePomo() {
  const expandedPomFrame = document.getElementById('expandPomFrame');
  const expandPomodoro = document.getElementById('expandPomodoro');
  if (expandedPomFrame.classList.contains('expanded')) {
    expandedPomFrame.classList.remove('expanded');
    expandPomodoro.textContent = 'Expand Pomodoro';
    expandedPomFrame.style.width = '0%';
    expandedPomFrame.style.height = '0';
  } else {
    expandedPomFrame.classList.add('expanded');
    expandPomodoro.textContent = 'Collapse Pomodoro';
    expandedPomFrame.style.width = '25%';
    expandedPomFrame.style.height = '352px';
  }
}

function toggleAboutUs() {
  const expandedIframe = document.getElementById('expandedIframe');
  const expandButton = document.getElementById('expandButton');

  if (expandedIframe.classList.contains('expanded')) {
    expandedIframe.classList.remove('expanded');
    expandButton.textContent = 'Expand Playlist';
    expandedIframe.style.width = '0%';
    expandedIframe.style.height = '0';
  } else {
    expandedIframe.classList.add('expanded');
    expandButton.textContent = 'Collapse Playlist';
    expandedIframe.style.width = '25%';
    expandedIframe.style.height = '352px';
  }
}

startTimer();
console.log("Started the timer");

// Code to manage the tasks list
let tasks = [];

function renderTasks() {
  const tasksHolder = document.getElementById('tasksHolder');
  tasksHolder.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    if (task.completed) {
      taskElement.classList.add('completed');
    }
    taskElement.innerHTML = `
      <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
      <label for="task-${index}">${task.text}</label>
    `;
    tasksHolder.appendChild(taskElement);
  });
}

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function toggleList() {
  const tasksContainer = document.getElementById('tasks-container');
  const addTaskElements = document.getElementById('add-task-elements');

  if (tasksContainer.style.display === 'none') {
    tasksContainer.style.display = 'block';
    addTaskElements.style.display = 'block';
  } else {
    tasksContainer.style.display = 'none';
    addTaskElements.style.display = 'none';
  }
}
/*
function timer() {
  var sec = 30;
  var timer = setInterval(function() {
    document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}
timer();
*/