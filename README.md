# acemacan-final
acemacan original final website

## Getting Started

```bash
npm install
npm run dev
```

## Troubleshooting

### `Error: Cannot find module '../lightningcss.darwin-x64.node'`

This error occurs when the platform-specific native binary for `lightningcss` (used by Tailwind CSS v4) is missing. This typically happens when:

- `node_modules` were copied from a different platform/OS
- Optional dependencies were skipped during installation
- The `node_modules` folder is corrupted

**Fix:**

1. Delete `node_modules` and the lock file, then reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

2. If the error persists, explicitly install the platform-specific package for your OS:

| Platform             | Package                          |
| -------------------- | -------------------------------- |
| macOS (Intel)        | `lightningcss-darwin-x64`        |
| macOS (Apple Silicon) | `lightningcss-darwin-arm64`      |
| Windows (x64)        | `lightningcss-win32-x64-msvc`   |
| Linux (x64)          | `lightningcss-linux-x64-gnu`    |

```bash
npm install lightningcss-darwin-x64  # Replace with your platform
```

3. If using **pnpm**, make sure `shamefully-hoist=true` is set in `.npmrc` (already included in this repo).

> **Note:** A `.npmrc` file is included in this project with `optional=true` to ensure platform-specific optional dependencies are always installed. 
