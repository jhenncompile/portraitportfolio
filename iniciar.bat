@echo off
title Iniciar Proyecto - Portafolio
echo ===================================================
echo   Iniciando el Servidor de Desarrollo del Proyecto
echo ===================================================
echo.

:: Verificar si Bun esta instalado
where bun >nul 2>nul
if %errorlevel% equ 0 (
    echo [INFO] Bun detectado. Se utilizara Bun como gestor de paquetes.
    set PM=bun
) else (
    echo [INFO] Bun no detectado. Se utilizara npm.
    set PM=npm
)

:: Instalar dependencias si node_modules no existe
if not exist "node_modules\" (
    echo [INFO] Instalando dependencias del proyecto...
    if "%PM%"=="bun" (
        call bun install
    ) else (
        call npm install
    )
)

echo.
echo [INFO] Iniciando el servidor local...
echo [INFO] Abre http://localhost:8080/ en tu navegador si no se abre automaticamente.
echo.

if "%PM%"=="bun" (
    call bun run dev
) else (
    call npm run dev
)

pause
