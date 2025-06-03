/**
 * Log Analysis and Monitoring Tool
 * @author Gabriel Demetrios Lafis
 */

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({
        message: 'Log Analysis and Monitoring Tool',
        author: 'Gabriel Demetrios Lafis',
        version: '1.0.0'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Log Analysis and Monitoring Tool running on port ${PORT}`);
    console.log('👨‍💻 Created by Gabriel Demetrios Lafis');
});
