# News App

This is a **React + Redux (Thunk) + TypeScript** news application that allows users to **view, add, and delete news articles** while utilizing **Material UI, lazy loading, infinite scroll, and a mock JSON-based database**.

## 🚀 Features

- **News CRUD Operations** (Stored in local JSON data and handled via Redux)
- **News Listing** (Displays title, description, image, Fibonacci number, prime number check)
- **Lazy Loading** (Images & Components)
- **Infinite Scroll** (For large data sets)
- **News Addition via Modal** (Material UI Dialog)
- **Delete News Items** (Removes from Redux Store)
- **Frontend Search & Filtering**
- **Material UI for UI Components**

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
  │   ├── pages/        # Route Pages
  │   ├── redux/        # Redux Store & Slices
  │   ├── services/     # API Service Layer
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

## 🏗️ Project Architecture

### **Redux Store (`src/redux/store.ts`)**

```ts
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";

export const store = configureStore({
	reducer: {
		news: newsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### **News Service (`src/services/newsService.ts`)**

```ts
import axios from "axios";
const API_URL = "http://localhost:5000/news";

export const fetchNews = async () => (await axios.get(API_URL)).data;
export const addNews = async (newsItem) =>
	(await axios.post(API_URL, newsItem)).data;
export const deleteNews = async (id) => await axios.delete(`${API_URL}/${id}`);
```

### **News Slice (`src/redux/slices/newsSlice.ts`)**

```ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews, addNews, deleteNews } from "../../services/newsService";

export const getNews = createAsyncThunk(
	"news/getNews",
	async () => await fetchNews()
);
export const createNews = createAsyncThunk(
	"news/createNews",
	async (newsItem) => await addNews(newsItem)
);
export const removeNews = createAsyncThunk("news/removeNews", async (id) => {
	await deleteNews(id);
	return id;
});

const newsSlice = createSlice({
	name: "news",
	initialState: { newsList: [], loading: false },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNews.fulfilled, (state, action) => {
			state.newsList = action.payload;
		});
		builder.addCase(createNews.fulfilled, (state, action) => {
			state.newsList.push(action.payload);
		});
		builder.addCase(removeNews.fulfilled, (state, action) => {
			state.newsList = state.newsList.filter(
				(news) => news.id !== action.payload
			);
		});
	},
});

export default newsSlice.reducer;
```

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

## 🤝 Contributing

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit changes** (`git commit -m "Added new feature"`)
4. **Push to branch** (`git push origin feature-name`)
5. **Submit a Pull Request** 🚀

---

## 📝 License

This project is licensed under the **MIT License**.
# studio-one
