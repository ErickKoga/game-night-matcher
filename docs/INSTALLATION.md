# Development Environment Setup Guide

This guide will help you set up Node.js, NestJS, and React + Vite for a monorepo using **npm workspaces**.  
A **monorepo** means the backend and frontend code are in one main folder, with subfolders for each part.

Instructions are provided for **Windows**, **Linux**, and **WSL**.  
**Volta** is recommended for managing Node and npm versions because it ensures consistency, avoids global pollution, and works seamlessly across all platforms.

---

## Why Volta?

- **Consistent Node/npm versions** per project
- **Fast switching** between versions
- **Works on Windows, Linux, and WSL**
- **No global pollution** of your system

---

## Prerequisites

- **Git:** Tool for downloading and managing code ([Download](https://git-scm.com/downloads))
- **Volta:** Tool for installing Node.js and npm ([Install Guide](https://volta.sh))
- **VS Code:** Code editor ([Download](https://code.visualstudio.com/))
- Use the **terminal** (Linux/WSL) or **PowerShell** (Windows) for all commands below.

---

## 1. Install Volta

### Windows

1. Open **PowerShell** (not Command Prompt) as Administrator.
2. Run:
   ```powershell
   iwr https://get.volta.sh -UseBasicParsing | Invoke-Expression
   ```

### Linux / WSL

1. Open your terminal.
2. Run:
   ```bash
   curl https://get.volta.sh | bash
   ```
3. Restart your terminal.

---

## 2. Install Node.js (LTS) and npm

With Volta, run:
```bash
volta install node@lts
volta install npm
```
This pins the latest LTS version of Node.js and npm for all workspaces.

---

## 3. Clone the Project

```bash
git clone https://github.com/ErickKoga/game-night-matcher.git
cd game-night-matcher
```

---

## 4. Install Dependencies (Monorepo)

Run this in the root of the project:
```bash
npm install
```
This will install dependencies for all workspaces (api and web).  
**Tip:** The backend and frontend folders are usually named `api` and `web`.

---

## 5. Running the Project

### API (NestJS)

- **Start API:**
  ```bash
  npm start --workspace api
  ```
- **Development mode:**
  ```bash
  npm run dev --workspace api
  ```
- **Build API:**
  ```bash
  npm run build --workspace api
  ```
- **Format API code:**
  ```bash
  npm run format --workspace api
  ```

### Web (React + Vite)

- **Start web:**
  ```bash
  npm start --workspace web
  ```
- **Development mode:**
  ```bash
  npm run dev --workspace web
  ```
- **Build web:**
  ```bash
  npm run build --workspace web
  ```
- **Format web code:**
  ```bash
  npm run format --workspace web
  ```

---

## 6. Platform-Specific Notes

### Windows

- Use **PowerShell** or **Git Bash** for commands.
- If you encounter compatibility issues, consider using **WSL**.

### Linux

- Use your default terminal (bash, zsh, etc.).
- All commands above work natively.
- **If you want to use WSL on Windows, [see here how to set up WSL](#how-to-set-up-wsl-on-windows).**

### WSL (Windows Subsystem for Linux)

- Open your WSL terminal (Ubuntu recommended).
- Follow the **Linux** instructions above.

---

## 7. Troubleshooting

- If you see errors about Node/npm versions, run `volta install node@lts` again.
- If `npm install` fails, delete `node_modules` and try again.
- For permission errors on Linux/WSL, avoid using `sudo npm install`.

---

## 8. How to Set Up WSL on Windows

1. Open **PowerShell** as Administrator.
2. Run:
   ```powershell
   wsl --install
   ```
   This will install WSL with the default Ubuntu distribution.
3. Restart your computer if prompted.
4. Open the new **Ubuntu** app from your Start menu.
5. Complete the initial setup (username/password).
6. Update your packages:
   ```bash
   sudo apt update && sudo apt upgrade
   ```
7. Continue with the **Linux** instructions above to install Volta, Node.js, and npm.

> For more details, see the [official WSL documentation](https://docs.microsoft.com/en-us/windows/wsl/install).

---

## 9. Next Steps

- Open VS Code in the project folder:  
  ```bash
  code .
  ```
- Read the project README for architecture and workflow.
- Start with a spike or user story.
- For more on Prisma or Docker, see their official docs.
- If you get stuck, ask for help in Issues or reach out to your project partner.

---

Happy coding! 🚀