#! /bin/bash

ssh deploy@515-project.tylerelton.com
cd /var/www/515-project-dev.tylerelton.com
git pull
composer update
cd frontend && npm install
