window.BENCHMARK_DATA = {
  "lastUpdate": 1688033187387,
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
      },
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c05547a70f452b525474861cc2337aefeb342adb",
          "message": "Merge pull request #782 from TomTaehoonKim/fix/typo\n\nFix typo",
          "timestamp": "2023-06-27T18:59:16+01:00",
          "tree_id": "5721a21b49641106a383a756fdaae4b15cdd2615",
          "url": "https://github.com/parazyd/halo2/commit/c05547a70f452b525474861cc2337aefeb342adb"
        },
        "date": 1688033184383,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 90414677,
            "range": "± 8562244",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4600485,
            "range": "± 377440",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 169452371,
            "range": "± 3018068",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5496054,
            "range": "± 565083",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 228393830,
            "range": "± 5487893",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 6833488,
            "range": "± 689335",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 38839,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 142057,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 154121,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 250716,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 250759,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 145098,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 157167,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 253608,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 253518,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 303477,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 315390,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 412046,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 412102,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3045168,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5854817,
            "range": "± 7685",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10040777,
            "range": "± 22941",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 22826936,
            "range": "± 319047",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 41502990,
            "range": "± 450589",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 83752167,
            "range": "± 421084",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7270,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8742,
            "range": "± 1284",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 14549,
            "range": "± 982",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19859,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 25597,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 42826,
            "range": "± 7372",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 97737,
            "range": "± 13573",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 207976,
            "range": "± 37896",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 448574,
            "range": "± 61385",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 843020,
            "range": "± 104513",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1615416,
            "range": "± 87625",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3175300,
            "range": "± 172205",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 6968039,
            "range": "± 404649",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 15415768,
            "range": "± 259993",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 33597767,
            "range": "± 481988",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 76291703,
            "range": "± 1476774",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28623,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28716,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 152363585,
            "range": "± 637117",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 327434827,
            "range": "± 1106661",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 720930513,
            "range": "± 11163388",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1515938484,
            "range": "± 4574949",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3246823788,
            "range": "± 10361085",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 6940117765,
            "range": "± 10792019",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 14785008183,
            "range": "± 25993962",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 31414817885,
            "range": "± 27022051",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 66368095644,
            "range": "± 57104644",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 103158734,
            "range": "± 4489841",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 181885905,
            "range": "± 4591283",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 312430229,
            "range": "± 9795592",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 559314929,
            "range": "± 8673639",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1005873501,
            "range": "± 12683060",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1878298796,
            "range": "± 13156336",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3577046985,
            "range": "± 18181679",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 6913665534,
            "range": "± 16645775",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13268317321,
            "range": "± 101793090",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5107873,
            "range": "± 50594",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 7955471,
            "range": "± 576714",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 12692757,
            "range": "± 490413",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 21583716,
            "range": "± 1440944",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37432867,
            "range": "± 2707845",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 66910145,
            "range": "± 5191665",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 119977551,
            "range": "± 3011690",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 222521298,
            "range": "± 15215573",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 412945616,
            "range": "± 9683037",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}