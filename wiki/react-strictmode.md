# Why use <React.StrictMode> in main.tsx?

## Purpose
`<React.StrictMode>` is a development tool provided by React to help developers write better, safer code. It does not render any visible UI, but it activates additional checks and warnings for its descendants.

## Benefits
- **Detects potential problems early**: Warns about deprecated APIs, unsafe lifecycle methods, and side effects.
- **Double-invokes certain functions**: In development, React intentionally double-invokes some functions (like component render and effects) to help catch bugs related to side effects.
- **Encourages best practices**: Promotes writing resilient and future-proof React code.

## Usage
It is recommended to wrap your root component in `<React.StrictMode>` in `main.tsx`:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## Why not in App.tsx?
- `<StrictMode>` should be applied once at the root of your app (usually in `main.tsx`).
- Wrapping it in `App.tsx` is redundant and can lead to confusion or double warnings.

## Production
- `<StrictMode>` only affects development mode. It has no impact on production builds or performance.

## References
- [React Docs: StrictMode](https://react.dev/reference/react/StrictMode)
- [React Blog: StrictMode](https://react.dev/blog/2022/03/08/react-18-upgrade-guide#strict-mode)
