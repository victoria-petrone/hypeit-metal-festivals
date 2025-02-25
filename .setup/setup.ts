import { promises as fs } from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COLORS = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m',
};

const GITHUB_USERNAME = 'hypeIT-GmbH';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query: string): Promise<string> =>
  new Promise((resolve) => rl.question(query, resolve));

const abortSetup = (value?: string) => {
  if (!value) {
    console.error('Setup aborted. Exit Setup.');
    process.exit(1);
  }
};

const getUserInputs = async () => {
  // eslint-disable-next-line no-console
  console.log(
    `${COLORS.yellow}Setting up project...\nUse Ctrl + C to exit.${COLORS.reset}\n`
  );
  const repositoryName = await prompt(
    `${COLORS.green}Enter GitHub repository name (required): ${COLORS.reset}`
  );
  abortSetup(repositoryName);

  const fontAwesomeToken = await prompt(
    `${COLORS.green}Enter FontAwesome token (leave blank to skip): ${COLORS.reset}`
  );
  const sentryDSN = await prompt(
    `${COLORS.green}Enter Sentry DSN (leave blank to skip): ${COLORS.reset}`
  );
  const sentryAuthToken = await prompt(
    `${COLORS.green}Enter Sentry auth token (leave blank to skip): ${COLORS.reset}`
  );

  rl.close();
  return { repositoryName, fontAwesomeToken, sentryDSN, sentryAuthToken };
};

const createEnvFile = async (
  fontAwesomeToken: string,
  sentryDSN: string,
  sentryAuthToken: string
) => {
  const envPath = path.resolve(__dirname, '../.env.local');
  const envContent = `FONTAWESOME_PACKAGE_TOKEN=${fontAwesomeToken}\nNEXT_PUBLIC_SENTRY_DSN=${sentryDSN}\nSENTRY_AUTH_TOKEN=${sentryAuthToken}`;
  await fs.writeFile(envPath, envContent, 'utf8');
  // eslint-disable-next-line no-console
  console.log(`${COLORS.green}.env file created successfully.${COLORS.reset}`);
};

const createSentryEnvFile = async (sentryAuthToken: string) => {
  const sentryEnvPath = path.resolve(__dirname, '../.env.sentry-build-plugin');
  const sentryEnvContent = `SENTRY_AUTH_TOKEN=${sentryAuthToken}`;
  await fs.writeFile(sentryEnvPath, sentryEnvContent, 'utf8');
  // eslint-disable-next-line no-console
  console.log(
    `${COLORS.green}.sentryclirc file created successfully.${COLORS.reset}`
  );
};

const modifyPackageJson = async (repositoryName: string) => {
  const packagePath = path.resolve(__dirname, '../package.json');
  const packageData = JSON.parse(await fs.readFile(packagePath, 'utf8'));
  packageData.name = repositoryName;
  packageData.repository = {
    url: `git+https://github.com/${GITHUB_USERNAME}/${repositoryName}.git`,
  };
  packageData.bugs = {
    url: `https://github.com/${GITHUB_USERNAME}/${repositoryName}/issues`,
  };
  await fs.writeFile(packagePath, JSON.stringify(packageData, null, 2), 'utf8');
  // eslint-disable-next-line no-console
  console.log(
    `${COLORS.green}package.json updated successfully!${COLORS.reset}`
  );
};

const main = async () => {
  const { repositoryName, fontAwesomeToken, sentryDSN, sentryAuthToken } =
    await getUserInputs();
  await createEnvFile(fontAwesomeToken, sentryDSN, sentryAuthToken);
  await createSentryEnvFile(sentryAuthToken);
  await modifyPackageJson(repositoryName);
};

main().catch((error) => {
  console.error(`${COLORS.red}Error: ${error.message}${COLORS.reset}`);
  process.exit(1);
});
