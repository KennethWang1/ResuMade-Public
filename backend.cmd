<<<<<<< HEAD
echo backend
cd ./ResuMade
nodemon  -w . -w .env ./backend/app
=======
echo backend
cd ./ResuMade
nodemon  --env-file ./backend/.env ./backend/app.js
>>>>>>> master
