const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const appointmentsRoutes = require('./routes/appointments');
const patientsRoutes = require('./routes/patients');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/appointments', appointmentsRoutes);
app.use('/api/patients', patientsRoutes);

app.get('/', (req, res) => {
  res.send('CareWallet Backend is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});