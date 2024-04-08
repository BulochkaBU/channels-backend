# The backend for a message board prototype

This project is the backend for a message board prototype application, built using Express.js. It provides a simple API for managing channels and messages.

- Channels and empty messages are stored in a global variable for simplicity (channels.js)
- A GET endpoint is provided to get all channels. Access it at http://localhost:5500/channels.
- A GET endpoint is provided to get all messages for a selected channel. Access it at http://localhost:5500/messages/:id, replacing :id with the ID of the channel.
- A POST endpoint is provided to submit new messages to a selected channel. Access it at http://localhost:5500/:id, replacing :id with the ID of the channel.

### Getting Started

Clone the repository and install the dependencies - (`npm i`).
Then, start the server (`npm start`)
