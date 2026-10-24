@echo off
title Local Web Server

REM Move to the folder this BAT file is in
cd /d "%~dp0"

REM Start Python HTTP server using py.exe
start "vectorpoint" cmd /k py -m http.server 8000

REM Wait briefly for the server to start
timeout /t 2 >nul

REM Open localhost in the default browser
start http://localhost:8000