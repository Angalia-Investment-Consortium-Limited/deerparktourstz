# Tanzanian Safari Journeys - Complete Deployment Guide

This guide covers the deployment of both the frontend React application and the Strapi backend for the Tanzanian Safari Journeys website.

## 📋 Project Overview

The project consists of:
- **Frontend**: React application with TypeScript and Tailwind CSS
- **Backend**: Strapi CMS for content management
- **Forms**: PHP handlers for contact and inquiry forms (cPanel compatible)

## 🚀 Frontend Deployment

### Build for Production

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build the Application**
   ```bash
   npm run build
   ```

3. **Upload to cPanel**
   - Upload the contents of the `dist` folder to your public_html directory
   - Ensure all files are in the root directory or subdirectory as needed

### Environment Configuration

Create a `.env.production` file:
```env
VITE_STRAPI_URL=https://yourdomain.com/strapi
VITE_API_URL=https://yourdomain.com/api
```

## 🗄️ Backend Deployment (Strapi)

### cPanel Deployment

1. **Database Setup**
   - Create a MySQL database in cPanel
   - Note the database name, username, and password

2. **File Upload**
   ```bash
   cd strapi-backend
   # Remove development files
   rm -rf .tmp node_modules
   # Upload all files to a subdirectory (e.g., /strapi)
   ```

3. **Environment Configuration**
   Create `.env` file in the strapi directory:
   ```env
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS="your-app-key-1,your-app-key-2"
   API_TOKEN_SALT=your-api-token-salt
   ADMIN_JWT_SECRET=your-admin-jwt-secret
   TRANSFER_TOKEN_SALT=your-transfer-token-salt
   JWT_SECRET=your-jwt-secret
   
   # Database
   DATABASE_CLIENT=mysql
   DATABASE_HOST=localhost
   DATABASE_PORT=3306
   DATABASE_NAME=your_database_name
   DATABASE_USERNAME=your_database_user
   DATABASE_PASSWORD=your_database_password
   DATABASE_SSL=false
   
   # Frontend URL
   FRONTEND_URL=https://yourdomain.com
   ```

4. **Install Dependencies and Build**
   ```bash
   npm install --production
   npm run build
   ```

5. **Start the Application**
   ```bash
   npm start
   ```

### Alternative: Subdomain Deployment

1. Create a subdomain (e.g., `api.yourdomain.com`)
2. Point it to a separate directory
3. Deploy Strapi in that directory
4. Update CORS settings accordingly

## 📧 PHP Forms Setup

### Upload PHP Files

1. **Create Forms Directory**
   ```bash
   mkdir php-forms
   ```

2. **Upload PHP Files**
   - Upload `contact-handler.php` and `inquiry-handler.php` to `/php-forms/`
   - Ensure PHP files have proper permissions (644)

3. **Update Email Addresses**
   Edit the PHP files and update:
   ```php
   $to = 'your-actual-email@yourdomain.com';
   ```

### Frontend Integration

Update your React components to use the PHP endpoints:

```javascript
// In your contact form component
const handleSubmit = async (formData) => {
  const response = await fetch('/php-forms/contact-handler.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  const result = await response.json();
  // Handle response
};
```

## 🔧 Configuration Files

### .htaccess for React Router

Create `.htaccess` in your public_html:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# Cache static assets
<filesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
  ExpiresActive on
  ExpiresDefault "access plus 1 month"
</filesMatch>
```

### Strapi .htaccess

Create `.htaccess` in your strapi directory:
```apache
# Redirect HTTP to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Security
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options SAMEORIGIN
```

## 🔐 Security Considerations

### SSL Certificate
- Install SSL certificate for your domain
- Update all URLs to use HTTPS
- Configure HSTS headers

### Database Security
- Use strong database passwords
- Limit database user permissions
- Regular database backups

### API Security
- Generate strong JWT secrets
- Configure proper CORS origins
- Use API rate limiting

## 📊 Performance Optimization

### Frontend
- Enable Gzip compression
- Optimize images (WebP format)
- Use CDN for static assets
- Implement lazy loading

### Backend
- Configure database connection pooling
- Enable Redis caching (if available)
- Optimize database queries
- Use image optimization plugins

## 🔍 Testing Deployment

### Frontend Testing
1. Check all pages load correctly
2. Test navigation and routing
3. Verify form submissions
4. Test responsive design
5. Check console for errors

### Backend Testing
1. Access admin panel: `https://yourdomain.com/strapi/admin`
2. Test API endpoints: `https://yourdomain.com/strapi/api/blog-posts`
3. Verify CORS configuration
4. Test content creation and updates

### Forms Testing
1. Test contact form submission
2. Test inquiry form submission
3. Verify email delivery
4. Check error handling

## 📈 Monitoring and Maintenance

### Log Files
- Monitor PHP error logs
- Check Strapi application logs
- Review web server access logs

### Regular Tasks
- Update Strapi and dependencies
- Database backups
- Security updates
- Content moderation

### Performance Monitoring
- Page load times
- API response times
- Database query performance
- Error rates

## 🆘 Troubleshooting

### Common Issues

**Frontend not loading:**
- Check .htaccess configuration
- Verify file permissions
- Check browser console for errors

**Strapi not starting:**
- Check database connection
- Verify environment variables
- Check Node.js version compatibility

**Forms not working:**
- Check PHP error logs
- Verify email server configuration
- Test CORS headers

**API calls failing:**
- Check CORS configuration
- Verify API endpoints
- Check authentication tokens

### Support Resources
- [Strapi Documentation](https://docs.strapi.io/)
- [React Documentation](https://reactjs.org/docs/)
- [cPanel Documentation](https://docs.cpanel.net/)

## 📞 Post-Deployment Checklist

- [ ] Frontend loads correctly on all devices
- [ ] All pages and routes work
- [ ] Strapi admin panel accessible
- [ ] API endpoints responding
- [ ] Contact form sends emails
- [ ] Inquiry form sends emails
- [ ] SSL certificate installed
- [ ] SEO meta tags working
- [ ] Analytics tracking setup
- [ ] Backup system configured
- [ ] Monitoring tools setup

## 🎯 Go Live Steps

1. **Final Testing**
   - Complete functionality test
   - Cross-browser testing
   - Mobile responsiveness check

2. **DNS Configuration**
   - Point domain to hosting server
   - Configure subdomains if needed

3. **Launch**
   - Monitor for first 24 hours
   - Check error logs
   - Verify all functionality

4. **Post-Launch**
   - Submit sitemap to search engines
   - Set up monitoring alerts
   - Plan content migration strategy

---

**Need Help?** Contact the development team for assistance with deployment or configuration issues.
