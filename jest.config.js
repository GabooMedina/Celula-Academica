module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/__mocks__/fileMock.js"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    setupFilesAfterEnv: ["@testing-library/jest-dom"]
  };
  