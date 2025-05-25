import express from 'express'
import contactModel from '../models/contactsModel.js';

const contactRouter = express.Router();

contactRouter.post('/', async (req, res) =>{
    const {name, email, subject, message} = req.body;    
    const newContactModel = new contactModel({
            name:name,
            email:email,
            subject:subject,
            message:message
    })

    const contact = await newContactModel.save();
    return res.status(200).json({
        success:true,
        message:`Thankyou so much Mr./ Miss.${contact.name} i will get back to you`
    })
})


export default contactRouter;