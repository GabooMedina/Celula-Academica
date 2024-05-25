module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/__mocks__/fileMock.js"
    }
  };
  