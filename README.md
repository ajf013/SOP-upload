# Azure Cloud Ops SOPs

A modern, responsive dashboard for managing Standard Operating Procedures (SOPs) for Azure Cloud Operations. Built with React, Vite, and Semantic UI.

---

## Features

-   **SOP Management**: Upload PDF and Word documents directly from your local device.
-   **Local Persistence**: SOPs are saved to your browser's local storage, ensuring they persist across page refreshes.
-   **View & Delete**: Easily view uploaded documents in a new tab or delete them when no longer needed.
-   **Search**: Real-time filtering of SOPs by title.
-   **Theme Support**: Toggle between Light and Dark modes.
    -   **Dark Mode**: Features a sleek, generated dark tech background.
    -   **Light Mode**: Clean, airy interface with a modern technological background.
-   **Responsive Design**: Fully responsive layout that works on desktops and tablets.
-   **PWA Ready**: Configured with Vite PWA plugin for offline capabilities (service worker registration required).

---

## Tech Stack

-   **Frontend**: React.js
-   **Build Tool**: Vite
-   **UI Framework**: Semantic UI React
-   **Animations**: AOS (Animate On Scroll)
-   **Styling**: CSS Modules & Custom CSS

---

## 🌐 Live Demo

🔗 **Live Site:**  
https://azuresop.netlify.app/

---

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/azure-ops-sops.git
    cd azure-ops-sops
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm start
    ```
    The app will run at `http://localhost:3000`.

---

## Usage

### Adding an SOP
1.  Click the **"Add SOP"** button in the top right.
2.  Click **"Upload File"**.
3.  Select a `.pdf`, `.doc`, or `.docx` file from your computer (Max 2MB).
4.  The SOP will appear on the dashboard.

### Viewing an SOP
1.  Click the **"View"** button on any SOP card.
2.  The document will open in a new browser tab/window.
    *   *Note: Ensure pop-ups are allowed for this site.*

### Deleting an SOP
1.  Click the **"Delete"** button on the SOP card.
2.  Confirm the deletion in the prompt.

---

## Project Structure

```
src/
├── components/
│   ├── Header/          # Application header with Theme Toggle
│   ├── Footer/          # Application footer
│   └── SOPDashboard/    # Main dashboard component
├── App.jsx              # Main application layout
├── main.jsx             # Entry point
└── index.css            # Global styles
public/
├── vite.svg             # Azure Logo
├── dark-bg.png          # Dark mode background
└── light-bg.png         # Light mode background
```
---

## License

MIT

---

## You can reach out 😊😊
Feel free to contact me about the problems. I will try to help as much as I can 😉

[![Linkedin Badge](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ajf013-francis-cruz/)
[![Mail Badge](https://img.shields.io/badge/email-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:furkanozbek1995@gmail.com)](mailto:cruzmma2021@gmail.com)
[![Github Badge](https://img.shields.io/badge/github-333?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ajf013)
