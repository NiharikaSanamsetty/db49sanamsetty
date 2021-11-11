var ball = require('../models/ball');
// List of all balls
exports.ball_list = function(req, res) {
res.send('NOT IMPLEMENTED: ball list');
};
// for a specific ball.
exports.ball_detail = function(req, res) {
res.send('NOT IMPLEMENTED: ball detail: ' + req.params.id);
};
// Handle ball create on POST.
exports.ball_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: ball create POST');
};
// Handle ball delete form on DELETE.
exports.ball_delete = function(req, res) {
res.send('NOT IMPLEMENTED: ball delete DELETE ' + req.params.id);
};
// Handle ball update form on PUT.
exports.ball_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: ball update PUT' + req.params.id);
}; 