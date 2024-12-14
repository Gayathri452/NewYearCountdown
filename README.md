This is a responsive webpage that displays a New Year Countdown and a personalized profile section.

HTML structure:The page is divided into two main sections: the Left Section for the countdown timer and interactive demo button, and the Right Section for the personalized profile.

Under the left section :Heading (<h1>): Displays the page title "New Year Countdown ,Countdown Timer (<div id="countdown" class="timer">): display of days,hours, minutes, and seconds.Button (<button id="demo-btn">): A button that, when clicked, reveals a demo message, celebrating the New Year.Hidden Message (<p id="demo-message" class="hidden">) this is initially hidden which will display the "🎉 Happy New Year! 🎉" message once the button is clicked.Loading Image (<div class="loading-image">): Contains an image (likely a visual representation of a transition from 2024 to 2025) to engage the user while waiting.

Under the right section:Profile Picture (<div class="profile-pic">): Personal Information:
Name (<h2>): Displays the name "M. Amara Gayathri" and Branch (<p>): Skills: An unordered list <ul> with the  technical skills.Hobbies: Another unordered list <ul> to highlight personal interests.

CSS Link (<link rel="stylesheet" href="style.css">)to style the layout, elements, and responsiveness.

 Using JavaScript, the remaining time until the New Year is calculated and displayed in the #countdown div. The timer is updated every second. When the button (#demo-btn) is clicked, JavaScript toggles the visibility of the hidden message (#demo-message) using DOM manipulation, showing the "Happy New Year!" message.