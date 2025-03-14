document.addEventListener("DOMContentLoaded", function () {
  const terminalBody = document.querySelector(".terminal-body");
  const terminalHeader = document.querySelector(".terminal-header");
  const terminal = document.querySelector(".terminal");
  const icon = document.createElement("i");
  const commandHistory = [];
  let historyIndex = -1;
  let themeColors = {
    textColor: "#00ff00", // Default text color (green)
    headerColor: "white",
  };

  const commands = {
    help: () => {
      // return `
      //     <span style="color:${themeColors.textColor};">about</span>       - Learn more about me <br>
      //     <span style="color:${themeColors.textColor};">clear</span>       - Clear the terminal display <br>
      //     <span style="color:${themeColors.textColor};">echo</span>        - Display custom text or messages <br>
      //     <span style="color:${themeColors.textColor};">education</span>   - Explore my academic journey <br>
      //     <span style="color:${themeColors.textColor};">resume</span>      - Jump to my resume directly<br>
      //     <span style="color:${themeColors.textColor};">getResume</span>   - Get my resume in terminal<br>
      //     <span style="color:${themeColors.textColor};">email</span>       - Reach out via Email <br>
      //     <span style="color:${themeColors.textColor};">exit</span>        - Close the current session <br>
      //     <span style="color:${themeColors.textColor};">help</span>        - Get a list of available commands <br>
      //     <span style="color:${themeColors.textColor};">history</span>     - See your command usage history <br>
      //     <span style="color:${themeColors.textColor};">projects</span>    - Check out my projects <br>
      //     <span style="color:${themeColors.textColor};">pwd</span>         - Show the current working directory <br>
      //     <span style="color:${themeColors.textColor};">skills</span>      - View my skill set <br>
      //     <span style="color:${themeColors.textColor};">socials</span>     - Discover my social media profiles <br>
      //     <span style="color:${themeColors.textColor};">themes</span>      - Browse through available themes <br>
      //     <span style="color:${themeColors.textColor};">welcome</span>     - View the introductory section <br>
      //     <span style="color:${themeColors.textColor};">whoami</span>      - Find out who the current user is <br>
      //     <span style="color:${themeColors.textColor};">date</span>        - Get today's date <br>
      //     <span style="color:${themeColors.textColor};">greet "name"</span> - Greet yourself <br>
      //     <span style="color:${themeColors.textColor};">list fun</span>    - Get a list of more fun commands <br>
      //     <span style="color:${themeColors.textColor};">get_status</span>  - View my current focus and achievements <br>
      //     <span style="color:${themeColors.textColor};">get_learning</span> - See what technologies I'm currently exploring <br>
      //   `;
      // return `
      // <span style="color:${themeColors.textColor};">about</span>       - Who am I? What do I do? The mystery unfolds! 🎭<br>
      // <span style="color:${themeColors.textColor};">clear</span>       - Wipe the terminal clean—because clutter is chaos! 🧼<br>
      // <span style="color:${themeColors.textColor};">echo</span>        - Whatever you type, I’ll repeat. Great for pep talks! 📢<br>
      // <span style="color:${themeColors.textColor};">education</span>   - Walk through my academic adventures! 🎓<br>
      // <span style="color:${themeColors.textColor};">resume</span>      - Skip the small talk, jump straight to my resume! 📄<br>
      // <span style="color:${themeColors.textColor};">getResume</span>   - Want my resume in the terminal? Say no more! 🖨️<br>
      // <span style="color:${themeColors.textColor};">email</span>       - Send me an email and make my inbox feel special. 📩<br>
      // <span style="color:${themeColors.textColor};">exit</span>        - Leaving so soon? Fine, close the session. 😢<br>
      // <span style="color:${themeColors.textColor};">help</span>        - Need assistance? Here’s your lifeline! 🆘<br>
      // <span style="color:${themeColors.textColor};">history</span>     - Relive your past commands—because history matters! 📜<br>
      // <span style="color:${themeColors.textColor};">projects</span>    - Peek into my coding lab and see what I’ve built! 🏗️<br>
      // <span style="color:${themeColors.textColor};">pwd</span>         - Reveal your current location… in the terminal. 📍<br>
      // <span style="color:${themeColors.textColor};">skills</span>      - Discover my tech superpowers. ⚡<br>
      // <span style="color:${themeColors.textColor};">socials</span>     - Stalk me online (in a professional way). 🔗<br>
      // <span style="color:${themeColors.textColor};">themes</span>      - Switch up the vibe with different themes! 🎨<br>
      // <span style="color:${themeColors.textColor};">welcome</span>     - Get a warm, digital hug from my terminal. 🤗<br>
      // <span style="color:${themeColors.textColor};">whoami</span>      - A philosophical question... but also, just your username. 🧐<br>
      // <span style="color:${themeColors.textColor};">date</span>        - What day is it? I got you covered! 📅<br>
      // <span style="color:${themeColors.textColor};">greet "name"</span> - Let me greet you like the legend you are. 👋<br>
      // <span style="color:${themeColors.textColor};">list fun</span>    - Bored? Check out some fun commands! 🎉<br>
      // <span style="color:${themeColors.textColor};">get_status</span>  - See what I’m up to—grinding, building, or just chilling. 🚀<br>
      // <span style="color:${themeColors.textColor};">get_learning</span> - Find out what new tech I’m currently exploring! 📚<br>
      // `;
      return `
        <span style="color:${themeColors.textColor};">about</span>       - Learn more about my professional background. <br>
        <span style="color:${themeColors.textColor};">clear</span>       - Clears the terminal display for a fresh start. <br>
        <span style="color:${themeColors.textColor};">echo</span>        - Displays the provided text or message. <br>
        <span style="color:${themeColors.textColor};">education</span>   - View details about my academic qualifications. <br>
        <span style="color:${themeColors.textColor};">resume</span>      - Opens my resume for quick access. <br>
        <span style="color:${themeColors.textColor};">getResume</span>   - Displays my resume directly in the terminal. <br>
        <span style="color:${themeColors.textColor};">email</span>       - Contact me via email. <br>
        <span style="color:${themeColors.textColor};">exit</span>        - Closes the current terminal session. <br>
        <span style="color:${themeColors.textColor};">help</span>        - Lists all available commands and their functions. <br>
        <span style="color:${themeColors.textColor};">history</span>     - Displays the history of previously entered commands. <br>
        <span style="color:${themeColors.textColor};">projects</span>    - Explore my past and ongoing projects. <br>
        <span style="color:${themeColors.textColor};">pwd</span>         - Displays the current working directory. <br>
        <span style="color:${themeColors.textColor};">skills</span>      - Provides an overview of my technical skill set. <br>
        <span style="color:${themeColors.textColor};">socials</span>     - Access links to my social media profiles. <br>
        <span style="color:${themeColors.textColor};">themes</span>      - View and switch between available terminal themes. <br>
        <span style="color:${themeColors.textColor};">welcome</span>     - Displays the introduction section. <br>
        <span style="color:${themeColors.textColor};">whoami</span>      - Displays the current user’s identity. <br>
        <span style="color:${themeColors.textColor};">date</span>        - Shows the current date and time. <br>
        <span style="color:${themeColors.textColor};">greet "name"</span> - Displays a personalized greeting message. <br>
        <span style="color:${themeColors.textColor};">list fun</span>    - Provides a list of additional interactive commands. <br>
        <span style="color:${themeColors.textColor};">get_status</span>  - Displays my current professional focus and achievements. <br>
        <span style="color:${themeColors.textColor};">get_learning</span> - Shows the technologies and skills I am currently learning. <br>
        `;
    },

    themes: `<div style="display: flex; flex-wrap: wrap; gap: 20px; max-width: 600px;">
      <div style="flex: 1; min-width: 200px;">
        <ul>
          <li>ubuntu</li>
          <li>git-bash</li>
          <li>sweet</li>
          <li>code editor</li>
        </ul>
      </div>
      <div style="flex: 1; min-width: 200px;">
        <ul>
          <li>night</li>
          <li>midnight</li>
          <li>electric</li>
          <li>aurora lights</li>
          <li>neon pulse</li>
        </ul>
      </div>
    </div>
    <p>To change themes, type <code>themes go to [theme-name]</code>.</p>
    <p>Example: <code>themes go to electric</code></p>`,

    "themes go to ubuntu": () => {
      terminal.style.backgroundColor = "#300a24";
      terminalHeader.style.backgroundColor = "#595959";
      terminalHeader.style.color = "white";
      terminalBody.style.color = "#00ff00";
      themeColors.textColor = "#00ff00";
      return "Switched to Ubuntu theme!";
    },

    "themes go to git-bash": () => {
      terminal.style.background = "linear-gradient(135deg, #1a1a1a, #2e2e2e)";
      terminalHeader.style.background =
        "linear-gradient(135deg, #2e2e2e, #444444)";
      terminalHeader.style.color = "#00ff00";
      terminalBody.style.color = "#00ff00";
      themeColors.textColor = "#00ff00";
      return "Switched to Git-Bash theme!";
    },

    "themes go to sweet": () => {
      terminal.style.background = "linear-gradient(135deg, #ffb6c1, #ff69b4)";
      terminalBody.style.background =
        "linear-gradient(135deg, #ffd9df,rgb(250, 160, 172),#ff69b4)";
      terminalHeader.style.color = "#ff178b";
      terminalBody.style.color = "#ff178b";
      themeColors.textColor = "#ff0f9f";
      terminalBody.style.backgroundSize = "400% 400%";
      terminalBody.style.animation = "gradientBG 8s ease infinite";
      return "Switched to Sweet theme!";
    },

    "themes go to code editor": () => {
      terminalBody.style.background =
        "linear-gradient(-45deg,rgb(73, 80, 94),rgb(105, 123, 151), #3c3f41, #98c379)";
      terminalBody.style.backgroundSize = "400% 400%";
      terminalBody.style.color = "#d2d2d2";
      terminalBody.style.animation = "gradientBG 8s ease infinite";
      return "Switched to code editor !";
    },

    "themes go to night": () => {
      terminalBody.style.background =
        "linear-gradient(-45deg, #1a202c, #2d3748, #4a5568, #2b6cb0,rgb(190, 241, 153))";
      terminalBody.style.backgroundSize = "400% 400%";
      terminalBody.style.color = "#d2d2d2";
      terminalBody.style.animation = "gradientBG 4s ease infinite";
      return "Switched to night !";
    },

    "themes go to midnight": () => {
      terminalBody.style.background =
        "linear-gradient(-45deg, #1e293b, #0f172a, #334155, #668dc4)";
      terminalBody.style.backgroundSize = "400% 400%";
      terminalBody.style.color = "#d2d2d2";
      terminalBody.style.animation = "gradientBG 4s ease infinite";
      return "Switched to midnight!";
    },

    "themes go to electric": () => {
      terminalBody.style.background =
        "linear-gradient(-45deg, #6441a5, #2a0845, #7e7cec, #ff7eb3)";
      terminalBody.style.backgroundSize = "400% 400%";
      terminalBody.style.color = "#d2d2d2";
      terminalBody.style.animation = "gradientBG 4s ease infinite";
      return "Switched to electric !";
    },

    "themes go to aurora lights": () => {
      terminalBody.style.background =
        "linear-gradient(-45deg,#41C3E7,#3DF39E,#4BEC8B,#66EB61)";
      terminalBody.style.backgroundSize = "400% 400%";
      terminalBody.style.color = "#8050a6";
      terminalBody.style.animation = "gradientBG 4s ease infinite";
      return "Switched to aurora lights !";
    },

    "themes go to neon pulse": () => {
      terminalBody.style.background =
        "linear-gradient(-45deg, #ff6f91, #ffc3a0, #c471ed, #f64f59)";
      terminalBody.style.backgroundSize = "400% 400%";
      terminalBody.style.color = "#63686e";
      terminalBody.style.animation = "gradientBG 4s ease infinite";
      return "Switched to neon pulse !";
    },

    about:
      "Curiously driven backend developer.<br>Passionate, Backend dev who like to participate in hackathons + solving silly bugs + building awesome projects💖 <br> Always ready to help out and learn",

    clear: () => {
      terminalBody.innerHTML = "";
      return "";
    },

    echo: (args) => args.join(" "),

    education: () => {
      return `
        <span style="color:${themeColors.textColor};">G.H. Raisoni College of Commerce, Science and Technology</span> | 2023 - 2026 <br>
        <span style="color:${themeColors.textColor};">CGPA: 8.0</span> <br><br>
        <span style="color:${themeColors.textColor};">Dr. Ambedkar College (HSC - 12th)</span> | 2020 - 2022 <br>
        <span style="color:${themeColors.textColor};">Percentile: 89.33%</span> <br><br>
        <span style="color:${themeColors.textColor};">Shahu's Garden High School (SSC - 10th)</span> | 2019 - 2020 <br>
        <span style="color:${themeColors.textColor};">Percentile: 93%</span>`;
    },

    email: () => {
      window.open("mailto:hardikgayner@gmail.com");
      return "You can reach me at: hardikgayner@gmail.com";
    },
    exit: () => window.close(),

    history: () => commandHistory.join("<br>"),

    projects: `<strong>Projects:</strong>
      You can visit my <a href="https://github.com/imHardik1606" target="_blank"><strong>GitHub</strong></a> to see all my projects. <hr>
      These are my personal favorites: <br>
      1. <strong>TravelBuddy</strong> - Find Travel Companions and Share Costs <br>
      A platform where users can connect with travel companions heading to the same destination. Users can share costs for accommodation, food, and other expenses, and upload detailed travel itineraries to collaborate seamlessly. Built with <strong>ExpressJS</strong>, <strong>MongoDB</strong>, and <strong>EJS</strong>. <br>
      <div style='width:30%; height: 50%; padding: 2%; border: 2px solid white; margin:4%'>Work in Progress</div> &nbsp; 
      <a href='' style='padding: 2%; margin:4%'> Link </a> <br>

      2. <strong>MERN Chat</strong> - Real-Time Messaging App <br>
      A feature-rich real-time chat application built with the <strong>MERN stack</strong>. It includes private and group messaging, live status indicators, and secure authentication using <strong>JWT</strong>. The app focuses on performance, scalability, and an intuitive UI. <br>
      <div style='width:30%; height: 50%; padding: 2%; border: 2px solid white; margin:4%'>Work in Progress</div> &nbsp; 
      <a href='https://github.com/imHardik1606/mern-chat' style='padding: 2%; margin:4%'> Link </a> <br>

      3. <strong>SuperCar Rental</strong> - Car Rental Management Platform <br>
      An online platform for renting high-end cars with features like vehicle availability tracking, rental cost calculation, and booking history. Users can browse car models, book vehicles, and track their bookings effortlessly. Built with <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. <br>
      <div style='width:30%; height: 50%; padding: 2%; border: 2px solid white; margin:4%'>Work in Progress</div> 
      <a href='' style='padding: 2%; margin:4%'> Link </a> <br>
      
      4. <strong>TripMate</strong> - Personalized AI-Powered Travel Itinerary <br>
      An intelligent travel planning platform that uses and <strong>Gen-AI</strong> to create personalized itineraries based on user preferences, budget, and location. Users receive AI-generated recommendations for accommodations, restaurants, and sightseeing spots, along with optimized travel routes. Built with <strong>React.js</strong>, <strong>OAuth</strong>, <strong>Firebase</strong>, <strong>Firebase Auth</strong>, <strong>TailwindCSS</strong>, <strong>Gemini API</strong>, and <strong>ShadCN</strong>. <br>
      <div style='width:30%; height: 50%; padding: 2%; border: 2px solid white; margin:4%'>Work in Progress</div> &nbsp; 
      <a href='https://github.com/imHardik1606/AI-Travel-Planner' style='padding: 2%; margin:4%'> Link </a> <br>
`,

    pwd: "You are currently in the root directory.",

    skills: () => {
      return `
        I am a fast learner and highly motivated individual. <hr> 
        <span style="color:${themeColors.textColor};"><strong>Programming Languages</strong>:</span> Java, JavaScript, C++, Python <br>
        <span style="color:${themeColors.textColor};"><strong>Currently Learning</strong>:</span> TypeScript, Golang, Flutter  <br>
        <span style="color:${themeColors.textColor};"><strong>Frameworks & Libraries</strong>:</span> Node.js, Express.js, React.js, EJS, Bootstrap, Tailwind, Material UI <br>
        <span style="color:${themeColors.textColor};"><strong>Tools</strong>:</span> Git, Postman, VS Code <br>
        <span style="color:${themeColors.textColor};"><strong>Database Technologies</strong>:</span> MySQL, MongoDB, PostgreSQL <br>
        <span style="color:${themeColors.textColor};"><strong>Strengths</strong>:</span> DSA, Backend Development, REST APIs, Problem Solving <br>
        <span style="color:${themeColors.textColor};"><strong>Soft Skills</strong>:</span> Leadership, Teamwork, Communication, Time Management
      `;
    },

    // socials:
    //   "Connect with me on <br>1. LinkedIn: https://www.linkedin.com/in/hardik-gayner-0b2ab32ba,<br>2. GitHub: https://github.com/imHardik1606,<br>3. Twitter: https://x.com/h_gayner, <br>4. Leetcode: https://leetcode.com/u/knight_16",

    socials: `
  Connect with me on <br>
  <div style="font-family: 'Times New Roman', Times, serif;">
  1. <a href="https://www.linkedin.com/in/hardik-gayner-0b2ab32ba" target="_blank"><i class="fab fa-linkedin">&nbsp; &nbsp;</i>LinkedIn</a><br>
  2. <a href="https://github.com/imHardik1606" target="_blank"><i class="fab fa-github">&nbsp; &nbsp;</i>GitHub</a><br>
  3. <a href="https://x.com/h_gayner" target="_blank"><i class="fab fa-twitter">&nbsp; &nbsp;</i>Twitter</a><br>
  4. <a href="https://leetcode.com/u/knight_16" target="_blank"><i class="fa-solid fa-code">&nbsp; &nbsp;</i>Leetcode</a>
  </div>
  
  `,

    welcome: `Hey there! I am <strong>Hardik Gayner</strong>, a second-year student at GHRCCST, Nagpur. <br>
    An aspiring <strong>Computer Science</strong> enthusiast with a passion for <strong>problem-solving</strong> and <strong>backend development</strong>. <br>
    Winner of <strong>RTH 2024 Hackathon</strong>, with <strong>1500+ ratings on LeetCode</strong> and <strong>400+ problems solved</strong> on <strong>LeetCode</strong> & <strong>GeeksForGeeks</strong>. <br>
    Constantly learning, coding, and striving to improve with every challenge I tackle!
    `,

    whoami: "guest@user. But you should know who you are!",
    "list fun": `
                <span style="color:${themeColors.textColor};">joke</span>    - get random jokes <br>
                <span style="color:${themeColors.textColor};">motivate</span>    - get motivation to debug the issue <br>
                <span style="color:${themeColors.textColor};">funfact</span>    - get fun facts<br>`,

    date: () => {
      const now = new Date();
      return `Current Date and Time: ${now.toLocaleString()}`;
    },

    joke: () => {
      const jokes = [
        "<b>Why do programmers prefer dark mode?</b> <br> Because light attracts bugs!",
        "<b>Why don't programmers like nature?</b> <br> It has too many bugs.",
        "<b>How many programmers does it take to change a light bulb?</b> <br> None, it's a hardware problem!",
        "<b>Why do Java developers wear glasses?</b> <br> Because they don't C#!",
        "<b>What’s a programmer’s favorite hangout place?</b> <br> The Foo Bar.",
        "<b>Why did the programmer quit his job?</b> <br> He didn’t get arrays.",
        "<b>Why do Python programmers have low self-esteem?</b> <br> Because they’re constantly comparing themselves to self.",
        "<b>What do you call a group of 8 Hobbits?</b> <br> A Hobbyte.",
        "<b>Why was the computer cold?</b> <br> It left its Windows open.",
        "<b>What’s a programmer’s favorite type of music?</b> <br> Algo-rhythm.",
        "<b>Why did the developer go broke?</b> <br> Because he used up all his cache.",
        "<b>Why did the database admin break up with the developer?</b> <br> They had too many conflicts in relationships.",
        "<b>What do you call a programmer from Finland?</b> <br> Nerdic.",
        "<b>Why was the JavaScript developer sad?</b> <br> Because he didn’t know how to null his feelings.",
        "<b>Why can’t programmers tell jokes in binary?</b> <br> Because it’s either funny or it’s not.",
        "<b>Why was the function so good at its job?</b> <br> It always returned a result.",
        "<b>What do you get when you cross a programmer with a musician?</b> <br> Code that’s in C++.",
        "<b>Why was the programmer arrested?</b> <br> He was caught hacking time.",
        "<b>Why do programmers love coffee?</b> <br> Because it’s their source of code energy.",
        "<b>What’s a programmer’s least favorite candy?</b> <br> Syntax errors.",
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    },

    greet: (args) => {
      if (!args || args.length === 0) {
        return "Please provide a name. Usage: greet 'name'";
      }
      const name = args.join(" ");
      return `Hello, ${name}! Welcome to my terminal!`;
    },

    motivate: () => {
      const quotes = [
        "<b> Don't watch the clock; do what it does. Keep going. - Sam Levenson</b>",
        "<b> Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill</b>",
        "<b> The only way to do great work is to love what you do. - Steve Jobs</b>",
        "<b> Believe you can and you're halfway there. - Theodore Roosevelt</b>",
        "<b> Your time is limited, so don't waste it living someone else's life. - Steve Jobs</b>",
        "<b> It does not matter how slowly you go as long as you do not stop. - Confucius</b>",
        "<b> The harder you work for something, the greater you'll feel when you achieve it. - Anonymous</b>",
        "<b> Dream big and dare to fail. - Norman Vaughan</b>",
        "<b> Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman</b>",
        "<b> Opportunities don't happen. You create them. - Chris Grosser</b>",
        "<b> Don't be afraid to give up the good to go for the great. - John D. Rockefeller</b>",
        "<b> I find that the harder I work, the more luck I seem to have. - Thomas Jefferson</b>",
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    },

    funfact: () => {
      const funfacts = [
        "Did you know? The first computer 'bug' was an actual bug—a moth found trapped in a relay of the Mark II computer in 1947!",
        "Fun fact: The first email was sent by Ray Tomlinson to himself in 1971, testing the '@' symbol in email addresses.",
        "Did you know? The first 1GB hard drive, introduced in 1980, weighed over 500 pounds and cost $40,000!",
        "Fun fact: The name 'Google' was derived from the mathematical term 'googol,' meaning the number 1 followed by 100 zeros.",
        "Did you know? The first website ever created is still live at info.cern.ch.",
        "Fun fact: The QWERTY keyboard was designed to prevent typewriter jams, not for typing efficiency!",
        "Did you know? Over 90% of the world’s currency exists only in digital form.",
        "Fun fact: The first-ever video uploaded to YouTube is titled 'Me at the zoo,' uploaded by co-founder Jawed Karim in 2005.",
        "Did you know? The first domain ever registered was Symbolics.com in 1985, and it's still active!",
        "Fun fact: The password for the computer systems used in the U.S. nuclear missile program was once '00000000' for nearly 20 years!",
      ];
      return funfacts[Math.floor(Math.random() * funfacts.length)];
    },

    get_status: () => {
      return `[ 🔥 ] Currently grinding DSA on LeetCode  
            <br>[ 🛠️ ] Building full-stack projects using MERN, LLMs, Gen-AI 
            <br>[ 🏆 ] Won RTH 2025 Hackathon  
            <br>[ 🤖 ] Exploring LLMs for my personal projects  
            <br>[ 🚀 ] Preparing for tech internships`;
    },

    get_learning: () => {
      return `<p style="color:${themeColors.textColor};">Currently learning GoLang & TypeScript</p>`;
    },

    resume: () => {
      window.open(
        "https://drive.google.com/file/d/1ctgWtjVXXjgjWtEU2aLRYIS3I680tuCD/view?usp=sharing"
      );
      return `Directed you to my resume`;
    },

    getResume: () => {
      return `<div style="display: flex; flex-wrap: wrap; gap: 20px; max-width: 900px; font-family: 'Georgia', serif; line-height: 1.6; border: 2px dotted #0077cc; padding: 20px;  border-radius: 10px; box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);">
    
        <div style="flex: 1; min-width: 100%; text-align: center;">
          <h2 style="color:rgb(196, 218, 241); border-bottom: 2px dotted #0077cc; padding-bottom: 5px;">📌 Hardik Gayner</h2>
          <p style="font-size: 16px; font-weight: bold;">📍 Nagpur, Maharashtra | ✉️ <a href="mailto:hardikgayner1606@gmail.com" style="color: #0056b3; text-decoration: none;">hardikgayner1606@gmail.com</a> | 💻 <a href="https://github.com/imHardik1606" target="_blank" style="color: #0056b3; text-decoration: none;">GitHub</a> | 🔗 <a href="https://www.linkedin.com/in/hardik-gayner-0b2ab32ba/" target="_blank" style="color: #0056b3; text-decoration: none;">LinkedIn</a></p>
        </div>
    
        <div style="flex: 1; min-width: 100%;">
          <h2 style="color:rgb(196, 218, 241); border-bottom: 2px dotted #0077cc; padding-bottom: 5px;">🏫 Education</h2>
          <ul style="padding-left: 20px;">
            <li>🎓 <strong>G.H. Raisoni College of Commerce, Science and Technology</strong> (2023 - Present) | CGPA: 8.89</li>
            <li>🎓 <strong>Dr. Ambedkar College, Nagpur</strong> (2020 - 2022) | Grade: 89.33%</li>
            <li>🎓 <strong>Shahu’s Garden High School</strong> (2019 - 2020) | Grade: 93%</li>
          </ul>
        </div>
    
        <div style="flex: 1; min-width: 100%;">
          <h2 style="color:rgb(196, 218, 241); border-bottom: 2px dotted #0077cc; padding-bottom: 5px;">💻 Projects</h2>
          <ul style="padding-left: 20px;">
            <li>🔹 <strong>MERN Chat</strong> - Real-time messaging app with WebSockets | <a href="https://github.com/imHardik1606/mern-chat" target="_blank" style="color: #0056b3; text-decoration: none;">GitHub</a></li>
            <li>🔹 <strong>WanderLust</strong> - Vacation rental platform with Mapbox API | <a href="https://github.com/imHardik1606/Wanderlust" target="_blank" style="color: #0056b3; text-decoration: none;">GitHub</a></li>
            <li>🔹 <strong>Library Management System</strong> - CLI-based book management | <a href="https://github.com/imHardik1606/Library-Management-System" target="_blank" style="color: #0056b3; text-decoration: none;">GitHub</a></li>
          </ul>
        </div>
    
        <div style="flex: 1; min-width: 100%;">
          <h2 style="color:rgb(196, 218, 241); border-bottom: 2px dotted #0077cc; padding-bottom: 5px;">⚡ Skills</h2>
          <p><strong>Languages:</strong> Java, JavaScript, TypeScript, Python, C++, SQL</p>
          <p><strong>Frameworks:</strong> Node.js, Express.js, React.js</p>
          <p><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL</p>
          <p><strong>Tools:</strong> Git, AWS, Postman, VS Code</p>
        </div>
    
        <div style="flex: 1; min-width: 100%;">
          <h2 style="color:rgb(196, 218, 241); border-bottom: 2px dotted #0077cc; padding-bottom: 5px;">🏆 Achievements</h2>
          <ul style="padding-left: 20px;">
            <li>🏅 2× Winner of Raisoni Tech Hackathon (RTHack)</li>
            <li>🥇 1st place in CodePhase (200+ participants)</li>
            <li>📈 1500+ rating on LeetCode, 1200+ on CodeChef</li>
            <li>🧠 Solved 800+ problems on LeetCode & GeeksforGeeks</li>
          </ul>
        </div>
    
      </div>
      <p style="text-align:center; color: #222; color:#fff; font-size: 14px; font-weight: bold; font-family: 'Georgia', serif; margin-top: 15px;">📅 Last Updated: January 2025</p>`;
    },
  };

  function processCommand(input) {
    const [commandName, ...args] = input.split(" ");
    let response;

    if (commands[`${commandName} ${args.join(" ")}`]) {
      response =
        typeof commands[`${commandName} ${args.join(" ")}`] === "function"
          ? commands[`${commandName} ${args.join(" ")}`](args)
          : commands[`${commandName} ${args.join(" ")}`];
    } else if (commands[commandName]) {
      response =
        typeof commands[commandName] === "function"
          ? commands[commandName](args)
          : commands[commandName];
    } else {
      response = `Command not found: ${commandName}`;
    }

    return response;
  }

  function addNewPrompt() {
    const newPrompt = document.createElement("p");
    newPrompt.classList.add("prompt");
    newPrompt.innerHTML = `hardik@desktop:~$ <span contenteditable="true" class="user-input"></span>`;
    terminalBody.appendChild(newPrompt);

    const newUserInput = newPrompt.querySelector(".user-input");
    newUserInput.focus();

    newUserInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const input = newUserInput.textContent.trim();
        if (input) {
          commandHistory.push(input);
          historyIndex = commandHistory.length;
          newUserInput.setAttribute("contenteditable", "false");
          const response = processCommand(input);
          if (response) {
            const responseElement = document.createElement("p");
            responseElement.style.color = "white";
            responseElement.innerHTML = response;
            terminalBody.appendChild(responseElement);
          }
          addNewPrompt();
        }
      } else if (e.key === "ArrowUp") {
        if (historyIndex > 0) {
          historyIndex--;
          newUserInput.textContent = commandHistory[historyIndex];
          placeCaretAtEnd(newUserInput);
        }
      } else if (e.key === "ArrowDown") {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          newUserInput.textContent = commandHistory[historyIndex];
          placeCaretAtEnd(newUserInput);
        } else {
          historyIndex = commandHistory.length;
          newUserInput.textContent = "";
        }
      }
    });
  }

  function placeCaretAtEnd(el) {
    el.focus();
    if (
      typeof window.getSelection != "undefined" &&
      typeof document.createRange != "undefined"
    ) {
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
      const textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  }

  addNewPrompt();
});
