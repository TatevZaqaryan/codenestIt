# Use an official PHP image with Apache
FROM php:8.2-apache

# 1. Install system dependencies for Composer
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install zip

# 2. Install Composer from the official image
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 3. Enable Apache mod_rewrite
RUN a2enmod rewrite

# 4. Set working directory
WORKDIR /var/www/html/

# 5. Copy project files
COPY . /var/www/html/

# 6. Install PHPMailer via Composer
# This runs if you have a composer.json; if not, it will be created
RUN composer require phpmailer/phpmailer

# 7. Ensure correct permissions for Apache
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Expose port 80
EXPOSE 80
