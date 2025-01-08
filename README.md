# Site Pinger

This is a simple Node.js project that pings a list of specified websites at regular intervals and logs the status of each ping using colored outputs for readability.

## Features
- Pings multiple sites at specified intervals.
- Displays status codes

## Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/obuhdaniel/PING.git
   cd site-pinger
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Update the `sites` array in the code with the URLs you want to monitor.
2. Start the application:
   ```bash
   node index.js
   ```

## Configuration
- **PING_INTERVAL**: Adjust the ping interval by modifying the `PING_INTERVAL` constant (currently set to 10 minutes).

## Scripts
- Start the service:
  ```bash
  npm run start
  ```

## Dependencies
- **https**: Built-in Node.js module for HTTP/HTTPS requests.
- **chalk**: Provides colorful console output.

## Exported Functions
- **pingSite(site)**: Pings a single site and logs the status.
- **pingAllSites()**: Pings all specified sites.

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## Author
obuhdaniel

