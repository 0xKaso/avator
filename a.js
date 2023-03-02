const base = {
  "1INCH": {
    address: "0x111111111117dc0aa78b770fa6a738034120c302",
    feed: "0xc929ad75b72593967de83e7f7cda0493458261d9",
  },
  AAVE: {
    address: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    feed: "0x547a514d5e3769680ce22b2361c10ea13619e8a9",
  },
  APE: {
    address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
    feed: "0xd10abbc76679a20055e167bb80a24ac851b37056",
  },
  CRV: {
    address: "0xd533a949740bb3306d119cc777fa900ba034cd52",
    feed: "0xcd627aa160a6fa45eb793d19ef54f5062f20f33f",
  },
  DAI: {
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    feed: "0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9",
  },
  DYDX: {
    address: "0x92d6c1e31e14520e676a687f0a93788b716beff5",
    feed: "0x478909D4D798f3a1F11fFB25E4920C959B4aDe0b",
  },
  FRAX: {
    address: "0x853d955acef822db058eb8505911ed77f175b99e",
    feed: "0xB9E1E3A9feFf48998E45Fa90847ed4D467E8BcfD",
  },
  LINK: {
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    feed: "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c",
  },
  MATIC: {
    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    feed: "0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676",
  },
  MKR: {
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    feed: "0xec1D1B3b0443256cc3860e24a46F108e699484Aa",
  },
  UNI: {
    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    feed: "0x553303d460EE0afB37EdFf9bE42922D8FF63220e",
  },
  USDC: {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    feed: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6",
  },
  USDT: {
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    feed: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D",
  },
  WBTC: {
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    feed: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c",
  }, // using price of BTC
  WETH: {
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    feed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  },
  SAND: {
    address: "0x3845badade8e6dff049820680d1f14bd3903a5d0",
    feed: "0x35E3f7E558C04cE7eEE1629258EcbbA03B36Ec56",
  },
};

const v1 = Object.keys(base);

v1.map((item) => {
  console.log(`${base[item].address}`);
});

v1.map((item) => {
  console.log(`${item}`);
});
