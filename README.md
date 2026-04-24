# To-Do List Application

A simple and interactive to-do list application built with vanilla JavaScript. Manage your tasks through an intuitive command-based interface with support for creating, viewing, and deleting to-do items.

## Features

- ✅ **Add To-Dos**: Create new to-do items easily
- 📋 **View List**: Display all your current to-do items with their indices
- 🗑️ **Delete To-Dos**: Remove specific tasks by their index number
- 🚀 **Simple Interface**: User-friendly prompt-based interaction

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No external dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-list-app.git
```

2. Navigate to the project directory:
```bash
cd todo-list-app
```

3. Open `index.html` in your web browser:
   - Double-click the `index.html` file, OR
   - Right-click → Open with → Your favorite browser

## Usage

Once the application opens, you'll be prompted with a menu. Enter one of the following commands:

### Commands

| Command | Description |
|---------|-------------|
| `new` | Add new to-do items to your list. Enter items one by one and press `q` to stop adding. |
| `list` | View all current to-do items with their index numbers (displayed in console). |
| `delete` | Remove a to-do item by entering its index number. |
| `quit` | Exit the application. |

### Example Workflow

1. Enter `new` to start adding tasks
2. Type your tasks (e.g., "Buy groceries", "Finish project", "Call mom")
3. Press `q` when done adding tasks
4. Enter `list` to see all your tasks with indices
5. Enter `delete` and provide the index number to remove a task
6. Enter `quit` to exit the app

## Project Structure

```
todo-list-app/
├── index.html      # Main HTML file with instructions
├── app.js          # JavaScript application logic
├── README.md       # This file
└── .gitignore      # Git ignore rules
```

## How It Works

The application uses:
- **JavaScript Prompts**: For user input and interaction
- **Array Methods**: `push()`, `pop()`, and `splice()` for list management
- **Input Validation**: Ensures valid indices and commands

The to-do list is stored in a `todoList` array during the browser session. Note that the list will be cleared if you refresh the page.

## Code Overview

### Core Functionality

- `new`: Prompts user to add items until 'q' is entered
- `list`: Displays all to-do items with numbered indices
- `delete`: Removes an item at the specified index with validation
- `quit`: Exits the application loop

## Future Enhancements

Potential improvements for this project:
- [ ] Add persistent storage using LocalStorage
- [ ] Create a modern UI with HTML/CSS styling
- [ ] Add edit functionality for existing to-dos
- [ ] Implement due dates and priority levels
- [ ] Add local notifications/reminders
- [ ] Create a dark/light theme toggle

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License. See the LICENSE file for more details.

## Author

Created as a learning project to practice JavaScript fundamentals including:
- Loops and conditionals
- Array manipulation
- User input/output
- Control flow

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Happy To-Do Managing!** 📝
