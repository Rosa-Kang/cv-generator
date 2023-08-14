import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Rosa Kang",
    email: "roseblossom@mail.com",
    phoneNumber: "+1 604 552 5521",
    address: "Vancouver, CA",
  },

  sections: {
    educations: [
    {
        degree: "Diploma in Full-stack Web Development",
        schoolName: "BrainStation",
        location: "Vancouver, BC, CA",
        startDate: "03/2019",
        endDate: "06/2019",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Bachelors in Chemical Engineering",
        schoolName: "Jeonbuk National University",
        location: "Jeonju, South Korea",
        startDate: "03/2004",
        endDate: "02/2009",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "White Canvas Design",
        positionTitle: "Front-end Web Developer",
        location: "Langely, BC, CA",
        description:
          "Developed, implemented, and maintained websites using JavaScript, jQuery, PHP, Liquid,HTML/CSS and other programming languages upon needed",
        startDate: "10/2021",
        endDate: "07/2023",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "The Coding Bull",
        positionTitle: "Web Developer",
        location: "Burnaby, BC, CA",
        description:
          "Created responsive customWordPress Themes from start to finish primarily using PHP, MAMP, JavaScript, JQuery, Advanced Custom Fields (ACF Pro or CPT UI plugins), custom post types,HTML5, SASS, CSS framework like Bulma&Gulp for compiling/compressing",
        startDate: "02/2021",
        endDate: "08/2021",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;