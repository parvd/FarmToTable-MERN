const jwt = require('jsonwebtoken');

exports.requireSiginin = (req, res, next) => {
	if (req.headers.authorization) {
		const token = req.headers.authorization;
		const user = jwt.verify(token, process.env.SECRET);
		req.user = user;
	} else {
		return res.status(400).json({ message: 'Authorization Required' });
	}
	next();
};

exports.adminMiddleware = (req, res, next) => {
	console.log(req.user.role);
	if (req.user.role !== 'admin') {
		return res.status(400).json({ message: 'Admin Access Denied' });
	}
	next();
};
exports.userMiddleware = (req, res, next) => {
	if (req.user.role !== 'user') {
		return res.status(400).json({ message: 'User Access Denied' });
	}
	next();
};
