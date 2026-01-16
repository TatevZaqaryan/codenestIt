# Use an official PHP image with Apache
FROM php:8.2-apache

# Enable Apache mod_rewrite if needed (common for PHP apps)
RUN a2enmod rewrite

# Copy project files to the Apache document root
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Ensure correct permissions for Apache
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Expose port 80 (internal to container)
EXPOSE 80
