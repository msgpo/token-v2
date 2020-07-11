module.exports = {
    compilers: {
        solc: {
            version: "0.6.11",    // Fetch exact version from solc-bin (default: truffle's version)
            settings: {           // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200
                },
            }
        }
    }
}
