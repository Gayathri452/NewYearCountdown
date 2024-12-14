const countdown = () => {
    const newYear = new Date("January 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYear - now;
    if (difference <= 0) {
        document.getElementById("countdown").textContent = "🎆 Happy New Year! 🎆";
        return;
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
};
// Show Demo Message
document.getElementById("demo-btn").addEventListener("click", () => {
    document.getElementById("demo-message").classList.toggle("hidden");
});
// Update the countdown every second
setInterval(countdown, 1000);
