window.BENCHMARK_DATA = {
  "lastUpdate": 1680307524291,
  "repoUrl": "https://github.com/parazyd/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ewillbefull@gmail.com",
            "name": "ebfull",
            "username": "ebfull"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "263356784042d7d4c1c17d357c94c1acaeb75ab5",
          "message": "Merge pull request #758 from zcash/release-0.3.0\n\nRelease 0.3.0 of halo2_proofs and halo2_gadgets",
          "timestamp": "2023-03-22T12:32:26-06:00",
          "tree_id": "16087d2e72223f8ad75a504c7125d88b237fc70a",
          "url": "https://github.com/parazyd/halo2/commit/263356784042d7d4c1c17d357c94c1acaeb75ab5"
        },
        "date": 1680307520858,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 111289656,
            "range": "± 10812262",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 6006557,
            "range": "± 607206",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 201347819,
            "range": "± 8326436",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 6786529,
            "range": "± 738965",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 280383106,
            "range": "± 12316321",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 7805194,
            "range": "± 939664",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 47217,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 168121,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 181335,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 299549,
            "range": "± 1545",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 295717,
            "range": "± 3595",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 171531,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 186386,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 300549,
            "range": "± 3435",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 300258,
            "range": "± 3670",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 356624,
            "range": "± 4788",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 371552,
            "range": "± 5615",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 484962,
            "range": "± 5762",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 488382,
            "range": "± 4299",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3337481,
            "range": "± 40240",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 6958817,
            "range": "± 51279",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 12486482,
            "range": "± 121941",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 26559942,
            "range": "± 189008",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 49422184,
            "range": "± 235235",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 96262843,
            "range": "± 2626698",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8363,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 9984,
            "range": "± 1180",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 17025,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 21991,
            "range": "± 902",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 30196,
            "range": "± 3007",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 50974,
            "range": "± 7039",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 118937,
            "range": "± 17327",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 245374,
            "range": "± 43467",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 523190,
            "range": "± 78485",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 965078,
            "range": "± 164145",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1993724,
            "range": "± 251068",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3949580,
            "range": "± 358742",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8485937,
            "range": "± 447484",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 18552605,
            "range": "± 679852",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 40873467,
            "range": "± 2332622",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 89712580,
            "range": "± 2577517",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 33987,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 34076,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 190599162,
            "range": "± 12789478",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 394985286,
            "range": "± 4688935",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 876918475,
            "range": "± 29876176",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1900257887,
            "range": "± 57789476",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3903150549,
            "range": "± 121619875",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8331730468,
            "range": "± 62058970",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17699618723,
            "range": "± 129031619",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 37412501915,
            "range": "± 126090163",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 78949307355,
            "range": "± 287799927",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 125650540,
            "range": "± 6489511",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 219003177,
            "range": "± 10160844",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 368185280,
            "range": "± 12034913",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 658017970,
            "range": "± 9962165",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1201879159,
            "range": "± 22657260",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2272245431,
            "range": "± 48210427",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4258937777,
            "range": "± 113213099",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 8480860017,
            "range": "± 245929985",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 15881778538,
            "range": "± 171211514",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6217638,
            "range": "± 573414",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9516005,
            "range": "± 879636",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 15182838,
            "range": "± 888003",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 25861769,
            "range": "± 2489908",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 45325247,
            "range": "± 4339041",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 79915855,
            "range": "± 6859993",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 150617424,
            "range": "± 8211835",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 268034701,
            "range": "± 16834771",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 491240349,
            "range": "± 15136549",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}