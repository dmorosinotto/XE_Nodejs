var router = require("express").Router();

router.get("/", function(req,res){
    require("./custdb").getAll()
        .then(data => res.send(data)); //JSON ARRAY
});

router.get("/:id", (req,res)=> {
    const id = parseInt(req.params.id,10);
    require("./custdb").getOne(id)
        .then(row => {
                if (row) res.send(row); //JSON OBJECT
                else res.sendStatus(404);
        }).catch(err => res.status(500).send({error: err}));
});

router.patch("/:id", (req,res) => {
    require("./custdb").update(req.params.id, req.body)
        .then( n => res.sendStatus( n ? 200:404 ), 
             err => res.status(500).send({error: err}));
});

module.exports = router;