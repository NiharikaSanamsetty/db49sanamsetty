var ball = require('../models/ball');
// List of all balls
exports.ball_list = async function (req, res) {
    try {
        let balls = await ball.find();
        res.send(balls);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific ball.
exports.ball_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: ball detail: ' + req.params.id);
};
// Handle ball create on POST.
exports.ball_create_post = async function (req, res) {
    console.log(req.body)
    let document = new ball();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.color = req.body.color;
    document.material = req.body.material;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle ball delete form on DELETE.
exports.ball_delete =  async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await ball.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle ball update form on PUT.
exports.ball_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await ball.findById(req.params.id)
        // Do updates of properties
        if (req.body.color)
            toUpdate.color = req.body.color;
        if (req.body.material) toUpdate.material = req.body.material;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// VIEWS
// Handle a show all view
exports.ball_view_all_Page = async function (req, res) {
    try {
        theball = await ball.find();
        res.render('ball', { title: 'ball Search Results', results: theball });
    }
    catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// for a specific ball 
exports.ball_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await ball.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle a show one view with id specified by query 
exports.ball_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await ball.findById( req.query.id) 
        res.render('balldetail',  
{ title: 'Ball Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.ball_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('ballcreate', { title: 'Ball Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.ball_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await ball.findById(req.query.id) 
        res.render('ballupdate', { title: 'Ball delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.ball_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await ball.findById(req.query.id) 
        res.render('balldelete', { title: 'Ball Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
