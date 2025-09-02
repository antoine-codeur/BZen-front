# React Props Usage

## What are props?
Props (short for "properties") are the mechanism for passing data and callbacks from parent to child components in React.

## When to use props
- When your component needs to receive data (e.g., a title, a list, a callback function)
- When you want to make your component reusable and configurable
- For passing children elements to layouts or wrappers

## Example: No props
```tsx
function Footer() {
  return <footer>Footer</footer>;
}
```

## Example: With props
```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

## Example: Passing children
```tsx
type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
```

## Best practices
- Omit the props parameter if your component does not need it
- Explicitly type props for clarity and maintainability
- Use destructuring for props in the function signature

## References
- [React Docs: Components and Props](https://react.dev/learn/passing-props-to-a-component)
- [TypeScript React: Component Props](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/)
