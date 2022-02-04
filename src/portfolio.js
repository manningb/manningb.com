/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Brian Manning",
  title: "Hello, I'm Brian",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀, currently studying Computer Science in UCD, Dublin."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/14Cj0RlWQfc8hycQdZdB-7XHOmvw-QDHm/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/manningb",
  linkedin: "https://www.linkedin.com/in/brianmanningw/",
  gmail: "manningbrian98@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University College Dublin",
      logo: require("./assets/images/ucdLogo.gif"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2020 - December 2021",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Current GPA: 4.13/4.2 "]
    },
    {
      schoolName: "University College Dublin",
      logo: require("./assets/images/ucdLogo.gif"),
      subHeader:
        "Bachelor of Science in Actuarial & Financial Studies (General Science)",
      duration: "September 2013 - April 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Overall Grade: 2:1, Second Class Honours, Grade I"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Chief Technology Officer & Co-founder",
      company: "Kilkenny Marketplace",
      companylogo: require("./assets/images/kilkennyMarketplaceLogo.png"),
      date: "January 2020 – August 2020",
      desc: "Brought 17 local businesses online on our Wordpress multi-vendor website with 1.5K average monthly users.",
      descBullets: [
        "Update the styling and functionality using JavaScript and HTML/CSS.",
        "Developed solution for importing products from CSV files using Python, Pandas and PHP."
      ]
    },
    {
      role: "Actuarial Reserving Intern",
      company: "Liberty Insurance",
      companylogo: require("./assets/images/libertyInsuranceLogo.jpg"),
      date: "January 2020 – August 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed custom solution for quarterly Executive Deep Dive Reports, saving days of time every quarter using Microsoft Excel, Actuarial Reserving Software, VBA and XML - Presented solution to executive team in US",
        " Implemented an automated traffic report using NRA data and VBA to monitor changes in traffic caused by Covid-19 - Achieved Recognition Award"
      ]
    },
    {
      role: "Actuarial Pricing Intern",
      company: "New Ireland",
      companylogo: require("./assets/images/newIrelandAssuranceLogo.jfif"),
      date: "May 2019 – August 2019",
      desc: "Created a VBA macro to automatically transfer data from Excel to a Word document with mail merge."
    }
    // {
    //   role: "Accounting Intern",
    //   company: "Carrigan O'Dwyer",
    //   companylogo: require("./assets/images/carriganOdwyerLogo.jpg"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "a."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Creative Use of Actuarial Skills: Winner 2020",
      subtitle:
        "The Society of Actuaries in Ireland (SAI) has established the Wider Fields Committee to enable its members to reach out into new areas of work, and to promote the profession and broaden its reach beyond the traditional areas where actuaries work. Recognising that encouraging creative thinking is central to achieving this objective, the Wider Fields Committee is launching a prize for the best University student project that demonstrates a creative use of the actuarial skillset.",
      image: require("./assets/images/soaiLogo.png"),
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Hackathon: Second Place",
      subtitle:
        "Presented by the UCD Investors & Entrepreneurs Society and Data Soc Ireland's First Data Science Society. During the competition participants must work with challenging real world data sets to derive insights for stakeholders through rigorous data analytics and modelling techniques. Our submission was titled Road Usage & Covid Cases and involved exploratory analysis and linear regression modelling using public Covid data in Ireland and NRA Traffic Data.",
      image: require("./assets/images/dataLinkHackathonLogo.png"),
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+353879229916",
  email_address: "manningbrian98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
