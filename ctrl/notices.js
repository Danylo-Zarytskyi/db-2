import noticeModel from '../models/notices.js';

const addNotice = async (notice) => {
    await noticeModel.create({
        content: notice,
    });
    console.log(notice);
};

const parseNotice = async () => {
    const result = await noticeModel.findOne({}).sort({ createdAt: -1 });
    // console.log(result);
    return result;
};

export { parseNotice };
export default addNotice;


