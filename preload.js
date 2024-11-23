const { contextBridge, ipcRenderer, app } = require('electron');
const path = require('path');
const fs = require('fs');

// Helper function to get the correct path for resources
function getResourcePath(filename) {
    try {
        if (process.env.NODE_ENV === 'development') {
            return path.join(__dirname, filename);
        }

        // En producción, buscar en el directorio de recursos de la aplicación instalada
        const resourcePath = process.resourcesPath;
        const filePath = path.join(resourcePath, filename);
        
        console.log('Intentando cargar archivo desde:', filePath);
        
        if (fs.existsSync(filePath)) {
            console.log('Archivo encontrado en:', filePath);
            return filePath;
        }

        // Si no se encuentra, buscar en el directorio de la aplicación
        const appPath = path.join(path.dirname(process.execPath), '..', 'resources', filename);
        console.log('Intentando ruta alternativa:', appPath);
        
        if (fs.existsSync(appPath)) {
            console.log('Archivo encontrado en:', appPath);
            return appPath;
        }

        throw new Error(`No se pudo encontrar el archivo ${filename}`);
    } catch (error) {
        console.error('Error en getResourcePath:', error);
        throw error;
    }
}

// Load JSON data with proper path handling
function loadJsonFile(filename) {
    try {
        const filePath = getResourcePath(filename);
        console.log('Cargando archivo desde:', filePath);
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        console.log('process.resourcesPath:', process.resourcesPath);
        console.log('process.execPath:', process.execPath);
        console.log('__dirname:', __dirname);
        return null;
    }
}

// Expose protected methods that allow the renderer process to use
contextBridge.exposeInMainWorld(
    'api', {
        getChampions: () => loadJsonFile('champions.json'),
        getItems: () => loadJsonFile('items.json'),
        getSummoners: () => loadJsonFile('summoners.json'),
        isDev: () => process.env.NODE_ENV === 'development'
    }
);
