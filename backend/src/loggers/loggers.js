const { createLogger, format, transports } = require('winston');

// const { combine, timestamp, label, printf } = format;


export const log = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' }, we really dont need this
    // transport will carry your data to either mongoDB or Console
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
})