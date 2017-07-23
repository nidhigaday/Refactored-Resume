$(function() {


    /*===============MODEL===============*/

    var model = {
        bio: { // JSON Object data
            "name": "Nidhi Gaday",
            "role": "Front End Web Developer",
            "contacts": //JSON comtacts object within bio object
            {
                "mobile": "647 000 000",
                "email": "nidhi.gaday@gmail.com",
                "github": "nidhigaday",
                "linkedin": "NidhiGaday",
                "location": "Toronto"
            },
            "message": "Hi! Thank you for visiting my resume. If you like it, lets chat!",
            "skills": [" HTML", " CSS", " Javascript", " jQuery"],
            "bioPic": "images/propic.png"
        },
        work: [{ // JSON Object data
                "title": "Web Support Analyst",
                "employer": "Q4 Inc.",
                "years": "Aug 2016 - June 2017",
                "city": "Toronto",
                "website": "http://q4inc.com",
                "description": "HTML, CSS, Javascript, jQuery, JIRA, Zendesk, API, JSON, CMS, Problem Solving"
            },
            {
                "title": "Technical Support",
                "employer": "Pearson Embanet",
                "years": "Aug 2014 - Aug 2016",
                "city": "Toronto",
                "website": "http://embanet.com/",
                "description": "LMS, RightNow, Technial Support, Troubleshooting, Multi-tasking"
            }
        ],
        education: {
            "schools": [{
                    "school": "Centennial College",
                    "study": "Computer System Technology : Networking Diploma",
                    "years": "Jan 2012 - Dec 2013",
                    "city": "Toronto"
                },
                {
                    "school": "Punjab Technical University",
                    "study": "Bachelor's degree : Information Technology",
                    "years": "2007 - 2011",
                    "city": "Chandigarh"
                }
            ],
            "OnlineCourses": [{
                "study": "Front End Web Developer : NanoDegree",
                "school": "Udacity",
                "years": "Current",
                "url": "https://www.udacity.com/"
            }]
        },
        projects: [{
            "title": "Pup Clicker",
            "dates": "2017",
            "description": "Javascript, jQuery, MVC",
            "url": "https://github.com/nidhigaday/Pup-Clicker",
            "image": "images/pupclicker.JPG"
        },{
            "title": "Responsive Mock-up",
            "dates": "2016",
            "description": "Mobile-first CSS, Responsive, No-page load",
            "url": "https://github.com/nidhigaday/responsive-mockup",
            "image": "images/responsive.JPG"
        },{
            "title": "Website Optimization",
            "dates": "2015",
            "description": "File Minificaiton, Page Speed Score",
            "url": "https://github.com/nidhigaday/Website_optimization",
            "image": "images/optimization.JPG"
        },{
            "title": "Frogger",
            "dates": "2015",
            "description": "HTML5, Object Oriented Javascript",
            "url": "https://github.com/nidhigaday/frogger",
            "image": "images/frogger.JPG"
        }]
    };





    /*===============View===============*/

    var view = {
        init: function() {
            $("#nameFormat").append(internationalizeButton);
            $('button').click(octopus.nameFormat);
        },
        renderName: function(info) {
            for (var i = 0; i < info.length; i++) {
                $("#header").prepend(info[i]);
            }
        },
        renderPic: function(info) {
            for (var i = 0; i < info.length; i++) {
                $("#header").append(info[i]);
            }
        },
        renderContact: function(info) {
            for (var i = 0; i < info.length; i++) {
                $("#topContacts").append(info[i]);
                $("#footerContacts").append(info[i]);
            }
        },
        renderSkills: function(info) {
            for (var n = 0; n < info.length; n++) {
                $("#skills").append(info[n]);
                // console.log(this);
                //             view.animate();
            }
        },
        renderWork: function(info) {
            $("#workExperience").append(HTMLworkStart);
            for (var j = 0; j < info.length; j++) {
                $(".work-entry:last").append(info[j]);
            }
        },
        renderProjects: function(info) {
            $("#projects").append(HTMLprojectStart);
            for (var x = 0; x < info.length; x++) {
                $(".project-entry:last").append(info[x]);
            }
        },
        renderSchools: function(info) {
            $("#education").append(HTMLschoolStart);
            for (var s = 0; s < info.length; s++) {
                $(".education-entry:last").append(info[s]);
            }
        },
        renderOnline: function(info) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineClasses);
            for (var s = 0; s < info.length; s++) {
                $(".education-entry:last").append(info[s]);
            }
        },
        nameFormat: function(name) {
            $('#name').html(name);
        },
        checkBlank: function() {
            if (document.getElementsByClassName('flex-item').length === 0) {
                document.getElementById('topContacts').style.display = 'none';
            }
            if (document.getElementsByTagName('h1').length === 0) {
                document.getElementById('header').style.display = 'none';
            }
            if (document.getElementsByClassName('work-entry').length === 0) {
                document.getElementById('workExperience').style.display = 'none';
            }
            if (document.getElementsByClassName('project-entry').length === 0) {
                document.getElementById('projects').style.backgroundColor = 'black';
            }
            if (document.getElementsByClassName('education-entry').length === 0) {
                document.getElementById('education').style.display = 'none';
            }
            if (document.getElementsByClassName('flex-item').length === 0) {
                document.getElementById('letsConnect').style.display = 'none';
            }
        }
        // animate: function() {
        //     var left = $('.skills .white-text').offset().left;
        //     $(".skills .white-text").css({ left: left }).animate({ "left": "0px" }, "slow");
        // }
    };





    /*===============Octopus===============*/

    var octopus = {
        init: function() {
            view.init();
            octopus.getInfo();
            view.checkBlank();
        },
        getInfo: function() {
            var info = model.bio;
            octopus.initBio(info);

            var contactInfo = model.bio.contacts;
            octopus.initContact(contactInfo);

            var skills = model.bio.skills;
            if (skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                skills.forEach(octopus.initSkills);
            }

            var work = model.work;
            work.forEach(octopus.initWork);

            var projects = model.projects;
            projects.forEach(octopus.initProjects);

            var eduSchools = model.education.schools;
            eduSchools.forEach(octopus.initEdu);

            var eduOnline = model.education.OnlineCourses;
            eduOnline.forEach(octopus.initCourse);

        },
        initBio: function(bioData) {
            view.renderName([
                HTMLheaderName.replace("%data%", bioData.name),
                HTMLheaderRole.replace("%data%", bioData.role)
            ]);
            view.renderPic([
                HTMLbioPic.replace("%data%", bioData.bioPic),
                HTMLWelcomeMsg.replace("%data%", bioData.message)
            ]);
        },
        initContact: function(data) {
            view.renderContact([
                HTMLmobile.replace("%data%", data.mobile),
                HTMLemail.replace("%data%", data.email),
                HTMLgithub.replace("%data%", data.github),
                HTMLinkedin.replace("%data%", data.linkedin),
                HTMLlocation.replace("%data%", data.location)
            ]);
        },
        initSkills: function(skill) {
            var list = [];
            list.push(HTMLskills.replace("%data%", skill));
            view.renderSkills(list);
        },
        initWork: function(job) {
            var workemployer = HTMLworkEmployer.replace("%data%", job.employer);
            var worktitle = HTMLworkTitle.replace("%data%", job.title);
            var workEmployerTitle = workemployer + worktitle;
            view.renderWork([
                workEmployerTitle,
                HTMLworkDates.replace("%data%", job.years),
                HTMLworkLocation.replace("%data%", job.city),
                HTMLworkDescription.replace("%data%", job.description)
            ]);
        },
        initProjects: function(project) {
            view.renderProjects([
                HTMLprojectTitle.replace("%data%", project.title),
                HTMLprojectDates.replace("%data%", project.dates),
                HTMLprojectDescription.replace("%data%", project.description),
                HTMLprojectUrl.replace("%data%", project.url),
                HTMLprojectImage.replace("%data%", project.image)
            ]);
        },
        initEdu: function(school) {
            var schoolName = HTMLschoolName.replace("%data%", school.school);
            var schoolCourse = HTMLschoolDegree.replace("%data%", school.study);
            var schoolNameCourse = schoolName + schoolCourse;
            view.renderSchools([
                schoolNameCourse,
                HTMLschoolDates.replace("%data%", school.years),
                HTMLschoolLocation.replace("%data%", school.city)
            ]);
        },
        initCourse: function(course) {
            var schoolOnlineName = HTMLonlineSchool.replace("%data%", course.school);
            var schoolOnlineCourse = HTMLonlineTitle.replace("%data%", course.study);
            var schoolOnlineNameCourse = schoolOnlineCourse + schoolOnlineName;
            view.renderOnline([
                schoolOnlineNameCourse,
                HTMLonlineDates.replace("%data%", course.years),
                HTMLonlineURL.replace("%data%", course.url)
            ]);
        },
        inName: function() {
            var Name = model.bio.name;
            Name = Name.trim().split(" ");
            Name[1] = Name[1].toUpperCase();
            Name[0] = Name[0].slice(0, 1).toUpperCase() + Name[0].slice(1).toLowerCase();
            var formatted = Name[0] + " " + Name[1];
            return formatted;
        },
        nameFormat: function() {
            var iName = octopus.inName(name) || function() {};
            view.nameFormat(iName);
        }
    };


    octopus.init();

}());
