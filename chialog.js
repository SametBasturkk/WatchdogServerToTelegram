const TelegramBot = require('node-telegram-bot-api');
const token = 'x';
const bot = new TelegramBot(token, { polling: true });
const axios = require('axios');

const chiaLogLocation = '/home/cemal/.chia/mainnet/log/debug.log';

bot.onText(/a/, (msg) => {

    var MongoClient = require('mongodb').MongoClient;
    var url = "x";
    var test;

    const options = {
        parse_mode: 'Markdown',

    };

    async function getChiaLog() {
        var justOne = 0;
        const readLastLines = require('read-last-lines');
        const log = await readLastLines.read(chiaLogLocation, 20);
        const lines = log.split("2022-");
        lines.forEach((line) => {
            if (line.includes("plots were eligible for farming")) {
                if (justOne == 0) {
                    bot.sendMessage(-672338117, line, options);
                    justOne = 1;
                }
                justOne = 1;
            }
        });

        return test;

    }

    async function Avcilar() {
        let db = await MongoClient.connect(url);
        let dbo = db.db("plot");
        return dbo.collection("Avcilar").find({}, {}).limit(1).sort({ $natural: -1 }).toArray().then((result) => {
            bot.sendMessage(-672338117, "*" + result[0].name + "*" + "\n" + "*Memory Usage:* " + result[0].memoryUsage + "\n" + "*Load Average 1:* " + result[0].loadavg1 + "\n" + "*Load Average 5:* " + result[0].loadavg5 + "\n" + "*Load Average 15:* " + result[0].loadavg15 + "\n" + "*Plot Count:* " + result[0].plotcount + "\n" + "*Speed:* " + result[0].speed + "\n" + "*Latest Update:* " + result[0].hourAndMinute, options);
            db.close();
        });
    }

    async function YeniBosna1() {
        let db = await MongoClient.connect(url);
        let dbo = db.db("plot");
        return await dbo.collection("Yenibosna1").find({}, {}).limit(1).sort({ $natural: -1 }).toArray().then((result) => {
            bot.sendMessage(-672338117, "*" + result[0].name + "*" + "\n" + "*Memory Usage:* " + result[0].memoryUsage + "\n" + "*Load Average 1:* " + result[0].loadavg1 + "\n" + "*Load Average 5:* " + result[0].loadavg5 + "\n" + "*Load Average 15:* " + result[0].loadavg15 + "\n" + "*Plot Count:* " + result[0].plotcount + "\n" + "*Speed:* " + result[0].speed + "\n" + "*Latest Update:* " + result[0].hourAndMinute, options); db.close();
        });
    }

    async function YeniBosna2() {
        let db = await MongoClient.connect(url);
        let dbo = db.db("plot");
        return await dbo.collection("Yenibosna2").find({}, {}).limit(1).sort({ $natural: -1 }).toArray().then((result) => {
            bot.sendMessage(-672338117, "*" + result[0].name + "*" + "\n" + "*Memory Usage:* " + result[0].memoryUsage + "\n" + "*Load Average 1:* " + result[0].loadavg1 + "\n" + "*Load Average 5:* " + result[0].loadavg5 + "\n" + "*Load Average 15:* " + result[0].loadavg15 + "\n" + "*Plot Count:* " + result[0].plotcount + "\n" + "*Speed:* " + result[0].speed + "\n" + "*Latest Update:* " + result[0].hourAndMinute, options); db.close();
        });
    }

    function Spacepool() {
        return axios.get('https://developer.pool.space/api/v1/farms/0xafe3ab287e0fa1b4cc70be9a4e0dd2258409c8a948a3908de4df6dc0687ff347', {
            headers: {
                'accept': 'application/json',
                'Developer-Key': 'x',
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
            }
        }).then((response) => {
            bot.sendMessage(-672338117, "*Spacepool*" + "\n" + "*Total Plots:* " + response.data.estimatedPlots + "\n" + "*Total Capacity:* " + response.data.estimatedPlotSizeTiB.toFixed(2) + " *TB*" + "\n" + "*Unpaid Balance:* " + response.data.unpaidBalanceInXCH.toFixed(5) + "\n" + "*Diff:* " + response.data.difficulty, options);
        });

    }

    Spacepool();
    Avcilar();
    YeniBosna1();
    YeniBosna2();
    getChiaLog();

});
