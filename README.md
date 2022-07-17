
# OctaMeme JSON Server API

RESTful API for OctaMeme utilizing Node.js module 'json-server'. Intended to be deployed on Heroku, but can be run locally.


## Run Locally

Clone the project

```bash
  git clone https://github.com/mahkota/octameme-api.git octameme-api
```

Go to the project directory

```bash
  cd octameme-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start-local
```

Note: You can change server's port on `package.json`, spesifically on `"start-local"` script by adding `--port` parameter.

```javascript
"scripts": {
  "start-local": "json-server --watch db.json --port 3010",
  ...
},
```