require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember mistake inner kite bridge giggle'; 
let testAccounts = [
"0xb8e17a62b0aa1222abc4bb392471db81f50d9201aac2af288f3c6ad4553972d8",
"0x5bdeea5fba7fa9f32a77bcd7bfd9fc1768e9384f3f7625134c89b31b4d823b25",
"0x03ca2919ffbcee7808682480bc9d50b8805b69817e94fa7c5ca4242981a40f6c",
"0x85c83f08aedf5374b5e644b2e58bef785b712b36d3590e08ee9cdde25cbfc44f",
"0xa85c7cbe25c68028c58a596dbc820511958de83815aa40c277f108d739d8de19",
"0x3e85cc0366761a542af5bb807a982309bd9e3037a652d11293a55c94e613bd4d",
"0xff2197e9dbdc896e6597f32a43c238925a58899a12d24602f47aaaf2774339bc",
"0x4722ef32323e7829f2327956e62b945c150c0188e8d1a672ad0c2df10e22d39f",
"0x7ecd7683fde7582a9bd7bc437692ad0eefd994687be6b28cd00117fb4a211e0c",
"0xa0a4704d8b68c3838aba1854bbefe962d700c3178dd7ba14381c2b459e5a7738"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


