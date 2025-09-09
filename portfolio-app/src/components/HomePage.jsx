import "../Styles/HomePage.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaBlog,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaJs,
  FaCuttlefish,
  FaDatabase,
} from "react-icons/fa";
import {
  SiGo,
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiJest,
  SiNextdotjs,
  SiDjango,
  SiFlask,
} from "react-icons/si";
import { DiReact, DiNodejs } from "react-icons/di";
import { MdArticle } from "react-icons/md";
import Projects from "../components/Projects";

export default function HomePage() {
  return (
    <div className="white-theme">
      <section className="main">
        <h1>Abiodun Adekunle</h1>
        <h4>Software Engineer</h4>
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a software engineer with a passion for building scalable and
          reliable software systems. I have experience working with a variety of
          technologies and frameworks. I am always eager to learn new things and
          I am excited to work on challenging projects.
        </p>
      </section>

      <section className="section">
        <h3>Languages</h3>
        <p>
          <FaHtml5 title="HTML" /> HTML, <FaCss3Alt title="CSS" /> CSS,{" "}
          <SiGo title="Go" /> Go,
          <FaPython title="Python" /> Python, <FaJs title="JavaScript" />{" "}
          JavaScript,
          <SiTypescript title="TypeScript" /> TypeScript,{" "}
          <FaJava title="Java" /> Java,
          <FaCuttlefish title="C++" /> C++, C#, <FaDatabase title="SQL" /> SQL,{" "}
        </p>

        <h3>Frameworks</h3>
        <p>
          <DiReact title="React" /> React, <DiNodejs title="Express" /> Express,{" "}
          <SiFlask title="Flask" /> Flask,
          <SiDjango title="Django" /> Django,
          <SiGraphql title="GraphQL & Apollo" /> GraphQL & Apollo,
          <SiNextdotjs title="Next.js" /> Next.js, <SiRedux title="Redux" />{" "}
          Redux,
          <SiJest title="Jest" /> Jest, <SiJest title="Supertest" /> Supertest
        </p>
      </section>

      {/* Blog Section */}
      <section className="section blog-section">
        <h2>Blog Posts</h2>
        <div className="blog-links">
          <a
            href="https://iq.opengenus.org/author/abiodun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlog className="blog-icon" /> OpenGenus Articles
          </a>
          <a
            href="https://medium.com/@adekunleabiodun354/what-happens-when-you-type-google-com-in-your-browser-and-press-enter-e118db047384"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdArticle className="blog-icon" /> Medium Blog Post
          </a>
        </div>
      </section>

      {/* Projects */}

      <Projects />

      <footer className="footer">
        <div className="contact-links">
          <a href="mailto:adekunleabiodun354@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/abiodunadekunle">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Abiodun001-world">
            <FaGithub />
          </a>
          <a href="https://twitter.com/abiodun0019">
            <FaTwitter />
          </a>
        </div>
        <p>© 2025 Abiodun Adekunle. All rights reserved.</p>
      </footer>
    </div>
  );
}
