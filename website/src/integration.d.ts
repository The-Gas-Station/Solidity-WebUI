import { AriaAttributes, DOMAttributes } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    scroll?: string;
  }
}

export declare global {
  class PerfectScrollbar {
    constructor(el: any): any;
  }
  class Chart {
    constructor(ctx: any, options: any): any;
  }

  function $(options: any): any;

  function navbarBlurOnScroll(id: string);

  interface Window {
    $: any;
  }
}
