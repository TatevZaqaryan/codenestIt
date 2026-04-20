# Use an official PHP image with Apache
FROM php:8.2-apache

# 1. Enable Apache mod_rewrite
RUN a2enmod rewrite

# 2. Set working directory
WORKDIR /var/www/html/

# 3. Copy project files
COPY . /var/www/html/

# 4. Ensure correct permissions for Apache
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Expose port 80
EXPOSE 80
