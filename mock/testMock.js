module.exports={

    "GET /api/mockdata":(req,res)=>{
        console.log(req);
        res.send({
            messg:"登录成功"
        })
    }

}