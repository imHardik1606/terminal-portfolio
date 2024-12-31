document.addEventListener("DOMContentLoaded", function () {
  const terminalBody = document.querySelector(".terminal-body");
  const terminalHeader = document.querySelector(".terminal-header");
  const terminal = document.querySelector(".terminal");
  const commandHistory = [];
  let historyIndex = -1;
  let themeColors = {
    textColor: "#00ff00", // Default text color (green)
    headerColor: "white",
  };


  const commands = {
    help: () => {
      return `
          <span style="color:${themeColors.textColor};">about</span>       - Learn more about me <br>
          <span style="color:${themeColors.textColor};">clear</span>       - Clear the terminal display <br>
          <span style="color:${themeColors.textColor};">echo</span>        - Display custom text or messages <br>
          <span style="color:${themeColors.textColor};">education</span>   - Explore my academic journey <br>
          <span style="color:${themeColors.textColor};">email</span>       - Reach out via Email <br>
          <span style="color:${themeColors.textColor};">exit</span>        - Close the current session <br>
          <span style="color:${themeColors.textColor};">help</span>        - Get a list of available commands <br>
          <span style="color:${themeColors.textColor};">history</span>     - See your command usage history <br>
          <span style="color:${themeColors.textColor};">projects</span>    - Check out my projects <br>
          <span style="color:${themeColors.textColor};">pwd</span>         - Show the current working directory <br>
          <span style="color:${themeColors.textColor};">skills</span>      - View my skill set <br>
          <span style="color:${themeColors.textColor};">socials</span>     - Discover my social media profiles <br>
          <span style="color:${themeColors.textColor};">themes</span>      - Browse through available themes <br>
          <span style="color:${themeColors.textColor};">welcome</span>     - View the introductory section <br>
          <span style="color:${themeColors.textColor};">whoami</span>      - Find out who the current user is <br>
          <span style="color:${themeColors.textColor};">date</span>        - Get today's date <br>
          <span style="color:${themeColors.textColor};">greet "name"</span> - Greet yourself <br>
          <span style="color:${themeColors.textColor};">list fun</span>    - Get a list of more fun commands <br>
      `;
  },
  
    themes: `Available themes: <br>ubuntu<br>git-bash<br>sunset<br>sweet<br><br>To change themes, type 'themes go to "theme-name"'.<br>Example: themes go to sunset`,
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

    "themes go to sunset": () => {
      terminal.style.background = "linear-gradient(in oklab, #ffff00, red)";
      terminalHeader.style.background =
        "linear-gradient(135deg, #ff7f50, #ff4500)";
      terminalHeader.style.color = "#ffffff";
      terminalBody.style.color = "#fffb00";
      themeColors.textColor = "#fffb00";
      return "Switched to Sunset theme!";
    },

    "themes go to sweet": () => {
      terminal.style.background = "linear-gradient(135deg, #ffb6c1, #ff69b4)";
      terminalHeader.style.background =
        "linear-gradient(135deg, #ffd9df, #ff69b4)";
      terminalHeader.style.color = "#ff178b";
      terminalBody.style.color = "#ff178b";
      themeColors.textColor = "#ff0f9f";
      return "Switched to Sweet theme!";
    },
    about:
      "Curiously driven backend developer.<br>Passionate, Backend dev who like to participate in hackathons + solving silly bugs + building awesome projects💖 <br> Always ready to help out and learn",
    // "portfolio": () => {
    //     window.open("https://hardikportfolio.com/", "_blank");
    //     return '';
    // },
    clear: () => {
      terminalBody.innerHTML = "";
      return "";
    },
    echo: (args) => args.join(" "),
    education: () => {
      return `<span style="color:${themeColors.textColor};">G.H. Raisoni College of Commerce, Science and Technology</span> | 2023 - 2026 <br><span style="color:${themeColors.textColor};">Dr. Ambedkar College</span> | 2020 - 2022 <br><span style="color:${themeColors.textColor};">Shahu's Garden High School</span> | till 2020`;
    },
    email: () => {
      window.open("mailto:hardikgayner@gmail.com");
      return "You can reach me at: hardikgayner@gmail.com";
    },
    exit: () => window.close(),
    history: () => commandHistory.join("<br>"),
    projects:
      "You can visit my github to see all my projects <hr> These are my personal favorites: <br>1. travelBuddy - Find Travel Companions and Share Costs<br> A platform where users can connect with travel companions heading to the same destination. Users can share costs for accommodation, food, and other expenses, and upload detailed travel itineraries to collaborate seamlessly. Built with ExpressJS, MongoDB, and EJS.  <br> <img src='/images/counselai.png' style='width:75%; height:auto;'> &nbsp; <a href=''> Link </a> <br>2. MERN Chat - Real-Time Messaging App<br> A feature-rich real-time chat application built with the MERN stack. It includes private and group messaging, live status indicators, and secure authentication using JWT. The app focuses on performance, scalability, and an intuitive UI.  <br><img src='/images/arbotique.png' style='width:75%; height:auto;'> &nbsp; <a href=''> Link </a> <br>3. SuperCar Rental - Car Rental Management Platform<br> An online platform for renting high-end cars with features like vehicle availability tracking, rental cost calculation, and booking history. Users can browse car models, book vehicles, and track their bookings effortlessly. Built with React, Node.js, and MongoDB.  <br><img src='/images/mediwise.png' style='width:75%; height: auto;'> &nbsp; <a href=''> Link </a> ",
    pwd: "You are currently in the root directory.",
    skills: () => {
      return `I am a fast learner and highly motivated individual. <hr> 
        <span style="color:${themeColors.textColor};">Languages</span>: Java, JavaScript, C++, Python <br>
        <span style="color:${themeColors.textColor};">Currently Learning</span>: TypeScript, Golang, Flutter  <br>
        <span style="color:${themeColors.textColor};">Frameworks & Libraries</span>: Node.js, Express.js, React, EJS, Bootstrap, Tailwind, Material UI <br>
        <span style="color:${themeColors.textColor};">Tools</span>: Git, Postman, VS Code <br>
        <span style="color:${themeColors.textColor};">Database Technologies</span>: MySQL, MongoDB, PostreSQL <br>
        <span style="color:${themeColors.textColor};">Strengths</span>: DSA, Backend Development, REST APIs, Problem Solving <br>
        <span style="color:${themeColors.textColor};">Soft Skills</span>: Leadership, Teamwork, Communication, Time Management`;
    },
    socials:
      "Connect with me on <br>1. LinkedIn: https://www.linkedin.com/in/hardik-gayner-0b2ab32ba/,<br>2. GitHub: https://github.com/imHardik1606,<br>3. Twitter: https://x.com/h_gayner, <br>4. Leetcode: https://leetcode.com/u/HardikGayner/",
    welcome:
      "Hey There! I am Hardik Gayner, Second year student at GHRCCST, Nagpur. <br> An aspiring computer science student with strong interest in problem solving and backend development. <br> Won RTH 2024 Hackathon, 1500+ ratings on Leetcode, solved 400+ problems on Leetcode & GeeksForGeeks. ",
    // "work": () => {
    //     window.open("https://hydammonia.com/", "_blank");
    //     return 'Full Stack Developer @ HACPL';
    // },
    whoami: "guest@user. But you should know who you are!",
    "list fun": `
                <span style="color:${themeColors.textColor};">joke</span>    - get random jokes <br>
                <span style="color:${themeColors.textColor};">motivate</span>    - get motivation to debug the issue <br>`,

    "date": () => {
      const now = new Date();
      return `Current Date and Time: ${now.toLocaleString()}`;
    },
    "joke": () => {
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
        "<b>What’s a programmer’s least favorite candy?</b> <br> Syntax errors."
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
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
        "Dream big and dare to fail. - Norman Vaughan",
        "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
        "Opportunities don't happen. You create them. - Chris Grosser",
        "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
        "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson"
    ];    
      return quotes[Math.floor(Math.random() * quotes.length)];
  },

  };


  function processCommand(input) {
    const [commandName, ...args] = input.toLowerCase().split(" ");
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
