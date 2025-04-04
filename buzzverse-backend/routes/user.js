const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// update user
router.patch('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){

        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);

            }catch(err){
                return res.status(500).json(err);
            }
        }

        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set:req.body});
            return res.status(200).json('Account has been updated');

        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        res.status(403).json('You can update only your account.');
    }
});

// delete user
router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json('Account has been deleted successfully.');

        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        return res.status(403).json('You can delete only your account');
    }
});

// get a user
router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, updatedAt, isAdmin, _id, ...other} = user._doc;
        return res.status(200).json(other);

    }catch(err){
        return res.status(500).json(err);
    }
});

// follow a user
router.patch('/follow/:id', async (req, res) => {
    if(req.body.userId !== req.params.id){
        try{
            const userToBeFollowed = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(!userToBeFollowed.followers.includes(req.body.userId)){
                await currentUser.updateOne({$push: {followings: req.params.id}});
                await userToBeFollowed.updateOne({$push: {followers: req.body.userId}});
                return res.status(200).json('User has been followed.');

            }else{
                return res.status(403).json('You already follow this user.');
            }

        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        return res.status(403).json('You cannot follow yourself.');
    }
});

// unfollow a user
router.patch('/unfollow/:id', async (req, res) => {
    if(req.body.userId !== req.params.id){
        try{
            const userToBeUnfollowed = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(userToBeUnfollowed.followers.includes(req.body.userId)){
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                await userToBeUnfollowed.updateOne({$pull: {followers: req.body.userId}});
                return res.status(200).json('User has been unfollowed.');

            }else{
                return res.status(403).json('You dont follow this user.');
            }

        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        return res.status(403).json('You cannot unfollow yourself.');
    }
});

module.exports = router;