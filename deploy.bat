@echo off
REM Deploy React build locally

REM Set paths
set SOURCE_DIR=%~dp0build
set DEST_DIR=C:\ReactDeploy

REM Check if build directory exists
if not exist "%SOURCE_DIR%" (
    echo [ERROR] Build directory not found at: %SOURCE_DIR%
    echo Please run "npm run build" first.
    exit /b 1
)

REM Create deploy directory if it doesn't exist
if not exist "%DEST_DIR%" (
    echo [INFO] Creating destination directory at: %DEST_DIR%
    mkdir "%DEST_DIR%"
)

REM Clear old deployment files
echo [INFO] Clearing old files in: %DEST_DIR%
del /Q "%DEST_DIR%\*" 2>nul
for /D %%x in ("%DEST_DIR%\*") do (
    rmdir /S /Q "%%x"
)

REM Copy new build files
echo [INFO] Copying files from %SOURCE_DIR% to %DEST_DIR%
xcopy /E /I /Y "%SOURCE_DIR%\*" "%DEST_DIR%\" >nul

echo [SUCCESS] Deployment complete.
