# 🚖 Maa Cab Service – Professional Website

Welcome to the official repository for **Maa Cab Service**, a premium taxi booking service operating across Somnath, Dwarka, and other major Saurashtra tourist destinations. This project delivers a clean, modern, and responsive website to help travelers easily book rides with trust, speed, and convenience.

---

## 📌 Project Overview

**Maa Cab Service** offers a user-centric, mobile-first website that allows tourists and locals to:

- Explore cab services and popular routes
- Learn about the company's background and values
- Browse a gallery of fleet vehicles and travel destinations
- Easily submit ride inquiries via a secure online form

The website is designed to be **fast**, **SEO-friendly**, and **production-ready**, following modern design and coding standards.

---

## 🌐 Tech Stack

| Category         | Technology Used                     |
|------------------|-------------------------------------|
| Frontend         | HTML5, CSS3, JavaScript (Vanilla)   |
| Contact Forms    | EmailJS (with custom templates)     |
| Deployment       | Cloudflare Pages / GitHub Pages     |
| Domain & DNS     | Hostinger + Cloudflare              |
| Email Backend    | EmailJS (Frontend-only secure usage)|
| Design System    | Responsive, Mobile-First, Clean UI  |

---

## ✨ Features

- ✅ Fully responsive, animated layout
- ✅ SEO-optimized content and meta tags
- ✅ Mobile-first design for travel customers
- ✅ Integrated EmailJS form with custom email templates
- ✅ Easy scalability for more services or destinations

---

## 🔒 Form Security & Email Integration

The contact form is securely integrated using **EmailJS**, allowing:

- ✅ Real-time inquiry delivery without backend
- ✅ No API keys exposed (uses public client ID)
- ✅ **Custom email templates**:
  - 📩 *Admin Notification Template* — detailed booking info
  - 🤝 *Client Auto-Reply Template* — confirmation message with thanks

---

## 🚀 Deployment Guide

### 1. Clone this Repository

```bash
git clone https://github.com/your-username/maa-cab-service.git
cd maa-cab-service
```

### 2. Edit Content

- Update HTML pages with your local phone numbers, service areas, and routes.
- Edit gallery images and contact details as needed.
- Insert your **EmailJS public key, service ID, and template ID** in `main.js`.

### 3. Configure EmailJS

- Sign up at https://www.emailjs.com
- Create 2 custom templates:
  - One for **admin notification**
  - One for **client auto-reply**
- Use placeholders for name, email, pickup, drop, date, time, message

### 4. Deploy the Website

**Option 1: GitHub Pages**
- Push to a GitHub repo
- Enable Pages under `Settings → Pages → Source: root`
- Your site will be live at `https://Nitsanghani111.github.io/maa-cab-service/`

**Option 2: Cloudflare Pages**
- Connect repo to Cloudflare Pages
- Choose "No Build Command"
- Deploy and connect custom domain via Cloudflare DNS

---

## 📁 Folder Structure

```
maa-cab-service/
├── assets/             # Images, logo, gallery
├── css/                # Stylesheets
├── js/                 # main.js with EmailJS logic
├── index.html          # Home page
├── about.html          # About us
├── services.html       # Services offered
├── gallery.html        # Travel gallery
├── contact.html        # Contact form
├── README.md           # Project documentation
```

---

## 📞 Contact & Support

| Role        | Name               | Contact                         |
|-------------|--------------------|----------------------------------|
| Developer   | Nit Sanghani       | 📧 nitsanghani05@gmail.com       |
| Client      | Maa Cab Service    | 📍 Somnath, Gujarat              |

For bug reports or feature requests, please contact the developer directly.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

> 🚕 *"Travel with trust. Maa Cab Service – Your journey, our promise."*
