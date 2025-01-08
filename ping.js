
import https from 'https';
import chalk from 'chalk';

// List of sites to ping
const sites = [
  'https://app1.onrender.com/',
  'https://app2.onrender.com/'
];

// Function to ping a site
function pingSite(site) {
  https
    .get(site, (res) => {
      const { statusCode } = res;
      if (statusCode >= 200 && statusCode < 300) {
        console.log(chalk.green(`SUCCESS: Pinged ${site} - Status Code: ${statusCode}`));
      } else if (statusCode >= 400 && statusCode < 500) {
        console.warn(chalk.yellow(`WARNING: Pinged ${site} - Status Code: ${statusCode}`));
      } else if (statusCode >= 500) {
        console.error(chalk.red(`ERROR: Pinged ${site} - Status Code: ${statusCode}`));
      } else {
        console.log(chalk.blue(`INFO: Pinged ${site} - Status Code: ${statusCode}`));
      }
    })
    .on('error', (err) => {
      console.error(chalk.red(`ERROR: Failed to ping ${site} - ${err.message}`));
    });
}

// Function to ping all sites
function pingAllSites() {
  console.log(chalk.cyan(`Pinging ${sites.length} site(s) at ${new Date().toISOString()}`));
  sites.forEach(pingSite);
}

const PING_INTERVAL = 60000 * 10; // 10 minutes
setInterval(pingAllSites, PING_INTERVAL);

pingAllSites();

module.exports = { pingSite, pingAllSites };
