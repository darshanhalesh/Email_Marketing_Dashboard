declare module '*.css' {
  const styles: { [className: string]: string }
  export default styles
}

// Add Tailwind directives to known at-rules
declare module 'postcss' {
  export interface AtRule {
    name: string
  }
}