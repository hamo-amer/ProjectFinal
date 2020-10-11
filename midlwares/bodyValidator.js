const {body,validationResult}=require('express-validator')


const loginRules=()=>[
    body("email","Invalid email").isEmail(),
    body("password","password must contain at least 6 characters").isLength({
        min:6,
        max:20
    })
];
const registerRules=()=>[
    body("name","Name is required").notEmpty(),
    body("phoneNumber","phone number is required").notEmpty(),
    body("adress","Adress is required").notEmpty(),
    body("email","Invalid email").isEmail(),
    body("password","password must contain at least 6 characters").isLength({
        min:6,
        max:20
    })
];
const validator=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
   return res.status(400).send({errors:errors.array().map(el=>({msg:el.msg}))})
    } 
next()
};
module.exports= {
    validator,
    loginRules,
    registerRules
}