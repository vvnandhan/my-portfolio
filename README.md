# Vayu Nandhan – Personal Portfolio

A modern, responsive developer portfolio built with Vite & React.  
Showcases 3D animations, a timeline-style Experience section, Projects gallery, and a Contact form with resume download.

---

## 🚀 Features

- **Hero** section with animated 3D spaceman (React Three Fiber & Drei)  
- **About** section with interactive timeline and project listings  
- **Contact** section with profile photo, resume download, and Formspree-powered form  
- Fully responsive layout — desktop 
- Easy deployment to Vercel or Netlify  

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite  
- **3D & Animation**: @react-three/fiber, @react-three/drei, Framer Motion  
- **Styling**: Custom CSS
- **Forms**: Formspree  
- **Hosting**: Vercel / Netlify  
- **Version Control**: Git & GitHub  

---

## 📁 Project Structure

my-portfolio/
├─ public/
│ └─ spaceman.glb
├─ src/
│ ├─ assets/
│ │ ├─ about-bg-final.png
│ │ ├─ background.png
│ │ ├─ planets.png
│ │ ├─ profile.jpg
│ │ └─ stones.png
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ ├─ ExperienceSection.jsx
│ │ ├─ ProjectsSection.jsx
│ │ └─ Subtext.jsx
│ ├─ sections/
│ │ ├─ Hero.jsx
│ │ ├─ About.jsx
│ │ ├─ About.css
│ │ ├─ Contact.jsx
│ │ └─ Contact.css
│ ├─ App.jsx
│ ├─ index.css
│ └─ main.jsx
├─ package.json
└─ README.md


---

## 🔧 Getting Started

### Prerequisites

- Node.js (v16+) & npm  
- Git  

### Installation

```bash
# Clone the repo
git clone git@github.com:vvnandhan/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start Vite dev server
npm run dev

npm run build



