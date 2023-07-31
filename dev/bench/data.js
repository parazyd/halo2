window.BENCHMARK_DATA = {
  "lastUpdate": 1690786265575,
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
          "id": "f9838c127ec9c14f6f323e0cfdc0c1392594d37f",
          "message": "Merge pull request #788 from zcash/fix-msrv-1.60\n\nhalo2_proofs: Pin dev-dependencies to versions compatible with MSRV",
          "timestamp": "2023-07-30T15:26:56+01:00",
          "tree_id": "448b5820c09267ba06679bb3a89b8d4de0939e64",
          "url": "https://github.com/parazyd/halo2/commit/f9838c127ec9c14f6f323e0cfdc0c1392594d37f"
        },
        "date": 1690786261643,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 106074364,
            "range": "± 11260777",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 5957088,
            "range": "± 724960",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 204004019,
            "range": "± 12503795",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 7637634,
            "range": "± 931403",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 285772433,
            "range": "± 10339512",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 8564510,
            "range": "± 899196",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 46613,
            "range": "± 2857",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 176346,
            "range": "± 6187",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 176120,
            "range": "± 10317",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 281442,
            "range": "± 11572",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 301805,
            "range": "± 14026",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 166460,
            "range": "± 7467",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 186416,
            "range": "± 23521",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 308583,
            "range": "± 15265",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 311756,
            "range": "± 12567",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 373974,
            "range": "± 19321",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 393520,
            "range": "± 17934",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 480623,
            "range": "± 28410",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 479900,
            "range": "± 22721",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3784788,
            "range": "± 200840",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 7221611,
            "range": "± 344786",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 12670224,
            "range": "± 205401",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 28798755,
            "range": "± 968493",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 52584886,
            "range": "± 816383",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 100546616,
            "range": "± 3893439",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8271,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 9968,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 18030,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 23767,
            "range": "± 1478",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 31877,
            "range": "± 2654",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 55708,
            "range": "± 9386",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 132271,
            "range": "± 26445",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 270333,
            "range": "± 40781",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 561619,
            "range": "± 73382",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 953870,
            "range": "± 122484",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1978306,
            "range": "± 253598",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 4372831,
            "range": "± 443791",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 9526135,
            "range": "± 937742",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 20410186,
            "range": "± 2893496",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 43999769,
            "range": "± 3080422",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 96120713,
            "range": "± 3084633",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 34739,
            "range": "± 1813",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 35733,
            "range": "± 1271",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 197116081,
            "range": "± 13136279",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 420722876,
            "range": "± 7071336",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 906890084,
            "range": "± 23235742",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1867584925,
            "range": "± 22891897",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 4122616213,
            "range": "± 39895033",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8801511936,
            "range": "± 75077584",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 18791061851,
            "range": "± 118639322",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 39703251058,
            "range": "± 337917192",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 82796068672,
            "range": "± 486402648",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 129391243,
            "range": "± 8162253",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 221024264,
            "range": "± 4336064",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 387660799,
            "range": "± 6788423",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 713736844,
            "range": "± 22696211",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1278137733,
            "range": "± 36213897",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2336017046,
            "range": "± 37972728",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4464614268,
            "range": "± 88174460",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 8783264904,
            "range": "± 112860196",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 16865804243,
            "range": "± 79870444",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6518199,
            "range": "± 686986",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 10108614,
            "range": "± 1152496",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 16659276,
            "range": "± 1550351",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 27496738,
            "range": "± 3220922",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 47049584,
            "range": "± 3511347",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 83598478,
            "range": "± 6296919",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 150678827,
            "range": "± 6973733",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 282532664,
            "range": "± 20747314",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 521374962,
            "range": "± 11215662",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}