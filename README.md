# VR Command Center

A standalone, interactive Virtual Reality experience built with [A-Frame](https://aframe.io/). This project simulates a futuristic command center with interactive screens and a responsive Heads-Up Display (HUD).

![VR Command Center](https://img.shields.io/badge/Status-Active-success)

## 🌟 Features

-   **Immersive 3D Environment**: A "Tron-inspired" aesthetic with dynamic lighting and environmental effects.
-   **Interactive Screens**: Gaze-based interaction allows users to "click" screens to trigger system events.
-   **Heads-Up Display (HUD)**: A 2D overlay that provides real-time feedback, system status, and logs.
-   **Cross-Platform**: Works on desktop (mouse/keyboard) and VR headsets.

## 🛠️ Technologies Used

-   **HTML5 & CSS3**: For the structure and the 2D HUD overlay.
-   **JavaScript (ES6+)**: For system logic and state management.
-   **A-Frame**: A web framework for building virtual reality experiences.
-   **A-Frame Environment Component**: For generating the atmospheric background.

## 🚀 Getting Started

### Prerequisites

You need a modern web browser (Chrome, Firefox, Edge) that supports WebGL.

### Installation & Running

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/vr-command-center.git
    ```
2.  **Open the project**:
    Navigate to the project folder.
3.  **Run the application**:
    *   **Recommended**: Use a local development server (like Live Server in VS Code or `python -m http.server`) to avoid CORS issues with local files.
    *   **Simple**: Open `index.html` directly in your browser (some features might be limited depending on browser security settings).

## 🎮 Controls

-   **Desktop**:
    -   **Look**: Click and drag the mouse.
    -   **Move**: WASD keys.
    -   **Interact**: Place the center cursor over an object and click.
-   **VR Headset**:
    -   **Look**: Move your head.
    -   **Interact**: Gaze at an object (fuse cursor) or use the controller trigger.

## 📂 Project Structure

```
├── css/
│   └── style.css       # Styles for the 2D HUD overlay
├── js/
│   ├── components.js   # Custom A-Frame components
│   └── main.js         # Main system logic
├── index.html          # Entry point and scene definition
└── README.md           # Project documentation
```

## 🔮 Future Improvements

-   [ ] Audio feedback for interactions.
-   [ ] Multiple room navigation.
-   [ ] Real-time data visualization on screens.

---

*Created with ❤️ by BRUCE*
