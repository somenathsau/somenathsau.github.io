# 📘 Portfolio Project Documentation

This document contains **Interview Questions** based on the technologies used in this project and a **Setup Guide** for making the contact form works.

---

## 🎤 Possible Interview Questions & Answers

Since this project uses **HTML5, CSS3 (Modern features), and Vanilla JavaScript**, questions will focus on these areas.

### 🔰 HTML & CSS

**Q1: What is "Semantic HTML" and where is it used in this project?**
*   **Answer:** Semantic HTML uses tags that convey *meaning* about the content (like `<nav>`, `<header>`, `<section>`, `<footer>`) rather than just generic `<div>`s.
*   *In this project:* We used `<nav>` for the navigation bar, `<section>` for each part of the page (Hero, About, Skills), and `<footer>` for the bottom area. This helps with SEO and accessibility.

**Q2: Explain the "Glassmorphism" effect used in the cards.**
*   **Answer:** Glassmorphism creates a "frosted glass" look.
*   *Code Explanation:* It relies on three properties:
    1.  `background: rgba(255, 255, 255, 0.05);` (Semi-transparent background)
    2.  `backdrop-filter: blur(10px);` (The key property that blurs what's *behind* the element)
    3.  `border: 1px solid rgba(...);` (A subtle border to mimic the glass edge)

**Q3: How does the CSS Flexbox layout work in your "Skills" section?**
*   **Answer:** Flexbox (`display: flex`) is a one-dimensional layout model.
*   *In this project:* We used `flex-wrap: wrap` to allow skill badges to flow to the next line automatically if there isn't enough space. `gap: 15px` controls the spacing between them.

**Q4: What is the `position: sticky` used in the navbar?**
*   **Answer:** `position: sticky` toggles between `relative` and `fixed` depending on the scroll position. However, in our project, we used `position: fixed` to keep the navbar *always* at the top of the viewport, and we used JavaScript (scrolled class) to change its styling when the user scrolls down.

**Q5: How did you implement the "Typewriter" effect in the Hero section?**
*   **Answer:** It's a pure CSS animation.
*   *Code Explanation:* We defined a `@keyframes blink` animation that toggles the `opacity` of a pseudo-element (`::after`) or a cursor line from 0 to 1, simulating a blinking cursor. (Note: If we used the JS version, we would explain how we manipulate the `textContent` string over time).

**Q6: What is the purpose of `root` (CSS Variables) in `styles.css`?**
*   **Answer:** The `:root` selector stores global variables (like `--accent-cyan`, `--bg-color`).
*   *Benefit:* It allows us to change the theme color in *one place*, and it updates everywhere instantly. It makes maintenance easy.

---

### ⚡ JavaScript (ES6+)

**Q7: How are you rendering the "Projects" and "Experience" content?**
*   **Answer:** Instead of hardcoding HTML, I stored the data in a JavaScript object/file (`data.js`).
*   *Logic:* I used `portfolioData.projects.forEach()` to loop through the array. Inside the loop, I created HTML elements dynamically using **Template Literals** (backticks `` ` ``) and injected variables like `${project.title}`. Finally, I appended these elements to the DOM using `appendChild()`.

**Q8: Explain the "Scroll Reveal" or "Fade Up" animation.**
*   **Answer:** We used the **Intersection Observer API**.
*   *Logic:* We created an `observer` that watches specific elements (`.fade-up`). When an element enters the viewport (`entry.isIntersecting`), the observer adds a CSS class (`.visible`). The CSS then handles the transition (`opacity: 1`, `transform: translateY(0)`), causing it to slide up and fade in.

**Q9: Why use `DOMContentLoaded`?**
*   **Answer:** The `document.addEventListener('DOMContentLoaded', ...)` ensures that our JavaScript only runs *after* the entire HTML document has been fully loaded and parsed. If we ran it too early, we might try to find elements that don't exist yet, causing errors.

**Q10: How does the "Contact" button scroll smoothly to the section?**
*   **Answer:** This is handled by CSS `html { scroll-behavior: smooth; }`. Any anchor link (e.g., `<a href="#contact">`) will automatically smooth-scroll to that ID without needing complex JavaScript.

### 📱 Responsive Design & Performance

**Q11: How did you make the website responsive (mobile-friendly)?**
*   **Answer:** I used **CSS Media Queries** (`@media (max-width: 768px)`).
*   *Details:* inside these queries, I changed the layout from `flex-direction: row` to `column` for the navbar and hero section, adjusted font sizes (`rem` units), and hid/showed elements like the hamburger menu.

**Q12: What is the difference between `rem`, `em`, and `px`?**
*   **Answer:** content
    *   `px` is an absolute unit (pixels).
    *   `em` is relative to the *parent* element's font size.
    *   `rem` is relative to the *root* (`html`) element's font size.
    *   *In this project:* I used `rem` for mostly everything (padding, margins, fonts) because it ensures the site scales correctly if a user changes their browser's default font size (Accessibility).

**Q13: Why did you use CSS Grid for the "Skills" or "Certifications" section?**
*   **Answer:** CSS Grid is a 2D layout system.
*   *Code:* `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`
*   *Explanation:* This one line creates a responsive layout where cards automatically fill the row. If the screen is too small (<300px), they wrap to the next line. It's much cleaner than using Flexbox with calculated margins for grid-like layouts.

**Q14: How would you optimize the performance of this website?**
*   **Answer:**
    1.  **Image Optimization:** Compress images (like `profile.png`) to WebP format to reduce file size.
    2.  **Minification:** Minify CSS and JS files (remove whitespace) for production.
    3.  **Lazy Loading:** Add `loading="lazy"` to images so they only download when scrolled into view.
    4.  **Reduce Reflows:** Use `transform` and `opacity` for animations (like we did) instead of changing `width` or `left`, because `transform` is handled by the GPU.

---

## 📬 How to Setup the "Contact Me" Form

Since this is a static website (HTML/CSS/JS), it doesn't have a backend server (like Node.js or PHP) to send emails directly.

The standard industry solution is **Formspree**. It acts as a middleware that catches your form submission and emails it to you.

### Step 1: Sign up for Formspree
1.  Go to [formspree.io](https://formspree.io/).
2.  Sign up for a free account.
3.  Click **"+ New Form"**.
4.  Name it (e.g., "Portfolio Contact") and enter the email address where you want to receive messages.
5.  **Create Form**. You will get a unique Endpoint URL (looks like: `https://formspree.io/f/mqkrzxyz`).

### Step 2: Update Your HTML Code
Go to your `index.html` file and find the `<form>` tag in the Contact section. Update it like this:

```html
<!-- Replace "YOUR_FORMSPREE_ID" with the ID you got from the website -->
<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="contact-form">
    
    <div class="form-group">
        <!-- 'name' attribute is crucial for Formspree to label the data -->
        <input type="text" name="name" placeholder="Name" required>
        <i data-lucide="user"></i>
    </div>

    <div class="form-group">
        <input type="email" name="email" placeholder="Email" required>
        <i data-lucide="mail"></i>
    </div>

    <div class="form-group">
        <textarea name="message" placeholder="Message" rows="5" required></textarea>
        <i data-lucide="message-square"></i>
    </div>

    <button type="submit" class="btn-primary">Send Message</button>
</form>
```

### Step 3: Test It
1.  Save your file.
2.  Open your website.
3.  Fill out the form and hit "Send".
4.  You will be redirected to a Formspree "Thank You" page.
5.  Check your email inbox—you should see the message instantly!

### Step 4 (Optional): Custom Thank You Page
If you don't want the default Formspree thank you page, you can add this line strictly inside your form tag:
```html
<input type="hidden" name="_next" value="https://yourwebsite.com/thanks.html">
```
*(You would need to create a `thanks.html` file separately).*
