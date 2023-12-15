module.exports = async (req, res) => {
    try {
        res.render('examiner', { userId: req.session.userId, usertype: req.session.usertype })
    } catch (error) {
        console.log(error);
    }
};
