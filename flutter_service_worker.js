'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4b97740ca5e7e6997e847b1d50b1d676",
"index.html": "cc56516bd141186d4f3ae397777e3149",
"/": "cc56516bd141186d4f3ae397777e3149",
"main.dart.js": "2638be61617a362b4bac7c20412b2a7f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "963edfbcadff460f6753f04cc6003418",
"assets/AssetManifest.json": "43e5fc8869923f38346748ee543f8810",
"assets/NOTICES": "210c55dffc7dc272be7b6ae1d944823d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "aba06f2398df2f28678056278e35e51a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/img/229.png": "78f1c7828c2a469a2cd628a72d15dd58",
"assets/assets/img/239.png": "7d387ca1e81b042a5919a3e0085597ae",
"assets/assets/img/238.png": "50ba36eafd1215c3cd93ea443f660ee0",
"assets/assets/img/317.png": "0a9728ff88787ffc7a8a8890d48fa13a",
"assets/assets/img/303.png": "d317c580f91ead5eafef85bd8fe0afb2",
"assets/assets/img/263.png": "794ed305d904cd2956b3fe17d2dc5df9",
"assets/assets/img/277.png": "ea1e8bda4bbc04bb2ca43bafb94d971a",
"assets/assets/img/288.png": "7c7dc2bfe1068dfebe3aa35da3da7dde",
"assets/assets/img/289.png": "eee0f0f3530dc597076c9ab50f214898",
"assets/assets/img/276.png": "27b7879d3105e723ece52c490916218e",
"assets/assets/img/262.png": "dfd29fa7a612ed8548bf3ef4df5b5ca4",
"assets/assets/img/302.png": "bf61ca9eec9e380b28236b5cbbaa0392",
"assets/assets/img/316.png": "d5ad7da7119e11cfc40f7e9edf1a4beb",
"assets/assets/img/300.png": "594b8c8c29c355939b25ae168468a7ee",
"assets/assets/img/314.png": "296211328a3837029f8483708934c5e6",
"assets/assets/img/248.png": "d03a73e448f02911648de0ef9235dcfe",
"assets/assets/img/274.png": "e4689e6e1eba7a608f48020e30b34ea8",
"assets/assets/img/260.png": "5c2a1b473efe24088f7e2bdc38694f34",
"assets/assets/img/261.png": "567bb081e363921aad23b7d6f9990d08",
"assets/assets/img/275.png": "cf2bdc5d04a3667aba08999f88c31f8b",
"assets/assets/img/249.png": "473823a8969869fc50846349f046a63c",
"assets/assets/img/315.png": "b1120d517bc3528617d0f43699e900f3",
"assets/assets/img/301.png": "9c7b43b6dc36d6ee146ff22ef53891c5",
"assets/assets/img/305.png": "ff4e43c5380a3d2fe82d3e997762f70d",
"assets/assets/img/311.png": "fa91aed1574bb6b8d10f1ac15073922a",
"assets/assets/img/271.png": "bc0abbcf00cbf1218ac4eba78fe93869",
"assets/assets/img/265.png": "c84479f97273958a764053163d4604a1",
"assets/assets/img/259.png": "da8ca1305348b89eea92203f8bb8459a",
"assets/assets/img/258.png": "0c79a0bd30fa3e528928d5296ca24287",
"assets/assets/img/264.png": "181b196aae8e49572b00e41d477203cb",
"assets/assets/img/270.png": "0ea7c5e2b48fb635e55fd14a237e6644",
"assets/assets/img/310.png": "d161f53c7a0a6d93ec40741338f7f19e",
"assets/assets/img/304.png": "30cba05c9a72f31e30f9584c2c788a97",
"assets/assets/img/312.png": "5e1176cf1b91e9687000fdfd4597e9aa",
"assets/assets/img/306.png": "e552cb82bbea4b47cd081446744ca91a",
"assets/assets/img/266.png": "3d66cffbba68539dac337e821b415763",
"assets/assets/img/272.png": "454f07909f6d5856d1dd6b60498408d8",
"assets/assets/img/299.png": "7ebca2ecda2472f2b23606007f803f1f",
"assets/assets/img/298.png": "71411618bbd02d00d06d2de8a7496999",
"assets/assets/img/273.png": "2858590b9f77f178ec36bcacf864115e",
"assets/assets/img/267.png": "debefc4b9e62134539119a5b9e3343ba",
"assets/assets/img/307.png": "27d0c88ea47b8620295cde5eda482384",
"assets/assets/img/313.png": "1ba158d318d54b6369ed6a34af657766",
"assets/assets/img/322.png": "8157d1f3d6e84acb42dc45638d2e01a8",
"assets/assets/img/242.png": "8a3ed9ce333c202c5d13f2b634d2c35a",
"assets/assets/img/256.png": "e35af90d9448450400c6b93dd52897aa",
"assets/assets/img/281.png": "4e920c8328fee12b2ea51e4732cb0aea",
"assets/assets/img/295.png": "7c728fbee6d2d078865e9497deb2c613",
"assets/assets/img/294.png": "d08f50fd32b91bd5742557be7fc22056",
"assets/assets/img/280.png": "0e952e1386138ab773887e0ac40072b6",
"assets/assets/img/257.png": "255e2bb26ef93978a63ea3aef8df0bd7",
"assets/assets/img/243.png": "7b35e7994e98dad34ab18c3fc46cb568",
"assets/assets/img/323.png": "daf8e4c0589580188e51bb2d2cc3fd3c",
"assets/assets/img/309.png": "3a56bb97011752dec2d9008a369c12e6",
"assets/assets/img/321.png": "55740df0f29c87c85991a2a6b350eb51",
"assets/assets/img/269.png": "252aef20a650e706aba76058783dd7c9",
"assets/assets/img/255.png": "d4a7d6eb627efceb71e51b1c5a871152",
"assets/assets/img/241.png": "e599613c875544a98c501b30bd9ca38c",
"assets/assets/img/296.png": "fdb8a781d9629945cfb6d7d9ade32637",
"assets/assets/img/282.png": "503d6af8bc2567da05ddc38b273c96aa",
"assets/assets/img/283.png": "b7f91f4d829e4f6f31e65a93dd2e7295",
"assets/assets/img/297.png": "a2f3d816ed9fdb5b06524ecf7c176368",
"assets/assets/img/240.png": "bc1b9908a921149e6e64fc6c86f45699",
"assets/assets/img/254.png": "7566569b69834df4532633824c4752c3",
"assets/assets/img/268.png": "df325e9ede5daf3082302d99a3070849",
"assets/assets/img/320.png": "49245114cfa91087962c2087b80cd325",
"assets/assets/img/308.png": "f2b7ea5c055da654e8d40f21e315b397",
"assets/assets/img/324.png": "31e2d621f6b48c6133877e6983f1b428",
"assets/assets/img/318.png": "be0c4ce8a23ec4263fcdf936d38cf955",
"assets/assets/img/250.png": "4c138988def3fe2ce1f78411e89f3ff3",
"assets/assets/img/244.png": "5461cef41d8e0e4483247c9fe533e2c4",
"assets/assets/img/278.png": "5a241dcdd3dcc68bdaecf773f33b47d9",
"assets/assets/img/293.png": "bb03304be077868c295f5ca85f2fa234",
"assets/assets/img/287.png": "53662f3808566a1fa0fbf1ee70dd53b3",
"assets/assets/img/286.png": "db1810d83704875afbe43e3341809422",
"assets/assets/img/292.png": "39691944ddbdec38a7a1c0099f3cab64",
"assets/assets/img/279.png": "572913badc71ab41d42d03a91fe67d7d",
"assets/assets/img/245.png": "4f6e007e482812c053e0f4d76e5a5bbb",
"assets/assets/img/251.png": "7da2b6ed6b23981d41f94fbc33b0e3e2",
"assets/assets/img/319.png": "a9f46daf93b4566e31cd93f7ac038e5f",
"assets/assets/img/325.png": "7afdb183989e059ebc76ae83e9d41feb",
"assets/assets/img/327.png": "6a1b23308380c175e3a61b7911e77e75",
"assets/assets/img/247.png": "5642a0224fb5c231057bc93967bf4919",
"assets/assets/img/253.png": "d197f370489d8e780c01aa09841be3c5",
"assets/assets/img/284.png": "b1f3dd2d43d6a670d36cbbfe35feea56",
"assets/assets/img/290.png": "389f194862ea608b44ab81edeea54e9e",
"assets/assets/img/291.png": "270c1e4624d0af3e4498af77dc2bb532",
"assets/assets/img/285.png": "d987a605fff0d2141f7e673c38c9e283",
"assets/assets/img/252.png": "781c2db39bcab444e2e2a7a2f5024f02",
"assets/assets/img/246.png": "e93be75a8af0017d1a0f9d71db067c5f",
"assets/assets/img/326.png": "7ba3cae6519e8ad74864e5c2e75c75c8",
"assets/assets/img/235.png": "c381038d0ebe37730a181eb91ef073e2",
"assets/assets/img/234.png": "bf32f5d54013b26be51812dd40e98a21",
"assets/assets/img/236.png": "bdc4e0027c68cc55b252837702b16d23",
"assets/assets/img/237.png": "bea0da22a62c945a539cd9d5523eb090",
"assets/assets/img/233.png": "35e0fd73fa4b388a378bf2051f3a3f74",
"assets/assets/img/232.png": "264ed8854b7ff10dbda9ff697ba4f174",
"assets/assets/img/230.png": "42fbd526159c85728ec6c646dfc697df",
"assets/assets/img/231.png": "90e6a37bb9c31005cceda8676942d63e",
"assets/assets/kitaplar.json": "41ff2730e1dc4f39c6715544d3fe43ff",
"assets/assets/logo.png": "5f4a8767b2c1ffcaf74261aea21c308b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
