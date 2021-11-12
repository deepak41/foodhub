var winston = require('winston'); 

let alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
        all:true
    }),
    winston.format.label({
        label:'[ORDER-SERVICE]'
    }),
    winston.format.printf(
        info => `${info.label} ${info.message}`
    )
);

winston.addColors( {
        info: 'cyan',
        error: 'red',
        warn: 'yellow',
        debug: 'green'
    }
);

const logger = winston.createLogger({
    level: "debug",
    transports: [
        new (winston.transports.Console)({
            format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
        })
    ],
});

module.exports = logger;