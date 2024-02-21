## Project Exam 1

## Goal

To put into practice the skills learned over your first year of studies.

## Brief
You have been tasked with creating a blog site. You can choose the design and topics covered on the blog, but it should have at least the following pages:
-	Home page
-	About page
-	List of blog posts
-	Blog post specific pages
-	Contact page.

### Home Page

The home page should feature a 'Latest Posts' section, designed as a carousel (slider) for the desktop version. As an example, you could display four posts at a time, although you're welcome to adjust this number to better suit your design. Users should be able to click an arrow on the right to scroll through to the next set of posts, and an arrow on the left to view the previous set. For the mobile version, you are free to alter the layout as you deem appropriate, without being tied to a carousel format.

### Blog Page

The blog posts page should show the first 10 blogs, and the user should click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page

The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page should change based on the blog that has been clicked on e.g. “My Blog | An Article I Wrote”.

If images on the blog specific page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

Create a contact us page, there should be 4 textboxes on this page.
-	Name (Should be more than 5 characters long)
-	Email address (Must be a valid email address)
-	Subject (Should be more than 15 characters long)
-	Message content (Should be more than 25 characters long)

Please use JavaScript for validation, show error messages if the values in the textboxes do not meet the requirements.

### WordPress

The content for your website will be stored on a WordPress installation used as a Headless CMS. It’s important to note that we are only using WordPress to provide an API and add content for the blog. You should not submit a link to a WordPress site, but build your website using HTML, CSS and JavaScript and making a call to the WordPress REST API to fetch the data. 

The project has two aspects:
-	API from your WordPress installation
-	Your website built with HTML, CSS and JavaScript

You will need to add at least 12 blogs for your website. You can use lorem ipsum for paragraphs if you need, but headings, images etc. should all make sense.

Note that this is an exam, and therefore tutor support will be limited as per the study plan.

## Level 1 Process

1.	Decide on the theme for the blog you’re going to make
2.	Create a prototype of the website
3.	Install WordPress on your web host and add the blogs on the admin panel. 
4.	Use the GitHub repo created by GitHub Classroom for your files and deploy to Netlify
5.	Build your website using HTML, CSS and JavaScript making a call to the WordPress REST API to fetch your data.
6.	Install Hotjar on your website.
7.	Ask users to test your website, and adjust based on their feedback and any insights from Hotjar.
8.	Write a report documenting your project (template provided in this repository).
9.	Submit your report as a PDF and a link to both your Netlify deployment and your GitHub repo.
 
## Level 2 Process (optional)

1.	You can try adding a sort, filter, or search to the blog posts page allowing users to find the blog post more easily that they’re looking for. 
2.	Post the data from the contact form to WordPress so you have the details saved.
3.	Allow users to submit comments on a blog post, and post this data to WordPress

///////////////////////////////////////////////////////////////////////////////////////////////


# Rainydays, cross-course project

[![Roasted Reverie Homepage screenshot](https://github.com/Noroff-FEU-Assignments/cross-course-project-mjohank/raw/main/images/Rainydays-screenshot.png)](https://roasted-reverie.netlify.app/)


Project Exam: Roasted Reverie, a coffee related blog site

## Description

Roasted Reverie is a blog site built as part of a project exam, showcasing the culmination of skills acquired in the first year of studies. 
The site uses Wordpress as a headless CMS for content management and Javascript to fetch the content dynamically. Using technologies such as HTML, CSS and Javascript the site was built with responsiveness, accessibility and user interaction in mind.
  

The site consists of the following pages:

- Homepage
- Posts
- Post-specific
- About
- Contact

## Tech stack used in this project:

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6) ![WordPress](https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white)



## Getting Started

### Installing

1. Clone the repo:

```bash
git clone https://github.com/Noroff-FEU-Assignments/project-exam-1-mjohank.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run
```

## Contact me

Email: [mjohandev@gmail.com](mailto:mjohandev@gmail.com)



## Link to live site:

https://roasted-reverie.netlify.app/


