const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Read the template HTML file
const templatePath = path.join(__dirname, 'index.template.html');
const outputPath = path.join(__dirname, 'index.html');

// Read template
let html = fs.readFileSync(templatePath, 'utf8');

// Replace placeholders with environment variables
const replacements = {
    '{{SITE_URL}}': process.env.SITE_URL || 'https://wavizo.nl',
    '{{SITE_NAME}}': process.env.SITE_NAME || 'Wavizo',
    '{{CONTACT_EMAIL}}': process.env.CONTACT_EMAIL || 'info@wavizo.nl',
    '{{CONTACT_PHONE}}': process.env.CONTACT_PHONE || '+31 6 84143386',
    '{{CONTACT_ADDRESS}}': process.env.CONTACT_ADDRESS || 'Amsterdam, Nederland',
    '{{FORMSPREE_CONTACT_FORM}}': process.env.FORMSPREE_CONTACT_FORM || '',
    '{{FORMSPREE_QUOTE_FORM}}': process.env.FORMSPREE_QUOTE_FORM || '',
    '{{INSTAGRAM_URL}}': process.env.INSTAGRAM_URL || 'https://www.instagram.com/wavizo.nl/',
    '{{FACEBOOK_URL}}': process.env.FACEBOOK_URL || '#',
    '{{LINKEDIN_URL}}': process.env.LINKEDIN_URL || '#',
    '{{TWITTER_URL}}': process.env.TWITTER_URL || '#',
    '{{OG_IMAGE}}': process.env.OG_IMAGE || 'https://wavizo.nl/og-image.jpg',
};

// Replace all placeholders (escape special regex characters properly)
Object.keys(replacements).forEach(placeholder => {
    // Escape the placeholder for use in regex
    const escaped = placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'g');
    const value = replacements[placeholder];
    html = html.replace(regex, value);
    // Debug: check if replacement happened
    if (html.includes(placeholder)) {
        console.warn(`⚠️  Warning: Placeholder ${placeholder} was not replaced!`);
    }
});

// Write the output file
fs.writeFileSync(outputPath, html, 'utf8');
console.log('✅ Build completed! index.html has been generated from template.');
console.log('📝 Environment variables have been injected.');

