const express = require('express');
const app = express();

let users = [
    {
        id:1,
        user: 'Juan',
    },
    {
        id:2,
        user: 'Agustina',
    }
];

// Route
app.get('/api/users', (req, res) => {
  res.send('Welcome to my API!');
});

app.get('/', (req, res) => {
    res.json(users);
  });

// Check connect
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));