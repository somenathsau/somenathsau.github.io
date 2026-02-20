# 🚀 Hosting Guide: How to Publish Your Portfolio

This guide will show you how to put your code on the internet so anyone with a link can see it.

---

## ✅ Option 1: GitHub Pages (Recommended for Developers)

This method is great because it shows you know how to use **Git**, which is a crucial skill for developers.

### **Step 1: Install Git (If not installed)**
1.  Open your terminal (PowerShell or Command Prompt).
2.  Type `git --version`.
3.  If it says "command not found", download and install Git from [git-scm.com](https://git-scm.com/).

### **Step 2: Initialize Git in Your Project**
1.  Open VS Code in your project folder (`Some_portfolio`).
2.  Open the Terminal in VS Code (`Ctrl + ~`).
3.  Type the following commands one by one:
    ```bash
    git init
    git add .
    git commit -m "Initial commit - My Portfolio"
    ```

### **Step 3: Create a Repository on GitHub**
1.  Go to [github.com](https://github.com/) and sign in.
2.  Click the **+** icon in the top right -> **New repository**.
3.  **Repository Name:** `my-portfolio` (or whatever you want).
4.  **Public/Private:** Choose **Public** (required for free GitHub Pages).
5.  Click **Create repository**.

### **Step 4: Push Your Code**
1.  GitHub will show you a page with commands. Look for the section **"…or push an existing repository from the command line"**.
2.  Copy and paste those commands into your VS Code terminal. They look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
    git branch -M main
    git push -u origin main
    ```
3.  You might be asked to sign in to GitHub in a pop-up window.

### **Step 5: Activate GitHub Pages**
1.  Go back to your repository page on GitHub.
2.  Click **Settings** (top menu bar of the repo).
3.  On the left sidebar, click **Pages**.
4.  Under **Build and deployment** > **Branch**, ensure it says **main** (or master) and `/ (root)`.
5.  Click **Save**.

🎉 **Done!**
After 1-2 minutes, refresh that page. You will see a banner at the top:
> "Your site is live at at `https://your-username.github.io/my-portfolio/`"

Copy that link and share it!

---

## ⚡ Option 2: Netlify (Easiest / Drag & Drop)

If you just want it online *now* without using Git commands.

1.  Go to [app.netlify.com](https://app.netlify.com/drop).
2.  You will see a box that says **"Drag and drop your site output folder here"**.
3.  Open your File Explorer on your computer.
4.  Locate your project folder (`Some_portfolio`).
5.  **Drag the entire folder** into that box on the Netlify website.
6.  Wait a few seconds.

🎉 **Done!**
Netlify will give you a random URL (like `brave-curie-12345.netlify.app`).
You can click **"Site settings"** > **"Change site name"** to make it prettier (e.g., `somenath-portfolio.netlify.app`).

---

## 💡 Important Note for Both Methods
*   Make sure your main file is named `index.html`. If it is named something else (like `home.html`), these services won't find it automatically.
*   **Images:** Ensure your image paths in the code match the filenames exactly (case-sensitive!). `Profile.jpg` is different from `profile.jpg` on the web (Linux servers), even if it works on Windows.
