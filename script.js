let studyPlans = [];
let goals = [];
let achievements = [];
let totalStudyHours = 0;
let subjectsCovered = 0;
let timerInterval;

function addStudyPlan() {
    const subject = document.getElementById('subjectInput').value.trim();
    const topic = document.getElementById('topicInput').value.trim();
    const dateTime = document.getElementById('dateTimeInput').value;

    if (!subject || !topic || !dateTime) {
        alert('Please fill in all fields.');
        return;
    }

    const studyPlan = {
        subject,
        topic,
        dateTime
    };

    studyPlans.push(studyPlan);
    displayStudyPlans();
    clearInputFields();
}

function displayStudyPlans() {
    const studyPlansContainer = document.getElementById('studyPlans');
    studyPlansContainer.innerHTML = '<h2>Study Plans</h2>';

    studyPlans.forEach(plan => {
        const planDiv = document.createElement('div');
        planDiv.classList.add('study-plan');
        planDiv.innerHTML = `
            <p><strong>Subject:</strong> ${plan.subject}</p>
            <p><strong>Topic:</strong> ${plan.topic}</p>
            <p><strong>Date & Time:</strong> ${plan.dateTime}</p>
        `;
        studyPlansContainer.appendChild(planDiv);
    });
}

function clearInputFields() {
    document.getElementById('subjectInput').value = '';
    document.getElementById('topicInput').value = '';
    document.getElementById('dateTimeInput').value = '';
}

function setWeeklyGoals() {
    const weeklyGoalsInput = document.getElementById('weeklyGoalsInput').value.trim();

    if (!weeklyGoalsInput) {
        alert('Please enter your weekly goals.');
        return;
    }

    goals.push(weeklyGoalsInput);
    displayWeeklyGoals();
    document.getElementById('weeklyGoalsInput').value = '';
}

function displayWeeklyGoals() {
    const weeklyGoalsContainer = document.getElementById('weeklyGoals');
    weeklyGoalsContainer.innerHTML = '<h2>Weekly Goals</h2>';

    goals.forEach(goal => {
        const goalItem = document.createElement('li');
        goalItem.textContent = goal;
        weeklyGoalsContainer.appendChild(goalItem);
    });
}

function startFocusTimer() {
    let seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;
        document.getElementById('timerDisplay').textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
    }, 1000);

    document.getElementById('startTimerBtn').disabled = true;
    document.getElementById('stopTimerBtn').disabled = false;
}

function stopFocusTimer() {
    clearInterval(timerInterval);
    document.getElementById('startTimerBtn').disabled = false;
    document.getElementById('stopTimerBtn').disabled = true;
}

function addGoal() {
    const goalInput = document.getElementById('goalInput').value.trim();

    if (!goalInput) {
        alert('Please enter a goal.');
        return;
    }

    goals.push(goalInput);
    displayGoals();
    document.getElementById('goalInput').value = '';
}

function displayGoals() {
    const goalsContainer = document.getElementById('goals');
    goalsContainer.innerHTML = '<h2>Goals</h2>';

    goals.forEach(goal => {
        const goalItem = document.createElement('li');
        goalItem.innerHTML = `
            <input type="checkbox" onchange="toggleGoal(this)">
            <label>${goal}</label>
        `;
        goalsContainer.appendChild(goalItem);
    });
}

function toggleGoal(checkbox) {
    const label = checkbox.nextElementSibling;
    const goalText = label.textContent;
    const index = goals.findIndex(goal => goal === goalText);

    if (index !== -1) {
        goals.splice(index, 1);
        displayGoals();
    }
}

function addAchievement() {
    const achievementInput = prompt('Enter your achievement:');
    if (!achievementInput) return;

    achievements.push(achievementInput);
    displayAchievements();
}

function displayAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '<h2>Achievements</h2>';

    achievements.forEach(achievement => {
        const achievementItem = document.createElement('li');
        achievementItem.textContent = achievement;
        achievementsList.appendChild(achievementItem);
    });
}

function updateStatistics(hours, subjects) {
    totalStudyHours += hours;
    subjectsCovered += subjects;

    document.getElementById('totalStudyHours').textContent = totalStudyHours;
    document.getElementById('subjectsCovered').textContent = subjectsCovered;
}

function showMotivationalNotification() {
    const notifications = [
        'Stay focused! You\'re doing great.',
        'Keep up the good work!',
        'Success is the sum of small efforts repeated day in and day out.',
        'You\'re one step closer to your goals.'
    ];

    const randomIndex = Math.floor(Math.random() * notifications.length);
    alert(notifications[randomIndex]);
}
