const express = require('express');

const cors = require('cors');

// ganti {} jadi data json
const data = {};

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.status(200).json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
