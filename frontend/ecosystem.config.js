require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/Smikulenko/nodejs-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': 'cd ${DEPLOY_PATH}frontend && npm i && npm run build',
    },
  },
};