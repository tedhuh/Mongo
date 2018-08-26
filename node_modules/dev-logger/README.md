# dev-logger

A logger utility can be easily swiched between dev development and production mode.
This tool supports:
  * built-in log rotation
  * colorized log message
  * 4 log levels and custom log level output
  * caching log messages

## Install
Install the module with:

```bash
npm install dev-logger
```

## Usage
```javascript
var logger = require('dev-logger');
logger.log("normal log message")
logger.warn("warning message")
logger.error(bad error  message")
logger.info("success message")

// output realtime message
logger.isDebug = true

// output cached log message in an interval and turn on log rotation
logger.isDebug = false

// custom log level,  logger.LOG < logger.INFO < logger.WARN  < logger.ERROR
logger.setLevel(logger.INFO);

// custom log output path
logger.setPath(pathToLogFile);

// sample log messages:
// [9087] 2013-10-05T20:27:34.803Z LOG - [json_util::getJsonFromFile] path:/Users/ty/workspaces/runway/assets/json/missions.json
// [9087] 2013-10-05T20:27:34.803Z WARNING - [mission_asset::loadDepot]: load mission json data is NULL.
// [9087] 2013-10-05T20:27:34.803Z LOG - [json_util::getJsonFromFile] path:/Users/ty/workspaces/runway/assets/json/game_levels.json
// [9087] 2013-10-05T20:27:34.804Z LOG - [json_util::getJsonFromFile] path:/Users/ty/workspaces/runway/assets/json/monsters.json
// [9087] 2013-10-05T20:27:34.812Z INFO - [db.connectToMySQL] MySQL client is ready.



```

## Contributing
mostly written by [@wuyuntao](https://github.com/wuyuntao)

## License
Copyright (c) 2013 yi
Licensed under the MIT license.
