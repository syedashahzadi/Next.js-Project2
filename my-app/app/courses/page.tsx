"use client"
import Link from "next/link"
import React from "react"
import Head from "next/head"
import blog from "../blog/page"
function Courses() {
    return(
<>
 <section className="Sub-header">
    <nav>
    <a href="index.html" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </a>
        <div className="nav-links" id="navLinks">
            {/* <!-- reposnive bar open and close --> */}
             <i className="fa fa-times" onClick={()=>{}}></i>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/courses">Course</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        * <i className="fa fa-bars" onClick={()=>{}}></i>
        {/* <!-- reposnive bar open and close --> */}
    </nav>
    <h1>Our Cources</h1>
</section>

{/* <!-- course start --> */}

<section className="course">
    <h1>Course We Offer</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="row">
        <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.</p>
        </div>
        <div className="course-col">
            <h3>Graduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.</p>
        </div>
        <div className="course-col">
            <h3>Adult Learning & Degree Completion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                laborum velit non.</p>
        </div>
    </div>
</section>

{/* <!-- course end --> */}

{/* <!-- best course start --> */}

<section className="facilities">
    <h1>Best Courses</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="row">
        <div className="facilities-col">
            <img src="img/course1.png" alt=""/>
            <h3>Web Development</h3>
            <p>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.
            </p>
        </div>
        <div className="facilities-col">
            <img src="img/course2.png" alt=""/>
            <h3>Artificial Intelligence</h3>
            <p>Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is a field of study in computer science that develops and studies intelligent machines. "AI" may also refer to the machines themselves.
            </p>
        </div>
        <div className="facilities-col">
            <img src="img/course3.png" alt=""/>
            <h3>Data Science</h3>
            <p>Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.
            </p>
        </div>
    </div>
</section>

{/* <!-- best courses end --> */}

{/* <!-- Footer start --> */}
<section className="footer">
    <hr />
    <h4>About Us</h4>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
        <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
        dolorem.
    </p>

    <div className="icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin"></i>
    </div>
    <p>Made with <i className="fas fa-heart"></i> by <a href="#">Ride Zainab</a></p>
    <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
</section>
{/* <!-- Footer end --> */}
<script src="script.js"></script>

</>

  );  
}
export default Courses
