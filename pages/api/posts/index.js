import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';
import User from '../../../models/User';

dbConnect();

export default async (req, res) => {
   const {method} = req;

   switch(method){
    case 'GET':
        try {
            const post = await Post.find({});

            res.status(200).json({ success: true, data: post })
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
    case 'POST':
        try {
            const post = await Post.create(req.body);
            const user = await User.findOne({name: new RegExp('^'+post.author+'$', "i")});
            user.post.push(post._id);
            await user.save();


            res.status(201).json({ success: true, data: post })
        } catch (error) {
            res.status(400).json({ success: false });
        }
        break;
    default:
        res.status(400).json({ success: false });
        break;
}
   }