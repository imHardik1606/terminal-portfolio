document.addEventListener("DOMContentLoaded", function () {
    const terminalBody = document.querySelector(".terminal-body");
    const terminalHeader = document.querySelector(".terminal-header");
    const terminal = document.querySelector(".terminal");
    const commandHistory = [];
    let historyIndex = -1;
  
    // Theme configuration
    const themes = {
      darkMode: {
        backgroundColor: "#121212",
        textColor: "#ffffff",
        accentColor: "#bb86fc",
      },
      lightMode: {
        backgroundColor: "#ffffff",
        textColor: "#ff0000", // Updated to red
        accentColor: "#6200ee",
      },
    };
  
    // Default theme
    let currentTheme = themes.darkMode;
  
    // Theme colors object for dynamic use
    let themeColors = {
      textColor: currentTheme.textColor,
      headerColor: "white",
    };
  
    // Command handlers
    const commands = {
      help: () => {
        return `
          <span style="color:${themeColors.textColor};">about</span> - Learn more about me <br>
          <span style="color:${themeColors.textColor};">clear</span> - Clear the terminal display <br>
          <span style="color:${themeColors.textColor};">echo</span> - Display custom text or messages <br>
          <span style="color:${themeColors.textColor};">education</span> - Explore my academic journey <br>
          <span style="color:${themeColors.textColor};">email</span> - Reach out via Email <br>
          <span style="color:${themeColors.textColor};">exit</span> - Close the current session <br>
          <span style="color:${themeColors.textColor};">help</span> - Get a list of available commands <br>
          <span style="color:${themeColors.textColor};">history</span> - See your command usage history <br>
          <span style="color:${themeColors.textColor};">projects</span> - Check out my projects <br>
          <span style="color:${themeColors.textColor};">pwd</span> - Show the current working directory <br>
          <span style="color:${themeColors.textColor};">skills</span> - View my skill set <br>
          <span style="color:${themeColors.textColor};">themes</span> - Browse through available themes <br>
          <span style="color:${themeColors.textColor};">welcome</span> - View the introductory section <br>
          <span style="color:${themeColors.textColor};">whoami</span> - Find out who the current user is <br>
          <span style="color:${themeColors.textColor};">date</span> - Get today's date <br>
          <span style="color:${themeColors.textColor};">greet "name"</span> - Greet yourself <br>
          <span style="color:${themeColors.textColor};">list fun</span> - Get a list of more fun commands <br>
        `;
      },
  
      themes: `Available themes: <br>ubuntu<br>git-bash<br>sunset<br>sweet<br><br>To change themes, type 'themes go to "theme-name"'.<br>Example: themes go to sunset`,
  
      "themes go to ubuntu": () => applyTheme("#300a24", "#595959", "#00ff00"),
      "themes go to git-bash": () => applyTheme("#1a1a1a", "#2e2e2e", "#00ff00"),
      "themes go to sunset": () =>
        applyTheme("linear-gradient(in oklab, #ffff00, red)", "#ff7f50", "#fffb00"),
      "themes go to sweet": () =>
        applyTheme("linear-gradient(135deg, #ffb6c1, #ff69b4)", "#ffd9df", "#ff178b"),
  
      about: "Curiously driven backend developer. Passionate about solving bugs and building projects.",
      clear: () => {
        terminalBody.innerHTML = "";
        return "";
      },
      echo: (args) => args.join(" "),
      education: () => {
        return `<span style="color:${themeColors.textColor};">G.H. Raisoni College of Commerce, Science and Technology</span> | 2023 - 2026 <br>
          <span style="color:${themeColors.textColor};">Dr. Ambedkar College</span> | 2020 - 2022 <br>
          <span style="color:${themeColors.textColor};">Shahu's Garden High School</span> | till 2020`;
      },
      email: () => {
        window.open("mailto:hardikgayner@gmail.com");
        return "You can reach me at: hardikgayner@gmail.com";
      },
      exit: () => window.close(),
      history: () => commandHistory.join("<br>"),
      projects: "Visit my GitHub to see all my projects.",
      pwd: "You are currently in the root directory.",
      skills: () => {
        return `I am a fast learner and highly motivated individual. <br>
          Languages: Java, JavaScript, C++, Python <br>
          Frameworks: Node.js, Express.js, React <br>
          Tools: Git, Postman, VS Code <br>`;
      },
    };
  
    // Apply theme dynamically
    function applyTheme(bgColor, headerBg, textColor) {
      terminal.style.background = bgColor;
      terminalHeader.style.background = headerBg;
      terminalHeader.style.color = textColor;
      terminalBody.style.color = textColor;
      themeColors.textColor = textColor;
      return "Theme applied successfully!";
    }
  
    // Command execution
    function executeCommand(input) {
      const [command, ...args] = input.split(" ");
      if (commands[command]) {
        return typeof commands[command] === "function"
          ? commands[command](args)
          : commands[command];
      }
      return `<span style="color:red;">Error:</span> Command not found!`;
    }
  
    // Handle user input
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const inputField = document.querySelector(".input");
        const inputValue = inputField.value.trim();
  
        if (inputValue) {
          terminalBody.innerHTML += `<div>> ${inputValue}</div>`;
          const output = executeCommand(inputValue);
          terminalBody.innerHTML += `<div>${output}</div>`;
          commandHistory.push(inputValue);
          historyIndex = commandHistory.length;
          inputField.value = "";
        }
      }
    });
  });
  