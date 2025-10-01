const express=require('express');
const router=express.Router();
const person=require('../models/person');
router.post('/',async(req,res)=>{
    try{const data=req.body;
    const newperson=new person(data);
    const response=await newperson.save();
    console.log('data saved');
    res.status(200).json(response)


}catch(err){
    console.log("error in saving");
    res.status(500).json({error:"server error"});

}})
router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        console.log('data fetched');
    res.status(200).json(data);

    }
    catch{
        console.log("error in fetching");
    res.status(500).json({error:"server error"});

    }
})
router.get('/:workType',async(req,res)=>{
    try{const workType=req.params.workType;
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const data=await person.find({work:workType});
        res.status(200).json(data);
    }
}
catch(err){
    console.log('fetch failed');
    res.status(500).json({error:"internal server error"});
}})
router.put('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;
        const updatedpersondata=req.body;
        const response=await person.findByIdAndUpdate(personid,updatedpersondata,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:"person not found"});

        }
        console.log("data updated");
        res.status(200).json(response);


    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});



    }
})
router.delete('/:id',async(req,res)=>{
    try{const personid=req.params.id;
    const response=await person.findByIdAndDelete(personid);
    if(!response){
        return res.status(400).json({error:"person does not exist"});
    }
    console.log("data deleted");
    res.status(200).json(response);}
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
//comment
})






module.exports=router;