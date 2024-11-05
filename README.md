# Task Pomodoro Timer - Chrome Extension

A simple, lightweight Pomodoro Timer Chrome extension designed to help you boost productivity by using the Pomodoro Technique. Start, pause, or reset a timer for focused work sessions and get notified when it's time to take a break!

## Features
- **25-minute Timer**: A default 25-minute timer for focused work.
- **Start/Pause and Reset**: Easily start, pause, and reset the timer.
- **Desktop Notifications**: Get notified when your Pomodoro session ends.
- **Easy to Use**: Clean and simple UI to enhance productivity without distractions.

## Project Structure
The project is organized as follows:

pomodoro-timer
├── favicon.ico
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
└── icon.png

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click on **Load unpacked** and select the `pomodoro-timer` folder.
5. The Task Pomodoro Timer extension should now appear in your Chrome toolbar.

## Usage

1. Click the Task Pomodoro Timer icon in your Chrome toolbar to open the popup.
2. Press the **Start** button to begin a 25-minute focus session.
3. **Pause** or **Reset** the timer as needed.
4. When the timer completes, a desktop notification will alert you to take a break.

## Files and Folders

- **manifest.json**: Contains the extension's metadata and permissions (required for notifications).
- **popup.html**: The HTML file for the popup interface that displays the timer.
- **popup.js**: Handles the timer countdown logic, start/pause/reset functionality, and notification setup.
- **styles.css**: Adds basic styling to the timer UI in the popup.
- **icon.png**: The icon used for the extension in the Chrome toolbar.

## Development Notes

- **Notification Permissions**: Make sure `manifest.json` includes `"permissions": ["notifications"]` for desktop notifications.
- **Testing Notifications**: If notifications aren't working, ensure Chrome notifications are enabled for this extension under `chrome://settings/content/notifications`.

## Screenshots
> Add screenshots of the popup timer interface to demonstrate the UI (if desired).

## Future Enhancements
- **Custom Timer Length**: Allow users to adjust the focus session length.
- **Break Reminders**: Option for reminders after each work session.
- **Session Tracking**: Record completed sessions for tracking productivity over time.

## Contributing
Feel free to fork this project and submit pull requests for any features or improvements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
