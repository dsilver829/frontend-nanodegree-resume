/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
  "jobs": [
    {
      "employer": "Candidate Metrics",
      "title": "CEO",
      "location": "San Mateo, CA, US",
      "dates": "2011-2016",
      "description": "We help companies hire great candidates."
    },
    {
      "employer": "mSpot",
      "title": "Product Manager",
      "location": "Palo Alto, CA, US",
      "dates": "2008-2010",
      "description": "We built great mobile products."
    }
  ]
};

var projects = {
  "list": [{
    "title": "SumoBot",
    "dates": "November, 2015 - present",
    "description": "I'm building a self-driving car!",
    "image": "https://a.pololu-files.com/picture/0J6690.300.jpg?dec2695f4789b6309865d1a9a7cda41f" 
  },
  {
    "title": "InnVision Shelter Network",
    "dates": "2012 - present",
    "description": "I volunteer at our local homeless shelter.",
    "image": "http://static.wixstatic.com/media/32849e_b0f5f90f54604100b066733ff7583fae.png/v1/fill/w_325,h_122,al_c,usm_0.50_1.20_0.00,lg_1/32849e_b0f5f90f54604100b066733ff7583fae.png" 
  }],
};

var education = {
  "schools": [
    {
      "name": "Stanford University",
      "city": "Stanford, CA, US",
      "degree": "MBA"
    },
    {
      "name": "Princeton University",
      "city": "Princeton, NJ, US",
      "degree": "BSE"
    }
  ]
};

var skills = ["Ruby on Rails", "JavaScript"];

var welcomeMsg = "Hello and welcome to my résumé!";

var contact = {
  "mobile":   "703-539-2331",
  "email":    "dsilver@candidatemetrics.com",
  "twitter":  "@dsilver829",
  "github":   "github.com/dsilver829",
  "blog":     "davidincalifornia.com",
  "location": "San Mateo, California",
};

var bio = {
  "name": "David Silver",
  "role": "Software Engineer",
  "contact": contact,
  "pic": "http://1.gravatar.com/avatar/264bdf2a721efc3ae7fd6c9d35c1a695",
  "welcomeMsg": welcomeMsg,
  "skills": skills
};

var formattedName       = HTMLheaderName.replace("%data%", bio.name)
var formattedRole       = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile     = HTMLmobile.replace("%data%", contact.mobile);
var formattedEmail      = HTMLemail.replace("%data%", contact.email);
var formattedTwitter    = HTMLtwitter.replace("%data%", contact.twitter);
var formattedGithub     = HTMLgithub.replace("%data%", contact.github);
var formattedBlog       = HTMLblog.replace("%data%", contact.blog);
var formattedLocation   = HTMLlocation.replace("%data%", contact.location);
var formattedBioPic     = HTMLbioPic.replace("%data%", bio.pic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$('#header').append(formattedWelcomeMsg);
$('#header').append(formattedBioPic);
$('#topContacts').prepend(formattedLocation);
$('#topContacts').prepend(formattedBlog);
$('#topContacts').prepend(formattedGithub);
$('#topContacts').prepend(formattedTwitter);
$('#topContacts').prepend(formattedEmail);
$('#topContacts').prepend(formattedMobile);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

if(bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  for(var i in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $('#skills').append(formattedSkill);
  }
}

function displayWork(job) {
  $('#workExperience').append(HTMLworkStart);
  var formattedWorkEmployer    = HTMLworkEmployer.replace("%data%", job.employer);
  var formattedWorkTitle       = HTMLworkTitle.replace("%data%", job.title);
  var formattedWorkDates       = HTMLworkDates.replace("%data%", job.dates);
  var formattedWorkLocation    = HTMLworkLocation.replace("%data%", job.location);
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
  $('.work-entry:last').append(formattedWorkEmployer.concat(formattedWorkTitle));
  $('.work-entry:last').append(formattedWorkLocation);
  $('.work-entry:last').append(formattedWorkDates);
  $('.work-entry:last').append(formattedWorkDescription);
}

for(var i in work.jobs) {
  var job = work.jobs[i];
  displayWork(job);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$('#main').append(internationalizeButton);

function inName(name) {
  var names = name.trim().split(" ");
  var lastName = names[1].toUpperCase();
  var firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  return firstName + " " + lastName;
}

projects.display = function() {
  for(var i in projects.list) {
    var project = projects.list[i];
    $('#projects').append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.image));
  }
}

projects.display();
