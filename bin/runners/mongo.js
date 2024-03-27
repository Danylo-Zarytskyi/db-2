import mongoose from 'mongoose';
// import noticeModel from '../../models/notices.js';
 
const connectUrl = 'mongodb://127.0.0.1:27017/test'
await mongoose.connect(connectUrl)
    .then(() => console.log('Mongo connected!'));



// const question = await questionModel.findOne( {content: "Ти гей?"});
// export default question;



// const doc = new questionModel();
// doc.content = 'Ти ненавидиш чорнобривців?';
// await doc.save();