/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","b048c066e79aafe1390b0fdcc0af73ad"],["/bower_components/app-layout/app-drawer/app-drawer.html","d0e6b58c87e2efb6681e9ae883847e55"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","ce1dc4392ee9c2f99f9f968d7cc3bc4d"],["/bower_components/app-layout/app-header/app-header.html","2d5e0dd6ef3448cbed9afca607976019"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","a7fd07f3ba877a6ab1c3e5487de7b8a6"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","334eac7f54a828baedbe8f09574571b7"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","f86b521dcee037664bb46087e554e584"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","6d1abfcc4cbb5f7b2075e9049da8f3ef"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","79e57109d5b68cdef525ccfb8d95ddca"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","0463706e05ea59cf70c17377537f8dbd"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","b2aa2c34d0093eb445254797c6c3f6ce"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","dabcd7169f2b1409e0456856d9edc84a"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","1c8fb19cef85687e5b4cbe0ec8dfbc4f"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","640aea5db8664144961e7e4ad713e0af"],["/bower_components/app-layout/helpers/helpers.html","e893d7187da57d94700eac72deb0099c"],["/bower_components/app-route/app-location.html","06a360195af6e5b24021dec3ddd92909"],["/bower_components/app-route/app-route-converter-behavior.html","5d3f7956fa68095ff4aae6b938dec26c"],["/bower_components/app-route/app-route.html","3adbb963bbc6cdcde289651eb52c624a"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","8280c06272551d1906f3ccbc172597eb"],["/bower_components/iron-behaviors/iron-button-state.html","ae3f511a1ca054ad4777a4a417c26a24"],["/bower_components/iron-behaviors/iron-control-state.html","186df3effcc802cc6b64b59ed89d7008"],["/bower_components/iron-flex-layout/iron-flex-layout.html","98da82570410cf19e8867b3518e065a5"],["/bower_components/iron-icon/iron-icon.html","9990663d7be6f8c978a1e8f08074500b"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","b4e54eda060f011f4405d150e2e9c965"],["/bower_components/iron-location/iron-location.html","f3f576a456200a0ee768fbf8aa482613"],["/bower_components/iron-location/iron-query-params.html","f1aca85933da596d6b981bd848c5690d"],["/bower_components/iron-media-query/iron-media-query.html","884063841b99c312597b4006782b33a4"],["/bower_components/iron-meta/iron-meta.html","87dcb119002373b478c23bd6d65549de"],["/bower_components/iron-pages/iron-pages.html","e321b218d736f941929733f9430ccc00"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","32766a5557172042e33c7902748b9329"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","2c88167f2df2e69d6c861334f16f425a"],["/bower_components/iron-selector/iron-multi-selectable.html","e9fcbd1701d971eae709499634ae5503"],["/bower_components/iron-selector/iron-selectable.html","a766910a18f58367caeaca7098ff1483"],["/bower_components/iron-selector/iron-selection.html","76f8a7b97df52ad5104c12c14ab77366"],["/bower_components/iron-selector/iron-selector.html","e106c83c3473f4cd5528da00cc7c7572"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","04e1ab936983f71c3e4126213db444ba"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","54f9dd587dfc2db0be79121508d2c293"],["/bower_components/paper-icon-button/paper-icon-button.html","e95c101acd591646097dc63dcec6f913"],["/bower_components/paper-ripple/paper-ripple.html","da2ab3bcb89ac6e420782564c9667a37"],["/bower_components/paper-styles/color.html","731b5f7949a2c3f26ce829fd9be99c2d"],["/bower_components/paper-styles/default-theme.html","9e845d4da61bd65308eb8e4682cd8506"],["/bower_components/polymer/polymer-micro.html","e2e1c0b411ab913a2283cf75d084fe9b"],["/bower_components/polymer/polymer-mini.html","4df5051077d347fb033e53438fa7155e"],["/bower_components/polymer/polymer.html","9eea6678f4623862b477936ea045ae0f"],["/index.html","3983cd8c9d2e33fa3609a62e14766af4"],["/src/my-app.html","a7c3d77bd2a316abda6e9805e65be26b"],["/src/my-icons.html","ed7d2887893f037fb289349db1772f55"],["/src/my-view1.html","a75a95fa6cb9c11659c28015fb316cd8"],["/src/my-view2.html","006b3ba952dd86f8cb8086d585157dcb"],["/src/my-view3.html","529bb3ab8376eb645a59c9d0cf788d17"],["/src/my-view404.html","076516c3bd002405ba41135673113999"],["/src/shared-styles.html","ff87aa73b361d93288d28b4d58a6bf9a"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




