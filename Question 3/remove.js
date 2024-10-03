const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    
    const files = fs.readdirSync(logsDir);

    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(filePath); 
    });
    fs.rmdirSync(logsDir);
    console.log('Logs directory has been removed.');
} else {
    console.log('No Logs directory found.');
}
