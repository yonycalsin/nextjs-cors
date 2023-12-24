function nextCors(): (req: any, res: any, next: any) => Promise<void> {
  return async (req, res, next) => {
    await next()
  }
}

export default { nextCors }
