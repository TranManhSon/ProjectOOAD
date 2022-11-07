const Posts = require('../../models/postModel')

const PostCtrl = {
    getPostInfor: async (req, res) => {
        try {
            const post = await Posts.findById(req.post.id).select('-password')

            res.json(post)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getPostsAllInfor: async (req, res) => {
        try {
            const posts = await Posts.find().select('title')

            res.json(posts)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deletePost: async (req, res) => {
        try {
            await Posts.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = PostCtrl;