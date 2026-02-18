# Command Line Interface

A simple terminal-like interface built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Description

This project provides a web-based terminal emulator that runs entirely in the browser. It features a dark theme with a classic command-line interface look and feel, complete with a blinking cursor and command history navigation.

## Features

- **Terminal Interface**: Classic CLI appearance with monospace font and dark theme
- **Command System**: Easily extensible command dispatcher
- **Command History**: Navigate through previous commands using arrow keys
- **Built-in Commands**:
  - `help` - Display available commands
  - `clear` - Clear the terminal output
  - `about` - Show information about the terminal
  - `echo <text>` - Echo back text

## Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/snir911/cmdline.git
   cd cmdline
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
     ```

3. Navigate to `http://localhost:8000` in your browser

## Deploying to GitHub Pages

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select the branch (usually `main`)
   - Select the root folder `/`
   - Click "Save"

3. Your site will be published at: `https://snir911.github.io/cmdline/`

## File Structure

```
/
├── index.html      # Main HTML structure
├── style.css       # Styling and dark theme
├── terminal.js     # Terminal functionality and command handling
└── README.md       # This file
```

## Extending the Terminal

To add new commands, edit the `handleCommand()` function in `terminal.js`:

```javascript
case 'yourcommand':
    addOutput('Your response here', 'response');
    break;
```

## License

This project is open source and available for anyone to use and modify.