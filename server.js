const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server started on ws://localhost:${PORT}`);

wss.on('connection', (ws) => {
    console.log('New client connected!');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        
        // Send message to the client
        ws.send(`Server says: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected!');
    });
});
