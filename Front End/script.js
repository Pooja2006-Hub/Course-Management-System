/*==========================================================
 STUDENT COURSE MANAGEMENT SYSTEM
 Common JavaScript File
 Part 1
==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Student Course Management System Loaded");

    showWelcomeMessage();

    displayDateTime();

    smoothScroll();

    logoutConfirmation();

});

/*==========================================================
WELCOME MESSAGE
==========================================================*/

function showWelcomeMessage() {

    const title = document.title;

    console.log("Current Page :", title);

}

/*==========================================================
CURRENT DATE & TIME
==========================================================*/

function displayDateTime() {

    let dateBox = document.getElementById("dateTime");

    if (dateBox) {

        setInterval(function () {

            let today = new Date();

            dateBox.innerHTML = today.toLocaleString();

        }, 1000);

    }

}

/*==========================================================
SMOOTH SCROLL
==========================================================*/

function smoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            let target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

}

/*==========================================================
LOGOUT CONFIRMATION
==========================================================*/

function logoutConfirmation() {

    const logoutLinks = document.querySelectorAll('a[href="index.html"]');

    logoutLinks.forEach(function (button) {

        button.addEventListener("click", function (e) {

            let answer = confirm("Do you want to Logout?");

            if (!answer) {

                e.preventDefault();

            }

        });

    });

}

/*==========================================================
SHOW ALERT
==========================================================*/

function showAlert(message) {

    alert(message);

}

/*==========================================================
SUCCESS MESSAGE
==========================================================*/

function successMessage(message) {

    alert("✅ " + message);

}

/*==========================================================
ERROR MESSAGE
==========================================================*/

function errorMessage(message) {

    alert("❌ " + message);

}

/*==========================================================
EMAIL VALIDATION
==========================================================*/

function validateEmail(email) {

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return pattern.test(email);

}

/*==========================================================
PASSWORD VALIDATION
==========================================================*/

function validatePassword(password) {

    return password.length >= 6;

}

/*==========================================================
EMPTY FIELD VALIDATION
==========================================================*/

function isEmpty(value) {

    return value.trim() === "";

}
/*==========================================================
 PART 2
 Registration • Login • Forgot Password
==========================================================*/

/*==========================================================
STUDENT REGISTRATION
==========================================================*/

function registerStudent(event){

    if(event){
        event.preventDefault();
    }

    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let confirmPassword=document.getElementById("confirmPassword");

    if(name && isEmpty(name.value)){
        errorMessage("Enter your Name");
        name.focus();
        return false;
    }

    if(email && !validateEmail(email.value)){
        errorMessage("Enter a valid Email");
        email.focus();
        return false;
    }

    if(password && !validatePassword(password.value)){
        errorMessage("Password must contain at least 6 characters");
        password.focus();
        return false;
    }

    if(confirmPassword && password.value!==confirmPassword.value){
        errorMessage("Passwords do not match");
        confirmPassword.focus();
        return false;
    }

    successMessage("Registration Successful");

    setTimeout(function(){

        window.location.href="login.html";

    },1000);

    return false;

}

/*==========================================================
LOGIN
==========================================================*/

function loginUser(event){

    if(event){
        event.preventDefault();
    }

    let email=document.getElementById("email");
    let password=document.getElementById("password");

    if(email && !validateEmail(email.value)){
        errorMessage("Invalid Email");
        email.focus();
        return false;
    }

    if(password && isEmpty(password.value)){
        errorMessage("Enter Password");
        password.focus();
        return false;
    }

    successMessage("Login Successful");

    setTimeout(function(){

        window.location.href="student_dashboard.html";

    },1000);

    return false;

}

/*==========================================================
FORGOT PASSWORD
==========================================================*/

function forgotPassword(event){

    if(event){
        event.preventDefault();
    }

    let email=document.getElementById("email");

    if(email && !validateEmail(email.value)){
        errorMessage("Enter a valid Email");
        email.focus();
        return false;
    }

    successMessage("Password Reset Link Sent");

    setTimeout(function(){

        window.location.href="login.html";

    },1000);

    return false;

}

/*==========================================================
RESET PASSWORD
==========================================================*/

function resetPassword(event){

    if(event){
        event.preventDefault();
    }

    let password=document.getElementById("password");
    let confirmPassword=document.getElementById("confirmPassword");

    if(password && !validatePassword(password.value)){
        errorMessage("Password must contain at least 6 characters");
        password.focus();
        return false;
    }

    if(confirmPassword && password.value!==confirmPassword.value){
        errorMessage("Passwords do not match");
        confirmPassword.focus();
        return false;
    }

    successMessage("Password Updated Successfully");

    setTimeout(function(){

        window.location.href="login.html";

    },1000);

    return false;

}

/*==========================================================
SHOW / HIDE PASSWORD
==========================================================*/

function togglePassword(id){

    let input=document.getElementById(id);

    if(!input){
        return;
    }

    if(input.type==="password"){
        input.type="text";
    }else{
        input.type="password";
    }

}
/*==========================================================
 PART 3
 Dashboard • Courses • Learning • Progress
==========================================================*/

/*==========================================================
WELCOME STUDENT
==========================================================*/

function welcomeStudent(){

    let studentName = localStorage.getItem("studentName");

    let welcome = document.getElementById("welcomeStudent");

    if(welcome){

        if(studentName==null){

            welcome.innerHTML="Welcome Student 👋";

        }

        else{

            welcome.innerHTML="Welcome " + studentName + " 👋";

        }

    }

}

/*==========================================================
COURSE SEARCH
==========================================================*/

function searchCourse(){

    let input=document.getElementById("searchCourse");

    if(!input) return;

    let filter=input.value.toUpperCase();

    let cards=document.getElementsByClassName("course-card");

    for(let i=0;i<cards.length;i++){

        let title=cards[i].getElementsByTagName("h3")[0];

        if(title){

            let txt=title.textContent || title.innerText;

            if(txt.toUpperCase().indexOf(filter)>-1){

                cards[i].style.display="block";

            }

            else{

                cards[i].style.display="none";

            }

        }

    }

}

/*==========================================================
ENROLL COURSE
==========================================================*/

function enrollCourse(course){

    successMessage("Successfully Enrolled in " + course);

}

/*==========================================================
CONTINUE LEARNING
==========================================================*/

function continueLearning(course){

    successMessage("Opening " + course);

}

/*==========================================================
MARK LESSON COMPLETED
==========================================================*/

function completeLesson(){

    successMessage("Lesson Completed Successfully");

}

/*==========================================================
NEXT LESSON
==========================================================*/

function nextLesson(){

    alert("Next Lesson Opened");

}

/*==========================================================
PREVIOUS LESSON
==========================================================*/

function previousLesson(){

    alert("Previous Lesson Opened");

}

/*==========================================================
DOWNLOAD NOTES
==========================================================*/

function downloadNotes(){

    alert("Notes Download Started");

}

/*==========================================================
PROGRESS BAR ANIMATION
==========================================================*/

function animateProgress(){

    let bars=document.querySelectorAll(".progress-bar");

    bars.forEach(function(bar){

        let width=bar.style.width;

        bar.style.width="0%";

        setTimeout(function(){

            bar.style.width=width;

        },300);

    });

}

/*==========================================================
COURSE COMPLETION MESSAGE
==========================================================*/

function courseCompleted(){

    successMessage("Congratulations! Course Completed 🎉");

}

/*==========================================================
START COURSE
==========================================================*/

function startCourse(course){

    alert("Starting " + course);

}

/*==========================================================
VIEW COURSE
==========================================================*/

function viewCourse(course){

    alert("Opening " + course);

}

/*==========================================================
QUIZ RESULT
==========================================================*/

function showQuizResult(){

    alert("Quiz Score : 92%");

}

/*==========================================================
CERTIFICATE AVAILABLE
==========================================================*/

function checkCertificate(){

    alert("Certificate Available");

}

/*==========================================================
PAGE LOAD
==========================================================*/

document.addEventListener("DOMContentLoaded",function(){

    welcomeStudent();

    animateProgress();

});
/*==========================================================
 PART 4
 Certificate • Notifications • Admin Dashboard
==========================================================*/

/*==========================
PRINT CERTIFICATE
==========================*/

function printCertificate(){

    window.print();

}

/*==========================
DOWNLOAD CERTIFICATE
==========================*/

function downloadCertificate(){

    alert("Certificate Download Started");

}

/*==========================
SHARE CERTIFICATE
==========================*/

function shareCertificate(){

    alert("Certificate Shared Successfully");

}

/*==========================
VIEW CERTIFICATE
==========================*/

function viewCertificate(){

    alert("Opening Certificate");

}

/*==========================
SHOW NOTIFICATION
==========================*/

function showNotification(message){

    alert(message);

}

/*==========================
MARK ALL AS READ
==========================*/

function markAllRead(){

    let notifications=document.querySelectorAll(".notification");

    notifications.forEach(function(item){

        item.style.opacity="0.6";

    });

    alert("All Notifications Marked as Read");

}

/*==========================
DELETE NOTIFICATION
==========================*/

function deleteNotification(id){

    let notification=document.getElementById(id);

    if(notification){

        notification.remove();

    }

}

/*==========================
NOTIFICATION COUNT
==========================*/

function notificationCount(){

    let total=document.querySelectorAll(".notification").length;

    let count=document.getElementById("notificationCount");

    if(count){

        count.innerHTML=total;

    }

}

/*==========================
SEARCH STUDENT
==========================*/

function searchStudent(){

    let input=document.getElementById("studentSearch");

    if(!input) return;

    let filter=input.value.toUpperCase();

    let table=document.getElementById("studentTable");

    if(!table) return;

    let rows=table.getElementsByTagName("tr");

    for(let i=1;i<rows.length;i++){

        let firstCell=rows[i].getElementsByTagName("td")[1];

        if(firstCell){

            let value=firstCell.innerHTML.toUpperCase();

            if(value.indexOf(filter)>-1){

                rows[i].style.display="";

            }

            else{

                rows[i].style.display="none";

            }

        }

    }

}

/*==========================
ADD COURSE
==========================*/

function addCourse(){

    alert("New Course Added Successfully");

}

/*==========================
DELETE COURSE
==========================*/

function deleteCourse(course){

    let answer=confirm("Delete "+course+" ?");

    if(answer){

        alert(course+" Deleted Successfully");

    }

}

/*==========================
UPDATE COURSE
==========================*/

function updateCourse(course){

    alert(course+" Updated Successfully");

}

/*==========================
ADD STUDENT
==========================*/

function addStudent(){

    alert("Student Added Successfully");

}

/*==========================
DELETE STUDENT
==========================*/

function deleteStudent(name){

    let answer=confirm("Delete "+name+" ?");

    if(answer){

        alert(name+" Deleted Successfully");

    }

}

/*==========================
UPDATE STUDENT
==========================*/

function updateStudent(name){

    alert(name+" Updated Successfully");

}

/*==========================
SEND ANNOUNCEMENT
==========================*/

function sendAnnouncement(){

    alert("Announcement Sent Successfully");

}

/*==========================
TOTAL STUDENTS
==========================*/

function totalStudents(){

    let total=document.getElementById("totalStudents");

    if(total){

        total.innerHTML="250";

    }

}

/*==========================
TOTAL COURSES
==========================*/

function totalCourses(){

    let total=document.getElementById("totalCourses");

    if(total){

        total.innerHTML="15";

    }

}

/*==========================
TOTAL CERTIFICATES
==========================*/

function totalCertificates(){

    let total=document.getElementById("totalCertificates");

    if(total){

        total.innerHTML="120";

    }

}

/*==========================
PAGE LOAD
==========================*/

document.addEventListener("DOMContentLoaded",function(){

    notificationCount();

    totalStudents();

    totalCourses();

    totalCertificates();

});
/*==========================================================
 STUDENT COURSE MANAGEMENT SYSTEM
 Common JavaScript File
 Part 5 (Final)
==========================================================*/

/*==========================
LIVE CLOCK
==========================*/

function updateClock(){

    let clock=document.getElementById("clock");

    if(clock){

        setInterval(function(){

            let now=new Date();

            clock.innerHTML=now.toLocaleTimeString();

        },1000);

    }

}

/*==========================
CURRENT DATE
==========================*/

function updateDate(){

    let today=document.getElementById("todayDate");

    if(today){

        let now=new Date();

        today.innerHTML=now.toDateString();

    }

}

/*==========================
WELCOME POPUP
==========================*/

function welcomePopup(){

    if(sessionStorage.getItem("visited")){

        return;

    }

    sessionStorage.setItem("visited","yes");

    setTimeout(function(){

        alert("🎉 Welcome to Student Course Management System");

    },1000);

}

/*==========================
DARK MODE
==========================*/

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}

/*==========================
GO TO TOP
==========================*/

function scrollTopButton(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/*==========================
LOADING MESSAGE
==========================*/

function loadingMessage(){

    console.log("Loading...");

}

/*==========================
LOGOUT
==========================*/

function logout(){

    let answer=confirm("Do you really want to Logout?");

    if(answer){

        window.location.href="index.html";

    }

}

/*==========================
PRINT PAGE
==========================*/

function printPage(){

    window.print();

}

/*==========================
COPY TEXT
==========================*/

function copyText(id){

    let text=document.getElementById(id);

    if(text){

        navigator.clipboard.writeText(text.innerText);

        alert("Copied Successfully");

    }

}

/*==========================
ENABLE BUTTON
==========================*/

function enableButton(id){

    let button=document.getElementById(id);

    if(button){

        button.disabled=false;

    }

}

/*==========================
DISABLE BUTTON
==========================*/

function disableButton(id){

    let button=document.getElementById(id);

    if(button){

        button.disabled=true;

    }

}

/*==========================
PAGE LOADED
==========================*/

window.onload=function(){

    loadingMessage();

    updateClock();

    updateDate();

    welcomePopup();

}