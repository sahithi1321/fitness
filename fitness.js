document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workout-form');
    const goalsForm = document.getElementById('goals-form');
    const progressDiv = document.getElementById('progress');

    const workouts = [];
    const goals = [];

    workoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const date = document.getElementById('workout-date').value;
        const type = document.getElementById('workout-type').value;
        const duration = document.getElementById('workout-duration').value;
        
        const workout = {
            date,
            type,
            duration
        };
        
        workouts.push(workout);
        updateProgress();
        
        workoutForm.reset();
    });

    goalsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const type = document.getElementById('goal-type').value;
        const target = document.getElementById('goal-target').value;
        
        const goal = {
            type,
            target
        };
        
        goals.push(goal);
        updateProgress();
        
        goalsForm.reset();
    });

    const updateProgress = () => {
        progressDiv.innerHTML = '<h3>Workouts</h3>';
        workouts.forEach(workout => {
            const workoutDiv = document.createElement('div');
            workoutDiv.textContent = `Date: ${workout.date}, Type: ${workout.type}, Duration: ${workout.duration} minutes`;
            progressDiv.appendChild(workoutDiv);
        });

        progressDiv.innerHTML += '<h3>Goals</h3>';
        goals.forEach(goal => {
            const goalDiv = document.createElement('div');
            goalDiv.textContent = `Goal Type: ${goal.type}, Target: ${goal.target}`;
            progressDiv.appendChild(goalDiv);
        });
    };
});