How to run the app:

Run `yarn install` and `yarn start`
Go to http://localhost:8000

Now go to Uniswap on mainnet and try to swap ETH for any token

Click on APESAFE tab for transaction insights

I wrote a small backend to make calls to etherscan without revealing my API keys

https://github.com/patcito/apesafe-backend/blob/main/app/getinfo/route.ts

It is running on vercel and you do not need to install it https://apesafe-backend.vercel.app//getinfo?address=0x437758D475F70249e03EDa6bE23684aD1FC375F0&chainId=1
