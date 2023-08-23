// Create the personalTrainer object
const personalTrainer = {
    name: 'John',
    workouts: ['Squats', 'Pushups', 'Planks', 'Cycling'],
    outputDiv: document.getElementById('output'), // Reference to the output div
  
    // Method to start the workout
    startWorkout: function (inputWorkout) {
      if (this.workouts.includes(inputWorkout)) {
        this.outputDiv.textContent = `${this.name} is starting ${inputWorkout}.`;
      } else {
        this.outputDiv.textContent = `${this.name} doesn't know the ${inputWorkout} workout.`;
      }
    }
  };
  
  // Event listener for the button click
  document.getElementById('btn-start').addEventListener('click', function () {
    const inputWorkout = document.getElementById('input-workout').value;
    personalTrainer.startWorkout(inputWorkout);
  });