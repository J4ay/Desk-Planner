:: Startet Docker, alle Container, NestJS und ReactJS. Optional npm install

tasklist /fi "ImageName eq Docker.exe" /fo csv 2>NUL | find /I "docker.exe">NUL
if "%ERRORLEVEL%"=="1" start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"

:search
tasklist|docker version
IF %ERRORLEVEL% == 0 GOTO :found
TIMEOUT /T 2
GOTO :search

:found
start powershell "docker start $(docker ps -a -q)"

start cmd /k "cd .\nestjs-desk-planner\ && npm run start:dev"

cd .\react-user-app\
call npm install
npm start