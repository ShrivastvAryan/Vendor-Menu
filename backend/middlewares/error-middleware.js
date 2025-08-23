app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    // optionally include stack only in development
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});
