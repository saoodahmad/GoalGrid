# 🧠 Goal Grid – Tauri-Based Productivity Checklist App

> **A dopamine-inducing, gamified checklist + focus management desktop app for part-time learners (20–25 hrs/week)**

---

## 📦 App Name: Goal Grid

Goal Grid is a Tauri-based productivity checklist and focus management desktop app designed for part-time learners. It combines gamified tracking, a smart recommendation engine, and distraction control tools to build intentional, focused study habits.

---

## ✅ Features

### 1. ✅ Task & Planner System (React + Zustand)

- Task creation, editing, category tagging
- Daily & weekly planning views
- Completion tracking synced to local SQLite storage
- **Productivity target system**: user can set weekly target hours (default: 20–30 hrs)
- Progress bar shows percentage of weekly goal completed

### 2. ✅ Smart Suggestion Engine (Local ML)

- Recommends optimal tasks for each time of day
- Learns from completion patterns
- Runs locally using TensorFlow\.js or ONNX via Rust/WASM

### 3. ✅ Gamification Layer

- XP and levels based on task difficulty
- Badge achievements and streaks
- Animated feedback with Lottie and confetti

### 4. ✅ Analytics Dashboard

- Weekly goal tracking
- Charts for categories, streaks, completions
- Built using Recharts or Chart.js

### 5. ✅ Focus Lock System (Cross-Monitor + Window-Level)

Before each focus session, the user is prompted to grant permission to restrict input, select their primary screen, and optionally choose the application window or browser tab to focus on. This ensures that user consent is explicitly provided every time focus mode is initiated.

- User selects 1 screen **and** optionally a specific application window or browser tab to remain active
- All other monitors display fullscreen overlays
- **Keyboard and mouse input is restricted** to the selected app/tab only (on supported OS APIs)
- Attempts to switch apps, tabs, or move the cursor to another screen are actively monitored
- On **Windows**, input can be fully blocked and cursor clamped using native APIs.
- On **macOS**, overlays and app focus detection are possible, but input cannot be forcefully restricted — OS-level Accessibility permissions are required and user consent is respected.
- (Optional) Future browser tab enforcement can be achieved via extension-based integration.
- Any such violation immediately triggers the **Unlock Challenge Engine** to discourage breaking focus

### 6. ✅ Unlock Challenge Engine

The Unlock Challenge Engine activates when a user violates focus lock conditions, such as switching windows, changing browser tabs, or attempting to exit early.

- Reverse typing
- Memory recall
- Logic puzzles
- Prevents accidental or impulsive exit from focus mode

### 7. ✅ Security & Privacy

- All IPC commands validated in Rust
- SQLite data optionally encrypted
- Tauri secure storage plugin support
- Emergency exit requires triple confirmation

---

## 🛠️ Platform Support

| Platform       | Status             | Notes                                           |
| -------------- | ------------------ | ----------------------------------------------- |
| 🪟 Windows 10+ | ✅ Fully Supported | Focus lock + cursor clamping with OS APIs       |
| 🍎 macOS       | 🕸️ Ready for Port  | Rust code modularized using `#[cfg(target_os)]` |

> OS-specific code is abstracted using:

```rust
#[cfg(target_os = "windows")]
mod windows_focus;

#[cfg(target_os = "macos")]
mod macos_focus;
```

---

## 📁 Folder Structure

```
focusforge/
├── src/
│   ├── components/         # UI components (tasks, planner, focus, etc.)
│   ├── pages/              # React views
│   ├── store/              # Zustand state stores
│   ├── ml/                 # ML logic (TF.js or Rust bindings)
│   ├── App.tsx
│   └── main.tsx
├── src-tauri/
│   ├── commands/
│   │   ├── tasks.rs
│   │   ├── gamification.rs
│   │   ├── focus_lock.rs
│   │   ├── suggestions.rs
│   │   ├── analytics.rs
│   │   └── unlock_challenge.rs
│   └── main.rs
```

---

## 🔐 Final Thoughts

Goal Grid is built not only for productivity, but for personal behavioral design — enforcing focus while preserving control and ethical escape routes. Designed to be cross-platform, lightweight, and deeply personal.

---

Feel free to contribute, fork, or expand upon Goal Grid to match your lifestyle!
