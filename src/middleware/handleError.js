const errorHandler = (err, req, res, next) => {
  req.logger.error(err.stack)
  res.sendCatchError(err)
}

export default errorHandler;