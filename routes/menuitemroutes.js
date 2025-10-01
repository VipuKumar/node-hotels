const express=require('express');
const router=express.Router();
const menuitem=require('../models/menu');
router.post('/',async(req,res)=>{
   try{ const data=req.body;
    const newmenu=new menuitem(data);
    const response=await newmenu.save();
    console.log('menu saved');
    res.status(200).json(response);
    
}catch(err){
    console.log('menu not saved error');
    res.status(500).json({error:"server error"});
}})

router.get('/',async(req,res)=>{
    try{
        const data=await menuitem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log('fetch failed');
        res.status(500).json({error:"fetch failed"});
    }
})
router.put('/:id',async (req,res)=>{
    try{
        const menuitemid=req.params.id;
        const updatemenuitem=req.body;
        const response=await menu.findByIdAndUpdate(menuitemid,updatemenuitem{
            new:true,
            runValidator:true,
        }
        if(!response){
            return res.status(400).json({error:"menuitem not found"})//generic
        }
        console.log("success update");
        res.status(200).json(response);


      

    }
      catch(err){
        console.log('server error');
        res.status(500).json({error:"internal server error"});

        }

})
router.delete('/:id',async(req,res)=>{
    try{const menuitemid=req.params.id;
    const updatemenuitem=req.body;
    const response=await menu.findByIdAndDelete(menuitemid,updatemenuitem);
    if(!response){
        return res.status(400).json({error:"menuitem not found"})
    }
    console.log("success delete");
    res.status(200).json(response);    
}
    catch(err){
        console.log('server error');
        res.status(500).json({error:"internal server error"});

    }

})
module.exports=router;