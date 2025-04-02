"use strict";

class Logger {
    static log(level, label, value) {
        const timestamp = new Date().toISOString();
        // If the value is empty or undefined, omit the colon
        const logMessage = value ? `${label}: ${value}` : `${label}`;
        console.log(`[${timestamp}] [${level}] ${logMessage}`);
    }

    static info(label, value) {
        this.log("INFO", label, value);
    }

    static warn(label, value) {
        this.log("WARN", label, value);
    }

    static error(label, value) {
        this.log("ERROR", label, value);
    }
}

module.exports = Logger;