//404
export const notFound = (req, res) => {
  res.status(404).json({ message: `404 not found page!` });
};
