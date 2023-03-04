window.BENCHMARK_DATA = {
  "lastUpdate": 1677968242447,
  "repoUrl": "https://github.com/parazyd/halo2",
  "entries": {
    "halo2 Benchmark": [
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
          "id": "47f2cc83498de27bcf1641e9f2e02e0c86551c7e",
          "message": "Merge pull request #728 from nagatoism/disable-rayon\n\n  Add feature \"multicore\"  and you can disable rayon by disabling the  \"multicore\" feature.",
          "timestamp": "2023-02-14T20:32:28Z",
          "tree_id": "cb509f92f5167939dd6a145ff5db146427fc191c",
          "url": "https://github.com/parazyd/halo2/commit/47f2cc83498de27bcf1641e9f2e02e0c86551c7e"
        },
        "date": 1677968238533,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 97938384,
            "range": "± 5637113",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 5353728,
            "range": "± 468262",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 182312345,
            "range": "± 5327204",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 6326491,
            "range": "± 539695",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 247798775,
            "range": "± 4981064",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 7613172,
            "range": "± 900902",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 46904,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 160460,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 175660,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 286332,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 286505,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 163887,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 179049,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 289750,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 289373,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 342733,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 357817,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 468625,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 467768,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3624809,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5904210,
            "range": "± 1576",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10109413,
            "range": "± 3687",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 21537330,
            "range": "± 91939",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 40294567,
            "range": "± 334165",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 78274700,
            "range": "± 431164",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7132,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8310,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 14878,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19309,
            "range": "± 1250",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 27114,
            "range": "± 3649",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 44849,
            "range": "± 6265",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 103422,
            "range": "± 15812",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 217444,
            "range": "± 35916",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 474036,
            "range": "± 64059",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 884270,
            "range": "± 84588",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1725576,
            "range": "± 158423",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3505246,
            "range": "± 419444",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8067342,
            "range": "± 817609",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 15780705,
            "range": "± 1912022",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 40342062,
            "range": "± 2867223",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 74354790,
            "range": "± 549190",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 34519,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 34649,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 173316174,
            "range": "± 1192510",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 371542735,
            "range": "± 1326517",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 813375717,
            "range": "± 4954004",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1732702542,
            "range": "± 4128125",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3695778165,
            "range": "± 8123290",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 7900871091,
            "range": "± 14792853",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 16826617763,
            "range": "± 41206592",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 35712029875,
            "range": "± 22959726",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 75458723912,
            "range": "± 65938018",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 117311912,
            "range": "± 4025024",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 205011899,
            "range": "± 4189399",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 351259650,
            "range": "± 6411672",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 625996303,
            "range": "± 12682375",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1129073106,
            "range": "± 14963606",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2119542670,
            "range": "± 16496689",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4030336251,
            "range": "± 12780599",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 7755293718,
            "range": "± 16918772",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 14874714490,
            "range": "± 43711759",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5701200,
            "range": "± 382169",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 8911467,
            "range": "± 690933",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 14364691,
            "range": "± 1165718",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 24271857,
            "range": "± 2593355",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 41871406,
            "range": "± 2555770",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 75093837,
            "range": "± 5392993",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 134961287,
            "range": "± 5835026",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 247954446,
            "range": "± 13122763",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 454175034,
            "range": "± 6780738",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}