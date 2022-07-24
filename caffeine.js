module.exports = {
  caffeine: function (intervalSec = 60, logs = true) {
    const cronJob = require("cron").CronJob;
    const { exec } = require("child_process");

    const host = `${process.env.PROJECT_DOMAIN}.glitch.me`;

    new cronJob(
      `*/${intervalSec} * * * * *`,
      function () {
        exec(`ping ${host} -c 1`, (error, stdout, stderr) => {
          if (logs) {
            if (error) {
              console.log(`error: ${error.message}`);
              return;
            }
            if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
          }
        });
      },
      null,
      true,
      "America/Los_Angeles"
    );
  },
};
