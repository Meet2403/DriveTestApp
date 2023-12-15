module.exports = (req, res) => {
    res.render('dashboard', { userId: req.session.userId, usertype: req.session.usertype });
};