const router = require('express').Router();
const Post = require('../models/post');

// create a post
router.post('/create', async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    }catch(err){
        return res.status(500).json(err);
    }
});

// delete a post
router.delete('/delete/:id', async (req, res) => {
    try{
        const postToBeDeleted = await Post.findById(req.params.id);

        if(req.body.userId === postToBeDeleted.userId){
            await postToBeDeleted.deleteOne();
            return res.status(200).json('Post has been deleted successfully');

        }else{
            return res.status(403).json('You can delete only your post');
        }

    }catch(err){
        return res.status(500).json(err);
    }
});

// update a post
router.patch('/update/:id', async (req, res) => {
    try{
        const postToBeUpdated = await Post.findById(req.params.id);

        if(req.body.userId === postToBeUpdated.userId){
            await postToBeUpdated.updateOne({$set : req.body});
            return res.status(200).json('Post has been updated');

        }else{
            return res.status(403).json('You can update only your posts');
        }

    }catch(err){
        return res.status(500).json(err);
    }
});

// like or unlike a post
router.put('/like/:id', async (req, res) => {
    try{
        const postToBeLiked = await Post.findById(req.params.id);

        if(!postToBeLiked.likes.includes(req.body.userId)){
            await postToBeLiked.updateOne({$push : {likes : req.body.userId}});
            return res.status(200).json('Post has been liked');

        }else{
            await postToBeLiked.updateOne({$pull : {likes : req.body.userId}});
            return res.status(200).json('Post has been unliked');
        }

    }catch(err){
        return res.status(500).json(err);
    }
});

// get a post
router.get('/get/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);

    }catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;