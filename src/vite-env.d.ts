/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface FormHTMLAttributes<T> {
      netlify?: boolean;
      'netlify-honeypot'?: string;
    }
  }
}
