# Welcome to decenCalc

It is a decentralized calculator built with the Intenet Computer protocol. This project 
currently consists of only three functions i.e addition, multiplication and getting the last result. The implementation of 'Show last result' demonstrates the concept of state persistence in the dfinity canister, as a
result of which databases are not needed. As Sodium Network is still not accessible to general public, so the only option left was to create a local replica of Internet computer subnet in the local development environement.

To learn more before you start working with calculator, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)



If you want to run this project in your computer, you might want to try the following commands:

Note : Before trying these commands, make sure that you have done 'dfx start' and left that terminal as open.

```bash
git clone https://github.com/davidmitesh/dfinity-explore.git
cd calculator/
npm install 
dfx deploy
```

Finally, copy the canister_id and open your browser and type localhost:8000/?canisterId=<Your_canister_id>.



