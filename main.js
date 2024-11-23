const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

// Función para verificar la existencia de archivos JSON
function checkJsonFiles() {
    const files = ['champions.json', 'items.json', 'summoners.json'];
    
    console.log('=== Verificación de archivos JSON ===');
    console.log('Executable Path:', process.execPath);
    console.log('Resource Path:', process.resourcesPath);
    console.log('App Path:', app.getAppPath());
    
    // Verificar en el directorio de recursos
    const resourcePath = process.resourcesPath;
    console.log('\nBuscando en directorio de recursos:', resourcePath);
    files.forEach(file => {
        const filePath = path.join(resourcePath, file);
        console.log(`${file}: ${fs.existsSync(filePath) ? 'Encontrado' : 'No encontrado'} en ${filePath}`);
    });

    // Verificar en el directorio de la aplicación
    const appResourcePath = path.join(path.dirname(process.execPath), '..', 'resources');
    console.log('\nBuscando en directorio de la aplicación:', appResourcePath);
    files.forEach(file => {
        const filePath = path.join(appResourcePath, file);
        console.log(`${file}: ${fs.existsSync(filePath) ? 'Encontrado' : 'No encontrado'} en ${filePath}`);
    });
}

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        icon: path.join(process.resourcesPath, 'resources/icon.ico'),
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // Verificar archivos JSON al iniciar
    checkJsonFiles();

    // Cargar index.html
    mainWindow.loadFile('index.html');
    mainWindow.setMenuBarVisibility(true);

    // Abrir DevTools en desarrollo o si hay un parámetro de debug
    if (process.env.NODE_ENV === 'development' || process.argv.includes('--debug')) {
        mainWindow.webContents.openDevTools();
    }

    // Log de errores y mensajes de consola
    mainWindow.webContents.on('console-message', (event, level, message) => {
        console.log('Renderer Console:', message);
    });

    mainWindow.webContents.on('crashed', (event) => {
        console.error('Window crashed:', event);
    });
}

// Configurar el entorno antes de crear la ventana
app.whenReady().then(() => {
    console.log('\n=== Información del entorno ===');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('App Name:', app.getName());
    console.log('App Version:', app.getVersion());
    console.log('App Path:', app.getAppPath());
    console.log('User Data Path:', app.getPath('userData'));
    console.log('Executable Path:', process.execPath);
    console.log('Working Directory:', process.cwd());
    
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

// Manejar errores no capturados
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});
