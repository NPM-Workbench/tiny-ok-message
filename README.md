![banner](https://github.com/user-attachments/assets/320dfbd4-3714-48d0-bbf6-ddc435fa662e)
![npm](https://img.shields.io/npm/v/tiny-ok-message)
![downloads](https://img.shields.io/npm/dw/tiny-ok-message)
![license](https://img.shields.io/npm/l/tiny-ok-message)
![Security Policy](https://img.shields.io/badge/security-policy-brightgreen)
![npm_provenance](https://img.shields.io/badge/npm-provenance-brightgreen?logo=npm)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/tiny-ok-message)

# tiny-ok-message

⚗️ An intentionally small, fetch-based package that is useful for quick API-client experiments. Experimental Package: primarily used for learning purposes.

### 📦 Installation

```console
npm install tiny-ok-message
```

### 📘 Features

1. One small exported helper: `getOkMessage`
2. Accepts a typed input object shaped as `{ message: string }`
3. Calls the DummyJSON HTTP 200 endpoint with a URL-encoded message
4. Returns a typed response shaped as `{ status: string; message: string }`
5. TypeScript ready with generated declaration files
6. ESM package output through `dist`
7. Unit tested with Jest and `ts-jest`
8. Github Actions are used for performing trusted publish

### 🔤 Example Usage

```ts
/* node modules */
import { getOkMessage } from "tiny-ok-message";

/* example */
async function run() {
  const response = await getOkMessage({ message: "hello world" });
  console.log(response);
}
await run();
```

Expected response shape:

```ts
{ status: "200", message: "hello world" }
```

### 📗 Test Coverage

```console
PASS src/messages/test/get-ok-message.test.ts
  getOkMessage
    ✓ fetches the OK message from DummyJSON
    ✓ throws when the request fails
```

```console
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |
 get-ok-message.ts |     100 |      100 |     100 |     100 |
-------------------|---------|----------|---------|---------|-------------------
```

### 🔒 Security & Privacy

1. This package is open source and designed as a tiny API helper for the public DummyJSON HTTP endpoint. It does not collect, store, sell, rent, trade, monetize, or process personal data for its own purposes.
2. The package only makes HTTP requests as part of its documented behavior. Any data handled by the package is limited to the `message` value explicitly provided by the consuming application.
3. This package does not include analytics, tracking, telemetry, advertising, hidden background services, install scripts, or project-owned data collection systems.

### ❤️ Support

Like this project? Support it with a GitHub star. Cheers and happy coding.
