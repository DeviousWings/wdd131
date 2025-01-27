    // Get the current day of the week
    const date = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[date.getDay()];

    // Determine the message based on the day
    let message;
    switch (currentDay) {
      case "Monday":
        message = "Start of the work week!";
        break;
      case "Friday":
        message = "Almost weekend!";
        break;
      case "Saturday":
      case "Sunday":
        message = "Weekend vibes!";
        break;
      default:
        message = "It's just another day.";
    }

    // Display the current day and message
    document.getElementById("currentDay").textContent = `Today is: ${currentDay}`;
    document.getElementById("message").textContent = message;