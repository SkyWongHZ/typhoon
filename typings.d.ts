declare module '*.less' {
    const content: { [className: string]: string };
    export default content;
  }

  // typings.d.ts
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

// 添加图片文件类型的声明
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
