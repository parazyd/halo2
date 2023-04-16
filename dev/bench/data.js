window.BENCHMARK_DATA = {
  "lastUpdate": 1681656651335,
  "repoUrl": "https://github.com/parazyd/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "daira@jacaranda.org",
            "name": "Daira Hopwood",
            "username": "daira"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5678a506cbec60d593a21ff618d09bed48abf7f2",
          "message": "Merge pull request #755 from zcash/lookup-errors\n\n`plonk::Error::TableError`: Better lookup errors",
          "timestamp": "2023-04-04T23:27:28Z",
          "tree_id": "e656b9132260d133ef8fc73654d012ae00242ca4",
          "url": "https://github.com/parazyd/halo2/commit/5678a506cbec60d593a21ff618d09bed48abf7f2"
        },
        "date": 1681656648087,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 99432476,
            "range": "± 8643633",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 5739104,
            "range": "± 624781",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 182340819,
            "range": "± 4674026",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 6709324,
            "range": "± 580075",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 247225321,
            "range": "± 5372692",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 7426834,
            "range": "± 857033",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 46987,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 160632,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 175900,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 287908,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 287869,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 163498,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 178745,
            "range": "± 1371",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 291170,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 291035,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 343169,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 358385,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 470314,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 470249,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3515835,
            "range": "± 2906",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5889801,
            "range": "± 2483",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10067936,
            "range": "± 10523",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 21786557,
            "range": "± 84674",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 40820414,
            "range": "± 89187",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 78575000,
            "range": "± 104011",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 6971,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8229,
            "range": "± 1874",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 15483,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 18590,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 26539,
            "range": "± 3185",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 45278,
            "range": "± 7291",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 104849,
            "range": "± 13734",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 216498,
            "range": "± 34346",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 470628,
            "range": "± 63936",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 923313,
            "range": "± 102309",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1700323,
            "range": "± 156770",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3526132,
            "range": "± 414404",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 7950537,
            "range": "± 645783",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 15562740,
            "range": "± 1620050",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 33623200,
            "range": "± 659513",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 72882316,
            "range": "± 562741",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 34528,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 34698,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 174075800,
            "range": "± 7008080",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 372026057,
            "range": "± 1090670",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 813286788,
            "range": "± 12445342",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1742635510,
            "range": "± 6048926",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3709191588,
            "range": "± 10539343",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 7922312979,
            "range": "± 11041566",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 16865505737,
            "range": "± 26711387",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 35800024508,
            "range": "± 43422856",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 75734547450,
            "range": "± 82129220",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 113913957,
            "range": "± 3231616",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 207343339,
            "range": "± 7485151",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 349453094,
            "range": "± 8667934",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 624340001,
            "range": "± 12110984",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1145482587,
            "range": "± 12566166",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2118640059,
            "range": "± 17017847",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4009481112,
            "range": "± 16191203",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 7762179448,
            "range": "± 17539368",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 14855291275,
            "range": "± 69196687",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5819180,
            "range": "± 454478",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 8983524,
            "range": "± 480328",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 14507708,
            "range": "± 988516",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 24340528,
            "range": "± 2895781",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 41914032,
            "range": "± 2181349",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 74941744,
            "range": "± 5272939",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 136600505,
            "range": "± 6103701",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 248395480,
            "range": "± 17322977",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 455710708,
            "range": "± 6600406",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}