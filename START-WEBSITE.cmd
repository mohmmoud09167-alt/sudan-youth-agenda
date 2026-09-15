@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\start-local-preview.ps1"
if errorlevel 1 (
  echo.
  echo Unable to start the website. Review the message above.
  pause
)
endlocal

