var bio = {
    "name": "Ellis Shen",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "xxx-xxx-xxxx",
        "email": "weichu.shenx@gmail.com",
        "github": "https://github.com/EllisShen",
        "twitter": "Ellis.S",
        "location": "New York City"
    },
    "welcomeMessage": "Keep learning to build great software!! ",
    "skills": [
        "Python",
        "JavaScript",
        "Java",
        "FFmpeg",
        "Administration"
    ],
    "bioPic": "images/me.jpg",
    display: function () {
        // Display Name and Role
        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(role);
        $("#header").prepend(name);

        // Display contact Info for top and footer
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var gitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        var contactInfo = mobile + email + twitter + gitHub + location;
        $("#topContacts").append(contactInfo);
        $("#footerContacts").append(contactInfo);

        // Display pic and welcome message
        var pic = HTMLbioPic.replace("%data%", bio.bioPic);
        $('#header').append(pic);
        var welcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#header').append(welcome);

        // Show skills
        if (bio.skills.length > 0) {
            var formattedSkill;
            $("#header").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
}

var education = {
    "schools": [
        {
            "name": "National Taiwan University of Science and Technology",
            "location": "Taipei, Taiwan",
            "degree": "Bachelor",
            "major": "Electronic Engineering",
            "dates": 2005,
            "url": "http://www-e.ntust.edu.tw/home.php"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "date": 2015,
            "url": "www.udacity.com"
        }
    ],
    display: function () {
        for (var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var gradDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var major = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            var formatSchool = schoolName + degree + gradDates + location + major;
            $(".education-entry:last").append(formatSchool);
        }

        //$("#education").append(HTMLschoolStart);
        var courseName = HTMLonlineClasses;
        for (var course in education.onlineCourses) {
            var courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var date = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            var formatOnlineCourse = courseName + courseTitle + school + date + url;
            $(".education-entry:last").append(formatOnlineCourse);
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "New Tang Dynasty Television",
            "title": "Developer / Application Analyst",
            "location": "New York City",
            "dates": "July 2013 - Current",
            "description": "Develop multimedia handling servers with fast video and audio encoding using FFmpeg." +
            "Develop cross platform video playback, trimming and encoding GUI application. " +
            "Design and implement video processing workflow. Application Analyze and migration."
        },
        {
            "employer": "Phoenix Technologies",
            "title": "Software Engineer",
            "location": "Portland, Oregon",
            "dates": "July 2012 - July 2013",
            "description": "Work with Intel to develop UEFI EDKII firmware. " +
            "Responsible for porting silicon reference code and function validation. " +
            "Embedded firmware architecture review and optimization. UEFI BIOS build system enhancement. " +
            "Analysing DSC files and generate self-defi ned language file using Python."
        }
    ],
    display: function () {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedJob = formattedEmployer + formattedTitle + formattedDate + formattedDescription;
            $(".work-entry:last").append(formattedJob);
        }
    }
}

var project = {
    "projects": [
        {
            "title": "NtdPlayer",
            "dates": "January 2015 - February 2015",
            "description": "Cross platform video playback, trimming and encoding GUI application",
            "image": "images/Ntdplayer.png"
        },
        {
            "title": "WorkflowWeb",
            "dates": "February 2015 - Present",
            "description": "Web app with brilliant design and easy-to-use user interface implements file-based workflow for Newsroom",
            "image": "images/WorkflowWeb.png"
        }
    ],
    display: function () {
        $("#projects").append(HTMLprojectStart);
        for (var proj in project.projects) {
            var title = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
            $(".project-entry:last").append(title);
            var date = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
            $(".project-entry:last").append(date);
            var descript = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
            $(".project-entry:last").append(descript);
            var image = HTMLprojectImage.replace("%data%", project.projects[proj].image);
            $(".project-entry:last").append(image);
        }
    }
}

var map = function () {
    $("#mapDiv").append(googleMap);
}

// Display bio information
bio.display();
// Display work information
work.display();
// Display project information
project.display();
// Display education information
education.display();
// Display map
map();


$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
