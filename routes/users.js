import express from 'express'
import {saveUser,getUser,
    fetchAll,resetPassword,handleForgot,deleteUser,
    updateUser ,fetchUserData} from '../controller/userController.js'

const router =express.Router();

router.post('/save',saveUser)
router.get('/fetchall',fetchAll)
router.delete('/deleteuser:id',deleteUser)
router.get('/userdata',fetchUserData)

router.post('/updateUser',updateUser)
router.post('/forgot',handleForgot)
router.post('/resetPassword',resetPassword)
router.post('/getUser',getUser)
router.post('/logout',(req,res)=>{
    req.session.destroy((err) => {
        if (err) {
            console.error('Session destruction error:', err);
            return res.status(500).json({ logout: false, error: 'Logout failed' });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        res.status(200).json({ logout: true });
    });
})

export default router;

