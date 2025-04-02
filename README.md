# Google AI Studio Userscript

A Tampermonkey userscript to improve performance on Google AI Studio by keeping only the last 3 chat turns (prompt, thinking, response).

## Features
- Trims older chat turns to reduce DOM size and lag.
- Runs automatically on page load, every 30 seconds, and on DOM updates.
- Lightweight and easy to install.

## Installation
1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) in your browser.
2. Click [here](https://raw.githubusercontent.com/amirhosseinghanipour/google-ai-studio-userscript/main/google-ai-studio-chat-trimmer.user.js) to install the script, or copy it from the file.
3. Tampermonkey will prompt to add it—confirm and enable.

## Usage
- Open [Google AI Studio](https://aistudio.google.com).
- The script will automatically trim chats to the last 3 turns.

## Tip for Older Laptops
If you’re using an older laptop and noticed lag with Google AI Studio (like I did!), this script helps, but you can also optimize your browser:
- **Enable Overlay Scrollbars**: In Chrome, go to `chrome://flags`, search "Overlay Scrollbars," set to **Enabled**, and restart. This reduces rendering load.
- **Disable Hardware Acceleration**: Go to `chrome://settings/system`, turn off "Use graphics acceleration when available," and restart. On older hardware, this can prevent slowdowns.

## Contributing
Feel free to fork, submit issues, or send pull requests to update the script!

## License
[MIT License](LICENSE)
