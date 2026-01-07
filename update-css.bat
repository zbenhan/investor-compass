@echo off
setlocal enabledelayedexpansion
set "version=1767798000000"

for /r %%f in (*.html) do (
    findstr /C:"css/style.css" "%%f" >nul
    if !errorlevel! equ 0 (
        powershell -Command "(Get-Content '%%f') -replace 'css/style\.css\"', 'css/style.css?v=%version%\"' | Set-Content '%%f'"
        echo Updated: %%f
    )
)

echo.
echo All HTML files have been updated!
pause