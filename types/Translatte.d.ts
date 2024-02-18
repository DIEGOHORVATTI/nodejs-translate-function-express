declare module 'translatte' {
  const translatte: (text: string, options: { to: string }) => Promise<any>;

  export = translatte;
}
