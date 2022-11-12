const mongoose= requiere('mongoose');
const mongoDBUrl='mongodb://127.0.0.1/inmo';
mongoose.connect(mongoDBUrl);
requiere('./models/inmu.model')