CleanEx
How to install CleanEx app from GitHub
1.	Download or clone repository.
2.	Run the following command:
composer install
3.	Run the following command:
a.	Linux and Mac
cp .env.example .env
b.	Windows
copy  .env.example .env
4.	Create the application key using this command:
php artisan key:generate
5.	Install the npm modules:
npm install
6.	Run npm:
npm run dev
7.	Start the Laravel server:
php artisan serve

Optional: You can run: npm run watch instead of the 6th step to keep building after every change.
