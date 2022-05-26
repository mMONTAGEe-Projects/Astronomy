let showingAlert = false;
const interval = setInterval(() => {
    document.title = showingAlert
     ? 'Astronomy': 'Science'

    showingAlert = !showingAlert;
}, 2000);

//if you want to stop the alert
// clearInterval(interval)