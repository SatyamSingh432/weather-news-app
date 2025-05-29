A simple, responsive React dashboard that displays current **weather forecasts** and **latest news**. Built with modern frontend tools including **React**, **TypeScript**, **Tailwind CSS**, **Recharts**, and **Lottie animations**.

---

## Features

### Weather Page

-  Enter a **city name** to fetch weather data.
- Shows **7 weather cards** using 3-hour forecast intervals (used as an alternative to 7-day data due to API limitations).
-  Displays a **temperature line chart** using `Recharts`.
-  Includes Lottie animations for visual engagement.
-  Responsive and styled with Tailwind CSS.

> ⚠️ The weather data is fetched from a free API, which only provides 3-hour interval data. A paid plan is required to access full 7-day forecasts.

---

### 📰 News Page

-  Browse news by **category** (general, sports, business, technology, entertainment, health).
-  Click a news card to open a modal with the article’s summary and a link to the original source.
- Works on **localhost** with the News API.
- ⚠️ **Note**: When deployed to platforms like Netlify, the News API may return a `426 Upgrade Required` error due to free-tier limitations. Upgrading the API plan is required for production deployment.

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Lottie React](https://lottiereact.com/)
- [React Router](https://reactrouter.com/)

---