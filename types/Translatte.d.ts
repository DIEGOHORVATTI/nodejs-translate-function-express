declare module 'translatte' {
  const translatte: (
    text: string,
    options: { to: string; from: string }
  ) => Promise<any>;

  export = translatte;
}
