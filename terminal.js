// Terminal functionality
const output = document.getElementById('output');
const commandInput = document.getElementById('command-input');

// Command history
let commandHistory = [];
let historyIndex = -1;

// Initialize terminal
function init() {
    printWelcome();
    commandInput.focus();
}

// Print welcome message
function printWelcome() {
    addOutput('Welcome to the Command Line Interface!', 'response');
    addOutput('Type "help" for a list of available commands.', 'response');
    addOutput('', 'response');
}

// Add output to terminal
function addOutput(text, className = '') {
    const line = document.createElement('div');
    line.className = 'output-line ' + className;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// Handle command execution
function handleCommand(cmd) {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    switch (trimmedCmd) {
        case 'help':
            addOutput('Available commands:', 'response');
            addOutput('  help  - Show this help message', 'response');
            addOutput('  clear - Clear the terminal screen', 'response');
            addOutput('  about - Display information about this terminal', 'response');
            addOutput('  echo  - Echo back your input (usage: echo <text>)', 'response');
            break;
            
        case 'clear':
            output.innerHTML = '';
            break;
            
        case 'about':
            addOutput('Command Line Interface v1.0', 'response');
            addOutput('A simple terminal emulator built with HTML, CSS, and JavaScript', 'response');
            addOutput('GitHub Pages Project', 'response');
            break;
            
        case '':
            // Empty command, do nothing
            break;
            
        default:
            // Handle echo command
            if (trimmedCmd.startsWith('echo ')) {
                const text = cmd.substring(5);
                addOutput(text, 'response');
            } else {
                addOutput(`Command not found: ${cmd}`, 'error');
                addOutput('Type "help" for available commands', 'response');
            }
            break;
    }
}

// Handle keyboard input
commandInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const cmd = commandInput.value;
        
        // Display the command
        if (cmd.trim() !== '') {
            addOutput('$ ' + cmd, 'command');
            
            // Add to history
            commandHistory.push(cmd);
            historyIndex = commandHistory.length;
            
            // Execute command
            handleCommand(cmd);
        }
        
        // Clear input
        commandInput.value = '';
    } else if (e.key === 'ArrowUp') {
        // Navigate command history up
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        // Navigate command history down
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            commandInput.value = '';
        }
    }
});

// Keep input focused
document.addEventListener('click', function() {
    commandInput.focus();
});

// Initialize when page loads
window.addEventListener('load', init);
