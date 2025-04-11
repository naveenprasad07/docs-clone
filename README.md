# 📝 Docs Clone

A modern collaborative document editor built with cutting-edge tools like **Next.js**, **Convex**, **Clerk**, and **Liveblocks**. Inspired by Google Docs but tailored for teams, organizations, and real-time collaboration.

## 🌍 Live URL

[👉 Open the app](https://docs-clone-zeta.vercel.app)

## ✨ Features

### ✅ Document Management
- Create, edit, rename, and delete documents
- Autosave support with initial content option
- Document search with instant filtering
- Title-based full-text search across your documents

### 🧑‍💼 Access Control
- Clerk-powered authentication
- Organization-based access using Clerk's `organization_id`
- Only document owners or org members can edit/delete documents

### 🔍 Search & Pagination
- Paginated document listings
- Full-text search via Convex search indexes
- Smart filtering based on organization or user ownership

### 🧠 Rich Text Editing
- Built with TipTap and Liveblocks for real-time multi-user editing
- Supports text styles, headings, links, images, tables, and more
- Tasks, checklists, and custom extension support

### 🧑‍🤝‍🧑 Real-Time Collaboration
- Cursor presence and live edits powered by **Liveblocks**
- Collaboration cursors with avatars and usernames
- Shared editing with no conflicts using Y.js & TipTap

### 🎨 UI/UX
- Built with Radix UI & TailwindCSS for a polished interface
- Responsive and accessible layout
- Theme support via `next-themes`

### 🔧 Dev Stack
- **Next.js 15**
- **Convex** (serverless backend & real-time DB)
- **Clerk** (auth + org management)
- **Liveblocks** (collaboration infra)
- **TipTap** (rich text editor)
- **Zustand** (state management)
- **Radix UI** + **Tailwind CSS** (design system)

---

👨‍💻 Built with ❤️ by [Naveen Prasad]
