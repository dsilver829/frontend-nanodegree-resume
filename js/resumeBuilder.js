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

var projects = [];

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
  "pic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/000/229/399/08f7864.jpg",
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

for(var i in work.jobs) {
  $('#workExperience').append(HTMLworkStart);
  formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  formattedWorkTitle    = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  $('.work-entry:last').append(formattedWorkEmployer.concat(formattedWorkTitle));
}
