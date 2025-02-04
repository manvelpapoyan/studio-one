# News App

This is a **React + Redux (Thunk) + TypeScript** news application that allows users to **view, add, and delete news articles** while utilizing **Material UI, lazy loading, infinite scroll, and a mock JSON-based database**.

## 🚀 Features

### Authentication State

- **Public Access (Non-authenticated users)**

  - View all news articles
  - Search and filter news
  - View Fibonacci numbers and prime number indicators
  - Infinite scroll through news items

- **Authenticated Users (Additional features)**
  - All public access features
  - Add new news articles via modal
  - Delete existing news articles
  - Full CRUD operations access

### Core Features

1. **News CRUD Operations**

   - Create: Add new news articles (Authenticated users only)
   - Read: View news articles (All users)
   - Update: Modify existing articles (Not implemented)
   - Delete: Remove news articles (Authenticated users only)
   - Data stored in local JSON and managed via Redux

2. **News Listing**

   - Title and description display
   - Image preview
   - Fibonacci number calculation
   - Prime number verification
   - Responsive grid layout

3. **Performance Optimizations**

   - Lazy loading for images
   - Component lazy loading
   - Infinite scroll implementation
   - Optimized rendering for large datasets

4. **User Interface**
   - Material UI components
   - Responsive design
   - Modal for news addition
   - Search and filter functionality
   - Clean and intuitive layout

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript
- **State Management:** Redux Toolkit (Thunk Middleware)
- **UI Framework:** Material UI
- **Mock API:** JSON Server
- **Performance Enhancements:** Lazy Loading, Infinite Scroll

---

## 📂 Folder Structure

```
/news-app
  ├── src/
  │   ├── components/   # Reusable UI Components
  │   ├── constants/    # For Constants & Hard Coded Data
  │   ├── pages/        # Route Pages
  │   ├── redux/        # Redux Store & Slices
  │   ├── services/     # API Service Layer
  │   ├── helpers/      # StorageManager
  │   ├── hoc/          # Private Route Protection
  │   ├── utils/        # Utility Functions (Fibonacci)
  │   ├── App.tsx       # Main Application File
  │   ├── index.tsx     # React DOM Rendering
  ├── db.json           # Mock JSON Database
  ├── package.json      # Dependencies & Scripts
  ├── README.md         # Documentation
```

---

## 🔧 Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/manvelpapoyan/studio-one.git
cd news-app
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Run the mock database (JSON Server)**

```bash
npx json-server --watch db.json --port 5000
```

4️⃣ **Start the React App**

```bash
npm start
```

The application will be available at `http://localhost:5137/`.

---

## 📜 Available Scripts

| Command                                       | Description                         |
| --------------------------------------------- | ----------------------------------- |
| `npm start`                                   | Runs the app in development mode    |
| `npm run build`                               | Builds the app for production       |
| `npm run lint`                                | Runs ESLint for code quality checks |
| `npx json-server --watch db.json --port 5000` | Runs the mock database              |

---

## 📌 How It Works

### 1️⃣ News Listing ( `/news` )

- Fetches data from the mock API.
- Displays **title, description, image, Fibonacci number**.
- **Lazy loads images** to improve performance.
- Implements **infinite scroll** for large datasets.

### 2️⃣ Adding News

- Click **"Add News"** button.
- Fill in **title, description, and image URL**.
- System generates a **Fibonacci number**, checks if it's prime.
- The news is **added to the Redux store & mock database**.

### 3️⃣ Deleting News

- Click the **"Delete"** button on a news item.
- The news is **removed from Redux & mock database**.

---

## ✅ Best Practices Used

- **Redux Toolkit** for state management
- **Separation of Concerns**: Service layer (`newsService.ts`) handles API calls
- **Lazy Loading & Infinite Scroll** to optimize performance
- **TypeScript** for type safety
- **Material UI** for a modern UI

---

## 📩 Deployment

To build the application for production:

```bash
npm run build
```

Then deploy using **Vercel, Netlify, or any static hosting service**.

---

---

## 📝 License

This project is licensed under the **MIT License**.

# studio-one
