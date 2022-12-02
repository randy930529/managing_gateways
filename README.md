# managing_gateways

This sample project is managing gateways - master devices that control multiple peripheral devices.

## Getting Started and Installation

Clone the files into a folder. Run NPM to install dependencies:

```bash
npm install
```

Configure your environment:

```bash
`Port and host to MongoDB connect`
PORT=
HOST=
```

Run server using nodejs or nodemon in development.

```bash
node ./bin/www
or
npm run start
```

Browse to:
Use default is http://localhost:3001
or

Set the environment variable http://localhost:ENV_PORT

## Usage

Query the database in the SERVER_URL/api.

```url
GET /gateways
POST /gateway/:gw
POST /gateway/index/:id
POST /gateway
PUT /gateway/:id
DELETE /gateway/:id
```

## Example

Run build the example visual to react app.

```bash
npm install -g serve
serve -s ./example/build
```

Test data for Postman (or other rest client)

```json
{
  "gateway": "df4s6df4s8dfsd",
  "name": "Scan Hp",
  "address": "168.192.0.1",
  "peripheral_devices": [
    {
      "uid": 1,
      "vendor": "Canon",
      "status": true
    }
  ]
}
```
