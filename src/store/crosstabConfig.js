const crosstabConfig = {
  whitelistReducers: [
    { key: 'user', whitelist: ['token', 'nick'] },
    { key: 'viewType', whitelist: ['viewType'] },
    { key: 'ratingMovie', whitelist: ['id'] },
    { key: 'language', whitelist: ['language'] },
  ],
};

export default crosstabConfig;
