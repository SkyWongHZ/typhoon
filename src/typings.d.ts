declare module '*.less' {
    const content: { [className: string]: string };
    export default content;
  }

  // typings.d.ts
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}