# 🚀 Sprint Plan (1.5-Hour Increments)

> This sprint plan breaks down the app into detailed 1.5-hour development sprints. Total time: ~30 hours (20 sprints).

---

## 🧩 Phase 1: Project Scaffolding & Core UI

### ✅ Sprint 1: Project Setup

- Initialize project using Vite + React + TypeScript
- Add Tauri scaffold with `create-tauri-app`
- Set up basic folder structure (`components/`, `pages/`, `store/`, `src-tauri/commands/`)
- Install Zustand, React Router DOM

### ✅ Sprint 2: UI Layout

- Create sidebar and navigation components
- Add routing to `Tasks`, `Focus Mode`, `Dashboard`
- Stub page components and layout grid

---

## 📋 Phase 2: Task & Planner System

### ✅ Sprint 3: Task Creation UI

- Add Zustand store for tasks
- Create task form (title, description, category)
- List and filter tasks

### ✅ Sprint 4: Planner View

- Add daily/weekly planner grid
- Drag-and-drop support using `react-beautiful-dnd`
- Sync planner blocks to tasks

### ✅ Sprint 5: Productivity Target System

- Add input for weekly goal (default: 20–30 hrs)
- Display progress bar toward weekly goal
- Sync with task durations

### ✅ Sprint 6: Task Persistence

- Setup Tauri IPC commands
- Store/load tasks from SQLite using `tauri-plugin-sql`
- Link UI actions to backend updates

---

## 🧠 Phase 3: Smart Suggestion Engine (Local ML)

### ✅ Sprint 7: Smart Engine Stub

- Add dummy ML model in TF.js or ONNX format
- Create suggestion engine interface in `ml/`
- Mock prediction logic based on task history

### ✅ Sprint 8: Smart Task Recommender

- Integrate real task data into prediction
- Show recommendations in planner UI
- Trigger updates based on time of day

---

## 🏆 Phase 4: Gamification Layer

### ✅ Sprint 9: XP & Levels

- Track XP from task completions
- Level up logic and display current level
- Add Zustand XP store

### ✅ Sprint 10: Streaks & Badges

- Calculate daily streaks
- Award badges for milestones
- Animate with Lottie + Confetti

---

## 📊 Phase 5: Analytics Dashboard

### ✅ Sprint 11: Progress Charts

- Build pie chart (categories), bar chart (hours)
- Add Recharts or Chart.js
- Show XP, level, goal % progress

### ✅ Sprint 12: Backend Integration

- Pull analytics from SQLite
- Aggregate data from tasks + planner
- Optimize queries and format output

---

## 🔒 Phase 6: Focus Lock System

### ✅ Sprint 13: Focus Lock Setup UI

- Ask user to grant input permission
- Let user select screen + optional app/window
- Show time block for focus session

### ✅ Sprint 14: Monitor Overlay (Windows)

- Create fullscreen, always-on-top overlays
- Detect and block input using Win32 APIs
- Use `BlockInput`, `ClipCursor`, `GetForegroundWindow`

### ✅ Sprint 15: App/Tab Switch Detection

- Poll foreground app
- If not whitelisted, trigger unlock engine
- Support edge detection for mouse movement to screen borders

### ✅ Sprint 16: macOS Stub

- Detect active window using `NSWorkspace`
- Show overlays on monitors
- Ask for Accessibility permission at runtime

---

## 🧩 Phase 7: Unlock Challenge Engine

### ✅ Sprint 17: Challenge Engine Logic

- Build logic for 3+ types: reverse typing, memory recall, logic riddle
- Track attempt time and correctness
- Add minimal UI for each

### ✅ Sprint 18: Trigger + Enforcement

- Trigger challenge UI when user breaks focus
- Block exit until challenge is passed or emergency confirmed

---

## 🔐 Phase 8: Security, Cross-Platform & Finalization

### ✅ Sprint 19: Secure Storage + IPC

- Add `tauri-plugin-secure-storage`
- Validate all IPC commands
- Use `serde` for structured data

### ✅ Sprint 20: macOS Modularization

- Move OS-specific logic to `windows_focus.rs` and `macos_focus.rs`
- Ensure graceful fallback for unsupported features
- Final polish + testing

---

## ✅ Summary Table

| Phase | Sprint | Focus            | Time  |
| ----- | ------ | ---------------- | ----- |
| 1     | 1–2    | Setup, UI Layout | 3 hrs |
| 2     | 3–6    | Tasks & Planner  | 6 hrs |
| 3     | 7–8    | Smart Engine     | 3 hrs |
| 4     | 9–10   | Gamification     | 3 hrs |
| 5     | 11–12  | Analytics        | 3 hrs |
| 6     | 13–16  | Focus Lock       | 6 hrs |
| 7     | 17–18  | Unlock Engine    | 3 hrs |
| 8     | 19–20  | Security & Final | 3 hrs |

---

> 💡 Total Estimated Time: **30 Hours (20 sprints x 1.5 hours)**
