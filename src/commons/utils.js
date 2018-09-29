export function tryCatchWrapper(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      if (error.errors && error.errors.length > 0) {
        next(new AppError(error.errors[0].message));
      } else {
        next(new AppError(error.message));
      }
    }
  };
}