# Hamish Annan Website

A modern, responsive website for Hamish Annan - actor, writer, performance artist, and coach.

## Project Overview

This website serves as a digital portfolio and professional presence for Hamish Annan. It features a clean, minimalist design with a focus on showcasing Hamish's work and services.

## Features

- Responsive design that works across all devices
- Clean, modern aesthetic with clear typography
- Portfolio section with filterable works
- Coaching services information and booking options
- Contact form integration via Formspree
- Easy to update and maintain

## File Structure

```
├── index.html
├── about.html
├── works.html
├── coaching.html
├── workshops.html (to be created)
├── articles.html (to be created)
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── hero-bg.jpg
│   ├── about-profile.jpg
│   ├── coaching.jpg
│   └── works/
│       ├── access.jpg
│       ├── fragile-heart.jpg
│       └── ...
└── README.md
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/hamishannan.github.io.git
   cd hamishannan.github.io
   ```

2. **Add your images**
   - Place your images in the `images` directory
   - Update image paths in HTML files as needed

3. **Update personal information**
   - Review all HTML files and update content with your information
   - Add your social media links in the footer sections

4. **Set up Formspree for the contact form**
   - Go to [Formspree](https://formspree.io/)
   - Create a new form
   - Copy your form endpoint
   - Replace `https://formspree.io/f/YOUR_FORM_ID` in `contact.html` with your endpoint

5. **Set up Calendly (optional)**
   - If you use Calendly for booking, embed it in the coaching page

## Deployment with GitHub Pages

1. **Create a GitHub repository**
   - Name it `yourusername.github.io` (replace with your GitHub username)

2. **Push your code to GitHub**
   ```
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll down to the GitHub Pages section
   - Select the `main` branch as the source
   - Click Save

4. **Custom domain (optional)**
   - Add your domain in the GitHub Pages settings
   - Follow GitHub's instructions to configure your DNS

## Customization

### Changing Colors
- Open `css/style.css`
- Modify the color variables in the `:root` section:
  ```css
  :root {
    --primary: #3d57c3; /* Primary accent color */
    --black: #000000;
    --white: #ffffff;
    --light-gray: #f8f8f8;
    --mid-gray: #666666;
    --dark-gray: #333333;
  }
  ```

### Adding New Pages
1. Create a new HTML file based on the existing templates
2. Update the navigation menu in all HTML files to include the new page

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Credits

- Google Fonts - Inter
- Font Awesome for icons
- Formspree for contact form handling

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

For help with customization or issues, please contact [Your Name] at [Your Email].
