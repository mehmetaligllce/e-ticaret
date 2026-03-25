import express from 'express';

const isAuthcated = (req, res, next) => {
    if (req.session.user)
        next();
    else
        res.status(401).json({ message: "Unauthorized" });
}

export default isAuthcated;