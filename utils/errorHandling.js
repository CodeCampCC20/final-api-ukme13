//error handling
export const errorHandling = (err, req, res, next) => {
  res
    .status(err.code || 500)
    .json({ message: err.message || "Sorry, something went wrong!" });
};
