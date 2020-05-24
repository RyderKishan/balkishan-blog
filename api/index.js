/* eslint-disable no-console */
const app = require('../functions/src/app');

const PORT = 7400;

app.listen(PORT, () => console.log(`App running in ${PORT}`));
