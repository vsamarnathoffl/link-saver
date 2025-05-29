# Link Saver with Auto-Summary (Next.js - AI Powered App)

## Project Overview

This project is a simple and responsive **AI-powered Bookmark Manager** web app that allows users to save links and generate automatic summaries using the **Jina AI Summarization API**.

It features a minimalist design, local storage for saved bookmarks, and static login credentials for access. This is a take-home technical assignment for a Software Developer Internship at **OMVAD**.

> **Note:** This is a frontend-only app with no backend authentication or persistent database. All data is stored in the browser's `localStorage`.

---

## Tech Stack

- **Next.js 13 App Router**
- **Tailwind CSS**
- **Jina AI API** (for link summarization)
- **React Icons**
- **React Hot Toast** (for notifications)
- **React Markdown** (to display formatted summaries)
- **localStorage** (for client-side data persistence)
- **Vercel** (for deployment)
---
## Screenshots

### Login

![login.png](https://i.postimg.cc/FR2NcGXk/login.png)

### Bookmark view

![bookmark.png](https://i.postimg.cc/G3Qc7PRY/bookmark.png)

---
## Features

- **Static Auth**: Simple login using predefined credentials.
- **Save URLs**: Bookmark any valid link with one click.
- **AI Summaries**: Generate summaries using Jina AI.
- **Local Storage**: Save and persist bookmarks on the client side.
- **Delete Bookmarks**: Remove saved links easily.
- **Responsive UI**: Fully responsive across devices.
- **Toasts**: Get real-time feedback for actions.

---

## Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/vsamarnathoffl/link-saver.git
cd link-saver
```
2. **Clone the Repository**
```bash
npm install
```
3. **Run the App Locally**
```bash
npm run dev
```
4. **Open in Browser**: Visit `http://localhost:3000`
---
## Time Spent Breakdown
```
| Task                          | Duration     |
|-------------------------------|--------------|
| Project setup + basic routing | 1 hour       |
| Login system & static auth    | 1 hour       |
| Bookmark & localStorage logic | 1.5 hours    |
| Jina AI API integration       | 1.5 hours    |
| Styling with Tailwind         | 1.5 hours    |
| UI polishing & responsiveness | 1 hour       |
| Testing & bug fixing          | 1 hour       |
| Total                         | 8.5 hours    |
```
---
## Future Improvements

- Add user registration and secure authentication
- Use a backend database for persistent storage
- Improve error handling and loading states
- Add pagination for bookmarks
- Implement search functionality
---
## Deployment

Hosted on Vercel  
**Live Link**: https://link-saver-vsamarnathoffls-projects.vercel.app/

---

## Demo Credentials

Use the following to log in:
- **Email**: `demo@test.com`
- **Password**: `password123`

---

## Resume

My resume is available publicly in a separate repository as required:  
**Resume Repository**: https://github.com/vsamarnathoffl/Resume_Amarnath

---

## Author

- **Full Name**: Veerabhadra Sai Amarnath Amudalapalli  
- **Email**: vsamarnathofficial@gmail.com  
- **LinkedIn**: [https://www.linkedin.com/in/avs-amarnath/](https://www.linkedin.com/in/avs-amarnath/)

---

## License

This project is part of a technical assignment for OMVAD and is not intended for commercial use.
