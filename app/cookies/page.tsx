import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './cookie.css'; // Corrected import for the CSS file

export default function CookiesPolicy() {
  return (
    <div className="cookies-page">
      <Navbar />
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Cookies Policy – Anjanisutah 3SPACE Pvt. Ltd.</h1>
      <div className="prose prose-invert max-w-none">
        <p>
          This Cookies Policy explains how Anjanisutah 3SPACE Pvt. Ltd uses cookies on{" "}
          <a
            href="https://www.3spacecorp.com/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.3spacecorp.com/
          </a>
        </p>
        <hr className="my-6" />
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit our website. They help us improve
          functionality, performance, and user experience.
        </p>
        <hr className="my-6" />
        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li>
            <b>Essential Cookies:</b> Necessary for website functionality.
          </li>
          <li>
            <b>Performance Cookies:</b> Track how visitors use the site (e.g., Google Analytics).
          </li>
          <li>
            <b>Functional Cookies:</b> Remember user preferences.
          </li>
          <li>
            <b>Marketing Cookies:</b> (If applicable) Used for advertising or remarketing.
          </li>
        </ul>
        <hr className="my-6" />
        <h2>3. Managing Cookies</h2>
        <ul>
          <li>Delete cookies</li>
          <li>Block cookies</li>
          <li>Alert you when cookies are being used</li>
        </ul>
        <p>
          For more information, visit{" "}
          <a
            href="https://www.allaboutcookies.org"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.allaboutcookies.org
          </a>
          .
        </p>
        <hr className="my-6" />
        <h2>4. Changes to This Policy</h2>
        <p>We may update this Cookies Policy as necessary.</p>
        <hr className="my-6" />
        <h2>5. Contact Us</h2>
        <p>
          For questions regarding this policy or your data:
          <br />
          Email:{" "}
          <a href="mailto:contactus@3spacecorp.com" className="text-blue-400 hover:underline">
            contactus@3spacecorp.com
          </a>
        </p>
      </div>
    </div>

      <Footer />
    </div>
  );
}
