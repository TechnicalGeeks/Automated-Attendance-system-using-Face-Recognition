const express=require('express');
const router=express.Router();
const User=require('../controllers/user');


router.get("/",User.get_user_signIn);

router.post("/",User.post_user_signIn);

router.get("/signOut/:id",User.get_user_signOut);

router.get("/signUp", User.get_user_signUp);

router.post("/signUp", User.post_user_signUp);

router.post("/auth", User.post_user_auth);

router.get("/all", User.get_user_all);

router.get("/delete/:id", User.get_user_delete);

router.post("/update", User.post_user_update_role);

router.get("/:id", User.get_user_profile);

router.post("/:id", User.post_user_profile_update);

module.exports=router;
