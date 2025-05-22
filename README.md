# Kevin Terhar - Personal Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-brightgreen)](https://kevinterhar.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-7952B3)](https://getbootstrap.com/)

This repository contains the code for my personal portfolio website, available at [kevinterhar.com](https://kevinterhar.com).

## 📋 Description

This is a simple, elegant portfolio website built with HTML, CSS, and JavaScript. It features a clean design organized around three key themes:

- **Learn**: My educational journey and skills development
- **Earn**: Professional experience and contributions
- **Yearn**: Aspirations, future projects, and vision

## ✨ Features

- 📱 Responsive design that works on all devices
- 📑 Tab-based navigation for content organization
- 🃏 Interactive card elements with hover effects
- 🔗 Social media links
- 🎨 Bootstrap 5 framework for consistent styling
- 🖌️ Clean, minimalist aesthetic with a midnight blue color scheme

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Custom variables, flexbox, transitions
- **JavaScript** - ES6+, interactive elements
- **Bootstrap 5** - Responsive grid and components
- **Google Fonts** - Inter (400, 600)
- **Font Awesome** - Social media and UI icons

## 💻 Local Development

### Option 1: Using Python (Recommended)

This repository is configured to use Python's built-in HTTP server for local development:

1. Start the Python HTTP server:
   ```bash
   python -m http.server 5000
   ```

2. Visit `http://localhost:5000` in your browser


## 🚀 Deployment

This website is configured to be hosted on GitHub Pages with a custom domain:

1. Push changes to the main branch of your GitHub repository
2. GitHub Pages will automatically build and deploy your site
3. The custom domain is configured through the CNAME file and DNS settings

### DNS Configuration

If you're setting up your own custom domain, you'll need to configure DNS records:

#### A Records
```
@ 185.199.108.153
@ 185.199.109.153
@ 185.199.110.153
@ 185.199.111.153
```

#### CNAME Record
```
www kevinterhar.com.github.io
```

## ✏️ Customization

### Modifying Content

- Edit `index.html` to update the main content, cards, and sections
- Update links in the social icons section
- Change the copyright year in the footer

### Styling Changes

- Modify `style.css` to update colors, spacing, or layout
- The color palette is defined using CSS variables at the top of the stylesheet
- Responsive breakpoints are configured at the bottom of the stylesheet

### Adding New Sections

1. Create a new tab button in the navigation
2. Add a corresponding tab-pane div with your content
3. Follow the existing HTML structure for consistency


## 📬 Contact

- 🌐 Website: [kevinterhar.com](https://kevinterhar.com)
- 📧 Add your preferred contact methods here
