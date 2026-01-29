# Random Dogs Images API

Simple Express app that fetches random dog images from the Random Dog API and displays the image and file size.

## Files

- [index.js](index.js) — main server (uses [`axios.get`](index.js), [`app.get("/")`](index.js), [`app.post("/random")`](index.js), [`app.listen`](index.js))
- [package.json](package.json) — dependencies and metadata
- [views/index.ejs](views/index.ejs) — EJS template for the UI
- [public/styles/main.css](public/styles/main.css) — basic styling

## Features

- Serves a single page at `/` with a button to fetch a random dog image.
- POST `/random` fetches data from https://random.dog/woof.json and renders the result.

## Requirements

- Node.js 18+ recommended 😂

## Install & Run

```sh
npm install
node index.js
# or, if you have a start script:
npm start
```

Open http://localhost:3000

## Usage

- Visit `/` in your browser and click the "Get Random Dog" button.
- To trigger the same action from the command line:

```sh
curl -X POST http://localhost:3000/random
```

## Endpoints

- GET / — Renders the main page.
- POST /random — Requests a random image from https://random.dog/woof.json and returns/displays the result.

## Configuration

- PORT — optional environment variable (default: 3000). Example (Windows PowerShell):

```ps1
$env:PORT=4000; node index.js
```

## Development

- Static assets are served from /public
- Views use EJS templates in /views

## Contributing

PRs and issues are welcome. Keep changes focused and add tests if applicable.

## License

MIT

## Author

Yousef Wageh
