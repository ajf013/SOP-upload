# Azure Cloud Ops SOPs

A modern, responsive dashboard for managing Standard Operating Procedures (SOPs) for Azure Cloud Operations. Built with React, Vite, and Semantic UI.

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

## Tech Stack

-   **Frontend**: React.js
-   **Build Tool**: Vite
-   **UI Framework**: Semantic UI React
-   **Animations**: AOS (Animate On Scroll)
-   **Styling**: CSS Modules & Custom CSS

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

## License

MIT
