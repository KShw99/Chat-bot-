const express = require('express');
const axios = require('axios');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const apiURL ='https://official-joke-api.appspot.com/random_joke'

app.post('/fetch', async (req,res) => {
    try {
        const response = await axios.get(apiURL);
        const data = response.data

        fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.log('Error writing file:', err);
                res.status(500).send('Error saving data to JSON file')
            } else {
                console.log('Data fetch and saved successful')
                res.send('Data fetch and saved successful')
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data from API')
    }
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:{port}')
});

const path = require('path');

app.use(express.static(path.join(__dirname, 'C:\Users\Duy\Desktop\Skeleton\public\index.html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
