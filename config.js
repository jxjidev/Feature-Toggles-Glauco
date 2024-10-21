const featureToggles = {
    newFeature: process.env.NEW_FEATURE === 'true',
    experimentalFeature: process.env.EXPERIMENTAL_FEATURE === 'true',
    betaFeature: process.env.BETA_FEATURE === 'true'
};

module.exports = featureToggles;
