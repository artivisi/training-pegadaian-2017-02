# Cara Deploy Aplikasi Angular 2 ke Heroku #

Langkah-langkahnya:

1. Sediakan dependensi library agar terinstall juga di Heroku
2. Pasang script untuk melakukan build
3. Perbaiki script start supaya menjalankan `http-server` di folder `dist`
4. Create aplikasi di Heroku
5. Tambahkan Heroku sebagai Git Remote
6. Commit perubahan dan push ke Heroku

## Dependensi Library ##

Pindahkan library berikut dari 'devDependencies' ke 'dependencies'

```json
"@angular/cli": "1.0.0-beta.32.3",
"@angular/compiler-cli": "^2.4.0",
"@types/jasmine": "2.5.38",
"@types/node": "~6.0.60",
"typescript": "~2.0.0"
```

## Script untuk Build dan Start ##

Heroku akan menjalankan perintah `npm heroku-prebuild` dan `npm heroku-postbuild`. Untuk itu kita sediakan perintah tersebut dalam blok `script{}`.

Pada perintah `heroku-prebuild`, kita pastikan webserver `http-server` terinstal. Sedangkan pada perintah `heroku-postbuild`, kita jalankan `ng-build` untuk mengkompilasi semua `js` dan `css` dan meletakkan hasilnya di folder `dist`.

Kita juga modifikasi perintah `start` agar menjalankan `http-server` di folder `dist`.

```json
"scripts": {
  "ng": "ng",
  "start": "http-server dist/",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e",
  "heroku-prebuild" : "npm install -g http-server",
  "heroku-postbuild" : "ng build"
}
```

Setelah selesai mengedit, jangan lupa `git commit` agar perubahan tersimpan dan ikut diupload pada saat kita `git push` nanti.

## Membuat Aplikasi Heroku ##

Pembuatan aplikasi bisa dilakukan lewat web ataupun command line. Di sini kita contohkan command line saja.

```
heroku apps:create gadai-angular2
```

Outputnya sebagai berikut

```
Creating ⬢ gadai-angular2... done
https://gadai-angular2.herokuapp.com/ | https://git.heroku.com/gadai-angular2.git
```

Output perintah di atas adalah URL aplikasi kita, dan URL git untuk melakukan deployment.

## Git Remote dan Push ##

Kita daftarkan git remote heroku.

```
git remote add heroku https://git.heroku.com/gadai-angular2.git
```

Setelah itu kita push subfolder `gadai-frontend` saja.

```
git subtree push --prefix gadai-frontend heroku master
```

Berikut outputnya

```
git push using:  heroku master
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 412 bytes | 0 bytes/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:        
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NPM_CONFIG_PRODUCTION=true
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:        
remote:        Resolving node version 6.x via semver.io...
remote:        Downloading and installing node 6.10.0...
remote:        Using default npm version: 3.10.10
remote:
remote: -----> Restoring cache
remote:        Loading 2 from cacheDirectories (default):
remote:        - node_modules
remote:        - bower_components (not cached - skipping)
remote:
remote: -----> Building dependencies
remote:        Running heroku-prebuild
remote:        
remote:        > gadai-frontend@0.0.0 heroku-prebuild /tmp/build_c7338dda5882ea9895288e3d1b9dd570
remote:        > npm install -g http-server
remote:        
remote:        /tmp/build_c7338dda5882ea9895288e3d1b9dd570/.heroku/node/bin/http-server -> /tmp/build_c7338dda5882ea9895288e3d1b9dd570/.heroku/node/lib/node_modules/http-server/bin/http-server
remote:        /tmp/build_c7338dda5882ea9895288e3d1b9dd570/.heroku/node/bin/hs -> /tmp/build_c7338dda5882ea9895288e3d1b9dd570/.heroku/node/lib/node_modules/http-server/bin/http-server
remote:        /tmp/build_c7338dda5882ea9895288e3d1b9dd570/.heroku/node/lib
remote:        └─┬ http-server@0.9.0
remote:        ├── colors@1.0.3
remote:        ├── corser@2.0.1
remote:        ├─┬ ecstatic@1.4.1
remote:        │ ├── he@0.5.0
remote:        │ ├── mime@1.3.4
remote:        │ ├── minimist@1.2.0
remote:        │ └── url-join@1.1.0
remote:        ├─┬ http-proxy@1.16.2
remote:        │ ├── eventemitter3@1.2.0
remote:        │ └── requires-port@1.0.0
remote:        ├── opener@1.4.3
remote:        ├─┬ optimist@0.6.1
remote:        │ ├── minimist@0.0.10
remote:        │ └── wordwrap@0.0.3
remote:        ├─┬ portfinder@0.4.0
remote:        │ ├── async@0.9.0
remote:        │ └─┬ mkdirp@0.5.1
remote:        │   └── minimist@0.0.8
remote:        └─┬ union@0.4.6
remote:        └── qs@2.3.3
remote:        
remote:        Installing node modules (package.json)
remote:        
remote:        > node-sass@4.5.0 install /tmp/build_c7338dda5882ea9895288e3d1b9dd570/node_modules/node-sass
remote:        > node scripts/install.js
remote:        
remote:        Downloading binary from https://github.com/sass/node-sass/releases/download/v4.5.0/linux-x64-48_binding.node
remote:        Download complete
remote:        Binary saved to /tmp/build_c7338dda5882ea9895288e3d1b9dd570/node_modules/node-sass/vendor/linux-x64-48/binding.node
remote:        Caching binary to /app/.npm/node-sass/4.5.0/linux-x64-48_binding.node
remote:        
remote:        > node-sass@4.5.0 postinstall /tmp/build_c7338dda5882ea9895288e3d1b9dd570/node_modules/node-sass
remote:        > node scripts/build.js
remote:        
remote:        Binary found at /tmp/build_c7338dda5882ea9895288e3d1b9dd570/node_modules/node-sass/vendor/linux-x64-48/binding.node
remote:        Testing binary
remote:        Binary is fine
remote:        gadai-frontend@0.0.0 /tmp/build_c7338dda5882ea9895288e3d1b9dd570
remote:        ├─┬ @angular/cli@1.0.0-beta.32.3
remote:        │ ├─┬ @angular/tsc-wrapped@0.5.2
remote:        │ │ └─┬ tsickle@0.2.6
remote:        │ │   └── source-map-support@0.4.11
remote:        │ ├── @ngtools/json-schema@1.0.3
remote:        │ ├─┬ @ngtools/webpack@1.2.10
remote:        │ │ ├── enhanced-resolve@3.1.0
remote:        │ │ ├─┬ loader-utils@0.2.17
remote:        │ │ │ ├── big.js@3.1.3
remote:        │ │ │ ├── emojis-list@2.1.0
remote:        │ │ │ └── json5@0.5.1
remote:        │ │ ├─┬ magic-string@0.19.0
remote:        │ │ │ └── vlq@0.2.1
remote:        │ │ └── source-map@0.5.6
remote:        │ ├─┬ autoprefixer@6.7.4
remote:        │ │ ├─┬ browserslist@1.7.4
remote:        │ │ │ └── electron-to-chromium@1.2.2
remote:        │ │ ├── caniuse-db@1.0.30000624
remote:        │ │ ├── normalize-range@0.1.2
remote:        │ │ ├── num2fraction@1.2.2
remote:        │ │ ├─┬ postcss@5.2.14
remote:        │ │ │ └── js-base64@2.1.9
remote:        │ │ └── postcss-value-parser@3.3.0
remote:        │ ├─┬ chalk@1.1.3
remote:        │ │ ├── ansi-styles@2.2.1
remote:        │ │ ├── escape-string-regexp@1.0.5
remote:        │ │ ├─┬ has-ansi@2.0.0
remote:        │ │ │ └── ansi-regex@2.1.1
remote:        │ │ ├── strip-ansi@3.0.1
remote:        │ │ └── supports-color@2.0.0
remote:        │ ├─┬ common-tags@1.4.0
remote:        │ │ └─┬ babel-runtime@6.23.0
remote:        │ │   └── regenerator-runtime@0.10.3
remote:        │ ├─┬ css-loader@0.26.1
remote:        │ │ ├─┬ babel-code-frame@6.22.0
remote:        │ │ │ ├── esutils@2.0.2
remote:        │ │ │ └── js-tokens@3.0.1
remote:        │ │ ├─┬ css-selector-tokenizer@0.7.0
remote:        │ │ │ ├── cssesc@0.1.0
remote:        │ │ │ ├── fastparse@1.1.1
remote:        │ │ │ └─┬ regexpu-core@1.0.0
remote:        │ │ │   ├── regenerate@1.3.2
remote:        │ │ │   ├── regjsgen@0.2.0
remote:        │ │ │   └─┬ regjsparser@0.1.5
remote:        │ │ │     └── jsesc@0.5.0
remote:        │ │ ├── lodash.camelcase@4.3.0
remote:        │ │ ├── object-assign@4.1.1
remote:        │ │ ├── postcss-modules-extract-imports@1.0.1
remote:        │ │ ├─┬ postcss-modules-local-by-default@1.1.1
remote:        │ │ │ └── css-selector-tokenizer@0.6.0
remote:        │ │ ├─┬ postcss-modules-scope@1.0.2
remote:        │ │ │ └── css-selector-tokenizer@0.6.0
remote:        │ │ ├─┬ postcss-modules-values@1.2.2
remote:        │ │ │ └── icss-replace-symbols@1.0.2
remote:        │ │ └── source-list-map@0.1.8
remote:        │ ├─┬ cssnano@3.10.0
remote:        │ │ ├── decamelize@1.2.0
remote:        │ │ ├── defined@1.0.0
remote:        │ │ ├─┬ has@1.0.1
remote:        │ │ │ └── function-bind@1.1.0
remote:        │ │ ├─┬ postcss-calc@5.3.1
remote:        │ │ │ ├── postcss-message-helpers@2.0.0
remote:        │ │ │ └─┬ reduce-css-calc@1.3.0
remote:        │ │ │   ├── math-expression-evaluator@1.2.16
remote:        │ │ │   └── reduce-function-call@1.0.2
remote:        │ │ ├─┬ postcss-colormin@2.2.2
remote:        │ │ │ └─┬ colormin@1.1.2
remote:        │ │ │   ├─┬ color@0.11.4
remote:        │ │ │   │ ├── clone@1.0.2
remote:        │ │ │   │ ├─┬ color-convert@1.9.0
remote:        │ │ │   │ │ └── color-name@1.1.1
remote:        │ │ │   │ └── color-string@0.3.0
remote:        │ │ │   └── css-color-names@0.0.4
remote:        │ │ ├── postcss-convert-values@2.6.1
remote:        │ │ ├── postcss-discard-comments@2.0.4
remote:        │ │ ├── postcss-discard-duplicates@2.0.2
remote:        │ │ ├── postcss-discard-empty@2.1.0
remote:        │ │ ├── postcss-discard-overridden@0.1.1
remote:        │ │ ├─┬ postcss-discard-unused@2.2.3
remote:        │ │ │ └── uniqs@2.0.0
remote:        │ │ ├─┬ postcss-filter-plugins@2.0.2
remote:        │ │ │ └─┬ uniqid@4.1.1
remote:        │ │ │   └── macaddress@0.2.8
remote:        │ │ ├── postcss-merge-idents@2.1.7
remote:        │ │ ├── postcss-merge-longhand@2.0.2
remote:        │ │ ├─┬ postcss-merge-rules@2.1.2
remote:        │ │ │ ├─┬ caniuse-api@1.5.3
remote:        │ │ │ │ ├── lodash.memoize@4.1.2
remote:        │ │ │ │ └── lodash.uniq@4.5.0
remote:        │ │ │ ├─┬ postcss-selector-parser@2.2.2
remote:        │ │ │ │ ├── flatten@1.0.2
remote:        │ │ │ │ ├── indexes-of@1.0.1
remote:        │ │ │ │ └── uniq@1.0.1
remote:        │ │ │ └── vendors@1.0.1
remote:        │ │ ├── postcss-minify-font-values@1.0.5
remote:        │ │ ├── postcss-minify-gradients@1.0.5
remote:        │ │ ├─┬ postcss-minify-params@1.2.2
remote:        │ │ │ └── alphanum-sort@1.0.2
remote:        │ │ ├── postcss-minify-selectors@2.1.1
remote:        │ │ ├── postcss-normalize-charset@1.1.1
remote:        │ │ ├─┬ postcss-normalize-url@3.0.8
remote:        │ │ │ ├── is-absolute-url@2.1.0
remote:        │ │ │ └─┬ normalize-url@1.9.0
remote:        │ │ │   ├── prepend-http@1.0.4
remote:        │ │ │   ├─┬ query-string@4.3.2
remote:        │ │ │   │ └── strict-uri-encode@1.1.0
remote:        │ │ │   └─┬ sort-keys@1.1.2
remote:        │ │ │     └── is-plain-obj@1.1.0
remote:        │ │ ├── postcss-ordered-values@2.2.3
remote:        │ │ ├── postcss-reduce-idents@2.4.0
remote:        │ │ ├── postcss-reduce-initial@1.0.1
remote:        │ │ ├── postcss-reduce-transforms@1.0.4
remote:        │ │ ├─┬ postcss-svgo@2.1.6
remote:        │ │ │ ├─┬ is-svg@2.1.0
remote:        │ │ │ │ └── html-comment-regex@1.1.1
remote:        │ │ │ └─┬ svgo@0.7.2
remote:        │ │ │   ├─┬ coa@1.0.1
remote:        │ │ │   │ └── q@1.4.1
remote:        │ │ │   ├── colors@1.1.2
remote:        │ │ │   ├─┬ csso@2.3.1
remote:        │ │ │   │ └── clap@1.1.2
remote:        │ │ │   ├─┬ js-yaml@3.7.0
remote:        │ │ │   │ ├─┬ argparse@1.0.9
remote:        │ │ │   │ │ └── sprintf-js@1.0.3
remote:        │ │ │   │ └── esprima@2.7.3
remote:        │ │ │   ├── sax@1.2.2
remote:        │ │ │   └── whet.extend@0.9.9
remote:        │ │ ├── postcss-unique-selectors@2.0.2
remote:        │ │ └── postcss-zindex@2.2.0
remote:        │ ├─┬ debug@2.6.1
remote:        │ │ └── ms@0.7.2
remote:        │ ├── denodeify@1.2.1
remote:        │ ├── diff@3.2.0
remote:        │ ├── ember-cli-normalize-entity-name@1.0.0
remote:        │ ├── ember-cli-string-utils@1.1.0
remote:        │ ├─┬ exports-loader@0.6.3
remote:        │ │ └─┬ source-map@0.1.43
remote:        │ │   └── amdefine@1.0.1
remote:        │ ├─┬ extract-text-webpack-plugin@2.0.0-rc.3
remote:        │ │ ├─┬ ajv@4.11.3
remote:        │ │ │ ├── co@4.6.0
remote:        │ │ │ └─┬ json-stable-stringify@1.0.1
remote:        │ │ │   └── jsonify@0.0.0
remote:        │ │ ├── async@2.1.5
remote:        │ │ └── webpack-sources@0.1.4
remote:        │ ├── file-loader@0.10.0
remote:        │ ├─┬ findup@0.1.5
remote:        │ │ ├── colors@0.6.2
remote:        │ │ └── commander@2.1.0
remote:        │ ├─┬ fs-extra@2.0.0
remote:        │ │ ├── graceful-fs@4.1.11
remote:        │ │ └── jsonfile@2.4.0
remote:        │ ├── get-caller-file@1.0.2
remote:        │ ├─┬ glob@7.1.1
remote:        │ │ ├── fs.realpath@1.0.0
remote:        │ │ ├─┬ inflight@1.0.6
remote:        │ │ │ └── wrappy@1.0.2
remote:        │ │ ├── inherits@2.0.3
remote:        │ │ ├── once@1.4.0
remote:        │ │ └── path-is-absolute@1.0.1
remote:        │ ├─┬ html-webpack-plugin@2.28.0
remote:        │ │ ├── bluebird@3.4.7
remote:        │ │ ├─┬ html-minifier@3.3.3
remote:        │ │ │ ├─┬ camel-case@3.0.0
remote:        │ │ │ │ ├─┬ no-case@2.3.1
remote:        │ │ │ │ │ └── lower-case@1.1.3
remote:        │ │ │ │ └── upper-case@1.1.3
remote:        │ │ │ ├── clean-css@4.0.7
remote:        │ │ │ ├─┬ commander@2.9.0
remote:        │ │ │ │ └── graceful-readlink@1.0.1
remote:        │ │ │ ├── he@1.1.1
remote:        │ │ │ ├─┬ ncname@1.0.0
remote:        │ │ │ │ └── xml-char-classes@1.0.0
remote:        │ │ │ ├── param-case@2.1.0
remote:        │ │ │ └── relateurl@0.2.7
remote:        │ │ ├─┬ pretty-error@2.0.2
remote:        │ │ │ ├─┬ renderkid@2.0.0
remote:        │ │ │ │ ├─┬ css-select@1.2.0
remote:        │ │ │ │ │ ├── boolbase@1.0.0
remote:        │ │ │ │ │ ├── css-what@2.1.0
remote:        │ │ │ │ │ ├─┬ domutils@1.5.1
remote:        │ │ │ │ │ │ └─┬ dom-serializer@0.1.0
remote:        │ │ │ │ │ │   ├── domelementtype@1.1.3
remote:        │ │ │ │ │ │   └── entities@1.1.1
remote:        │ │ │ │ │ └── nth-check@1.0.1
remote:        │ │ │ │ ├─┬ dom-converter@0.1.4
remote:        │ │ │ │ │ └── utila@0.3.3
remote:        │ │ │ │ ├─┬ htmlparser2@3.3.0
remote:        │ │ │ │ │ ├── domelementtype@1.3.0
remote:        │ │ │ │ │ ├── domhandler@2.1.0
remote:        │ │ │ │ │ ├── domutils@1.1.6
remote:        │ │ │ │ │ └─┬ readable-stream@1.0.34
remote:        │ │ │ │ │   └── isarray@0.0.1
remote:        │ │ │ │ └── utila@0.3.3
remote:        │ │ │ └── utila@0.4.0
remote:        │ │ └── toposort@1.0.3
remote:        │ ├── inflection@1.12.0
remote:        │ ├─┬ inquirer@3.0.1
remote:        │ │ ├── ansi-escapes@1.4.0
remote:        │ │ ├─┬ cli-cursor@2.1.0
remote:        │ │ │ └─┬ restore-cursor@2.0.0
remote:        │ │ │   ├─┬ onetime@2.0.0
remote:        │ │ │   │ └── mimic-fn@1.1.0
remote:        │ │ │   └── signal-exit@3.0.2
remote:        │ │ ├── cli-width@2.1.0
remote:        │ │ ├─┬ external-editor@2.0.1
remote:        │ │ │ └── tmp@0.0.31
remote:        │ │ ├── figures@2.0.0
remote:        │ │ ├── mute-stream@0.0.7
remote:        │ │ ├─┬ run-async@2.3.0
remote:        │ │ │ └── is-promise@2.1.0
remote:        │ │ ├── rx@4.1.0
remote:        │ │ ├─┬ string-width@2.0.0
remote:        │ │ │ └── is-fullwidth-code-point@2.0.0
remote:        │ │ └── through@2.3.8
remote:        │ ├── isbinaryfile@3.0.2
remote:        │ ├─┬ istanbul-instrumenter-loader@2.0.0
remote:        │ │ ├── convert-source-map@1.4.0
remote:        │ │ └─┬ istanbul-lib-instrument@1.4.2
remote:        │ │   ├─┬ babel-generator@6.23.0
remote:        │ │   │ ├── babel-messages@6.23.0
remote:        │ │   │ ├─┬ detect-indent@4.0.0
remote:        │ │   │ │ └─┬ repeating@2.0.1
remote:        │ │   │ │   └── is-finite@1.0.2
remote:        │ │   │ ├── jsesc@1.3.0
remote:        │ │   │ └── trim-right@1.0.1
remote:        │ │   ├── babel-template@6.23.0
remote:        │ │   ├─┬ babel-traverse@6.23.1
remote:        │ │   │ ├── globals@9.16.0
remote:        │ │   │ └─┬ invariant@2.2.2
remote:        │ │   │   └── loose-envify@1.3.1
remote:        │ │   ├─┬ babel-types@6.23.0
remote:        │ │   │ └── to-fast-properties@1.0.2
remote:        │ │   ├── babylon@6.15.0
remote:        │ │   └── istanbul-lib-coverage@1.0.1
remote:        │ ├── json-loader@0.5.4
remote:        │ ├── karma-sourcemap-loader@0.3.7
remote:        │ ├─┬ karma-webpack@2.0.2
remote:        │ │ ├── async@0.9.2
remote:        │ │ ├── lodash@3.10.1
remote:        │ │ ├── source-map@0.1.43
remote:        │ │ └─┬ webpack-dev-middleware@1.10.1
remote:        │ │   └── range-parser@1.2.0
remote:        │ ├─┬ less@2.7.2
remote:        │ │ ├─┬ errno@0.1.4
remote:        │ │ │ └── prr@0.0.0
remote:        │ │ ├── image-size@0.5.1
remote:        │ │ ├── mime@1.3.4
remote:        │ │ ├─┬ mkdirp@0.5.1
remote:        │ │ │ └── minimist@0.0.8
remote:        │ │ ├─┬ promise@7.1.1
remote:        │ │ │ └── asap@2.0.5
remote:        │ │ └─┬ request@2.79.0
remote:        │ │   ├── aws-sign2@0.6.0
remote:        │ │   ├── aws4@1.6.0
remote:        │ │   ├── caseless@0.11.0
remote:        │ │   ├─┬ combined-stream@1.0.5
remote:        │ │   │ └── delayed-stream@1.0.0
remote:        │ │   ├── extend@3.0.0
remote:        │ │   ├── forever-agent@0.6.1
remote:        │ │   ├─┬ form-data@2.1.2
remote:        │ │   │ └── asynckit@0.4.0
remote:        │ │   ├─┬ har-validator@2.0.6
remote:        │ │   │ ├── commander@2.9.0
remote:        │ │   │ └─┬ is-my-json-valid@2.15.0
remote:        │ │   │   ├── generate-function@2.0.0
remote:        │ │   │   ├─┬ generate-object-property@1.2.0
remote:        │ │   │   │ └── is-property@1.0.2
remote:        │ │   │   └── jsonpointer@4.0.1
remote:        │ │   ├─┬ hawk@3.1.3
remote:        │ │   │ ├── boom@2.10.1
remote:        │ │   │ ├── cryptiles@2.0.5
remote:        │ │   │ ├── hoek@2.16.3
remote:        │ │   │ └── sntp@1.0.9
remote:        │ │   ├─┬ http-signature@1.1.1
remote:        │ │   │ ├── assert-plus@0.2.0
remote:        │ │   │ ├─┬ jsprim@1.3.1
remote:        │ │   │ │ ├── extsprintf@1.0.2
remote:        │ │   │ │ ├── json-schema@0.2.3
remote:        │ │   │ │ └── verror@1.3.6
remote:        │ │   │ └─┬ sshpk@1.10.2
remote:        │ │   │   ├── asn1@0.2.3
remote:        │ │   │   ├── assert-plus@1.0.0
remote:        │ │   │   ├── bcrypt-pbkdf@1.0.1
remote:        │ │   │   ├─┬ dashdash@1.14.1
remote:        │ │   │   │ └── assert-plus@1.0.0
remote:        │ │   │   ├── ecc-jsbn@0.1.1
remote:        │ │   │   ├─┬ getpass@0.1.6
remote:        │ │   │   │ └── assert-plus@1.0.0
remote:        │ │   │   ├── jodid25519@1.0.2
remote:        │ │   │   ├── jsbn@0.1.1
remote:        │ │   │   └── tweetnacl@0.14.5
remote:        │ │   ├── is-typedarray@1.0.0
remote:        │ │   ├── isstream@0.1.2
remote:        │ │   ├── json-stringify-safe@5.0.1
remote:        │ │   ├─┬ mime-types@2.1.14
remote:        │ │   │ └── mime-db@1.26.0
remote:        │ │   ├── oauth-sign@0.8.2
remote:        │ │   ├── qs@6.3.1
remote:        │ │   ├── stringstream@0.0.5
remote:        │ │   ├── tough-cookie@2.3.2
remote:        │ │   ├── tunnel-agent@0.4.3
remote:        │ │   └── uuid@3.0.1
remote:        │ ├── less-loader@2.2.3
remote:        │ ├── lodash@4.17.4
remote:        │ ├─┬ minimatch@3.0.3
remote:        │ │ └─┬ brace-expansion@1.1.6
remote:        │ │   ├── balanced-match@0.4.2
remote:        │ │   └── concat-map@0.0.1
remote:        │ ├── node-modules-path@1.0.1
remote:        │ ├─┬ node-sass@4.5.0
remote:        │ │ ├── async-foreach@0.1.3
remote:        │ │ ├─┬ cross-spawn@3.0.1
remote:        │ │ │ ├─┬ lru-cache@4.0.2
remote:        │ │ │ │ ├── pseudomap@1.0.2
remote:        │ │ │ │ └── yallist@2.0.0
remote:        │ │ │ └─┬ which@1.2.12
remote:        │ │ │   └── isexe@1.1.2
remote:        │ │ ├─┬ gaze@1.1.2
remote:        │ │ │ └─┬ globule@1.1.0
remote:        │ │ │   └── lodash@4.16.6
remote:        │ │ ├── get-stdin@4.0.1
remote:        │ │ ├── in-publish@2.0.0
remote:        │ │ ├── lodash.assign@4.2.0
remote:        │ │ ├── lodash.clonedeep@4.5.0
remote:        │ │ ├── lodash.mergewith@4.6.0
remote:        │ │ ├─┬ meow@3.7.0
remote:        │ │ │ ├─┬ camelcase-keys@2.1.0
remote:        │ │ │ │ └── camelcase@2.1.1
remote:        │ │ │ ├─┬ loud-rejection@1.6.0
remote:        │ │ │ │ └─┬ currently-unhandled@0.4.1
remote:        │ │ │ │   └── array-find-index@1.0.2
remote:        │ │ │ ├── map-obj@1.0.1
remote:        │ │ │ ├─┬ normalize-package-data@2.3.5
remote:        │ │ │ │ ├── hosted-git-info@2.2.0
remote:        │ │ │ │ ├─┬ is-builtin-module@1.0.0
remote:        │ │ │ │ │ └── builtin-modules@1.1.1
remote:        │ │ │ │ └─┬ validate-npm-package-license@3.0.1
remote:        │ │ │ │   ├─┬ spdx-correct@1.0.2
remote:        │ │ │ │   │ └── spdx-license-ids@1.2.2
remote:        │ │ │ │   └── spdx-expression-parse@1.0.4
remote:        │ │ │ ├─┬ read-pkg-up@1.0.1
remote:        │ │ │ │ ├─┬ find-up@1.1.2
remote:        │ │ │ │ │ └── path-exists@2.1.0
remote:        │ │ │ │ └─┬ read-pkg@1.1.0
remote:        │ │ │ │   ├─┬ load-json-file@1.1.0
remote:        │ │ │ │   │ ├─┬ parse-json@2.2.0
remote:        │ │ │ │   │ │ └─┬ error-ex@1.3.0
remote:        │ │ │ │   │ │   └── is-arrayish@0.2.1
remote:        │ │ │ │   │ ├── pify@2.3.0
remote:        │ │ │ │   │ └─┬ strip-bom@2.0.0
remote:        │ │ │ │   │   └── is-utf8@0.2.1
remote:        │ │ │ │   └── path-type@1.1.0
remote:        │ │ │ ├─┬ redent@1.0.0
remote:        │ │ │ │ ├── indent-string@2.1.0
remote:        │ │ │ │ └── strip-indent@1.0.1
remote:        │ │ │ └── trim-newlines@1.0.0
remote:        │ │ ├── nan@2.5.1
remote:        │ │ ├─┬ node-gyp@3.5.0
remote:        │ │ │ ├── fstream@1.0.10
remote:        │ │ │ ├── nopt@3.0.6
remote:        │ │ │ └─┬ tar@2.2.1
remote:        │ │ │   └── block-stream@0.0.9
remote:        │ │ ├─┬ npmlog@4.0.2
remote:        │ │ │ ├─┬ are-we-there-yet@1.1.2
remote:        │ │ │ │ └── delegates@1.0.0
remote:        │ │ │ ├── console-control-strings@1.1.0
remote:        │ │ │ ├─┬ gauge@2.7.3
remote:        │ │ │ │ ├── aproba@1.1.1
remote:        │ │ │ │ ├── has-unicode@2.0.1
remote:        │ │ │ │ ├─┬ string-width@1.0.2
remote:        │ │ │ │ │ └── is-fullwidth-code-point@1.0.0
remote:        │ │ │ │ └─┬ wide-align@1.1.0
remote:        │ │ │ │   └─┬ string-width@1.0.2
remote:        │ │ │ │     └── is-fullwidth-code-point@1.0.0
remote:        │ │ │ └── set-blocking@2.0.0
remote:        │ │ ├─┬ sass-graph@2.1.2
remote:        │ │ │ └─┬ yargs@4.8.1
remote:        │ │ │   ├── cliui@3.2.0
remote:        │ │ │   ├─┬ string-width@1.0.2
remote:        │ │ │   │ └── is-fullwidth-code-point@1.0.0
remote:        │ │ │   ├── window-size@0.2.0
remote:        │ │ │   └─┬ yargs-parser@2.4.1
remote:        │ │ │     └── camelcase@3.0.0
remote:        │ │ └─┬ stdout-stream@1.4.0
remote:        │ │   └─┬ readable-stream@2.2.3
remote:        │ │     ├── buffer-shims@1.0.0
remote:        │ │     ├── core-util-is@1.0.2
remote:        │ │     ├── isarray@1.0.0
remote:        │ │     ├── process-nextick-args@1.0.7
remote:        │ │     └── util-deprecate@1.0.2
remote:        │ ├─┬ nopt@4.0.1
remote:        │ │ ├── abbrev@1.1.0
remote:        │ │ └─┬ osenv@0.1.4
remote:        │ │   └── os-homedir@1.0.2
remote:        │ ├─┬ opn@4.0.2
remote:        │ │ └─┬ pinkie-promise@2.0.1
remote:        │ │   └── pinkie@2.0.4
remote:        │ ├─┬ portfinder@1.0.13
remote:        │ │ └── async@1.5.2
remote:        │ ├── postcss-loader@0.13.0
remote:        │ ├── raw-loader@0.5.1
remote:        │ ├── resolve@1.2.0
remote:        │ ├── rimraf@2.6.0
remote:        │ ├── rsvp@3.3.3
remote:        │ ├── sass-loader@4.1.1
remote:        │ ├── script-loader@0.7.0
remote:        │ ├── semver@5.3.0
remote:        │ ├── silent-error@1.0.1
remote:        │ ├─┬ source-map-loader@0.1.6
remote:        │ │ ├── async@0.9.2
remote:        │ │ └── source-map@0.1.43
remote:        │ ├── style-loader@0.13.1
remote:        │ ├─┬ stylus@0.54.5
remote:        │ │ ├── css-parse@1.7.0
remote:        │ │ ├── glob@7.0.6
remote:        │ │ ├── sax@0.5.8
remote:        │ │ └── source-map@0.1.43
remote:        │ ├─┬ stylus-loader@2.5.0
remote:        │ │ └── when@3.6.4
remote:        │ ├─┬ temp@0.8.3
remote:        │ │ ├── os-tmpdir@1.0.2
remote:        │ │ └── rimraf@2.2.8
remote:        │ ├─┬ url-loader@0.5.7
remote:        │ │ └── mime@1.2.11
remote:        │ ├─┬ walk-sync@0.3.1
remote:        │ │ ├── ensure-posix-path@1.0.2
remote:        │ │ └── matcher-collection@1.0.4
remote:        │ ├─┬ webpack@2.2.1
remote:        │ │ ├── acorn@4.0.11
remote:        │ │ ├── acorn-dynamic-import@2.0.1
remote:        │ │ ├── ajv-keywords@1.5.1
remote:        │ │ ├── interpret@1.0.1
remote:        │ │ ├── loader-runner@2.3.0
remote:        │ │ ├── memory-fs@0.4.1
remote:        │ │ ├─┬ node-libs-browser@2.0.0
remote:        │ │ │ ├── assert@1.4.1
remote:        │ │ │ ├─┬ browserify-zlib@0.1.4
remote:        │ │ │ │ └── pako@0.2.9
remote:        │ │ │ ├─┬ buffer@4.9.1
remote:        │ │ │ │ ├── base64-js@1.2.0
remote:        │ │ │ │ └── ieee754@1.1.8
remote:        │ │ │ ├─┬ console-browserify@1.1.0
remote:        │ │ │ │ └── date-now@0.1.4
remote:        │ │ │ ├── constants-browserify@1.0.0
remote:        │ │ │ ├─┬ crypto-browserify@3.11.0
remote:        │ │ │ │ ├─┬ browserify-cipher@1.0.0
remote:        │ │ │ │ │ ├─┬ browserify-aes@1.0.6
remote:        │ │ │ │ │ │ └── buffer-xor@1.0.3
remote:        │ │ │ │ │ ├─┬ browserify-des@1.0.0
remote:        │ │ │ │ │ │ └── des.js@1.0.0
remote:        │ │ │ │ │ └── evp_bytestokey@1.0.0
remote:        │ │ │ │ ├─┬ browserify-sign@4.0.0
remote:        │ │ │ │ │ ├── bn.js@4.11.6
remote:        │ │ │ │ │ ├── browserify-rsa@4.0.1
remote:        │ │ │ │ │ ├─┬ elliptic@6.3.3
remote:        │ │ │ │ │ │ ├── brorand@1.0.7
remote:        │ │ │ │ │ │ └── hash.js@1.0.3
remote:        │ │ │ │ │ └─┬ parse-asn1@5.0.0
remote:        │ │ │ │ │   └── asn1.js@4.9.1
remote:        │ │ │ │ ├── create-ecdh@4.0.0
remote:        │ │ │ │ ├─┬ create-hash@1.1.2
remote:        │ │ │ │ │ ├── cipher-base@1.0.3
remote:        │ │ │ │ │ ├── ripemd160@1.0.1
remote:        │ │ │ │ │ └── sha.js@2.4.8
remote:        │ │ │ │ ├── create-hmac@1.1.4
remote:        │ │ │ │ ├─┬ diffie-hellman@5.0.2
remote:        │ │ │ │ │ └── miller-rabin@4.0.0
remote:        │ │ │ │ ├── pbkdf2@3.0.9
remote:        │ │ │ │ ├── public-encrypt@4.0.0
remote:        │ │ │ │ └── randombytes@2.0.3
remote:        │ │ │ ├── domain-browser@1.1.7
remote:        │ │ │ ├── events@1.1.1
remote:        │ │ │ ├── https-browserify@0.0.1
remote:        │ │ │ ├── os-browserify@0.2.1
remote:        │ │ │ ├── path-browserify@0.0.0
remote:        │ │ │ ├── process@0.11.9
remote:        │ │ │ ├── punycode@1.4.1
remote:        │ │ │ ├── querystring-es3@0.2.1
remote:        │ │ │ ├── stream-browserify@2.0.1
remote:        │ │ │ ├─┬ stream-http@2.6.3
remote:        │ │ │ │ ├── builtin-status-codes@3.0.0
remote:        │ │ │ │ ├── to-arraybuffer@1.0.1
remote:        │ │ │ │ └── xtend@4.0.1
remote:        │ │ │ ├── string_decoder@0.10.31
remote:        │ │ │ ├─┬ timers-browserify@2.0.2
remote:        │ │ │ │ └── setimmediate@1.0.5
remote:        │ │ │ ├── tty-browserify@0.0.0
remote:        │ │ │ ├─┬ url@0.11.0
remote:        │ │ │ │ ├── punycode@1.3.2
remote:        │ │ │ │ └── querystring@0.2.0
remote:        │ │ │ ├─┬ util@0.10.3
remote:        │ │ │ │ └── inherits@2.0.1
remote:        │ │ │ └─┬ vm-browserify@0.0.4
remote:        │ │ │   └── indexof@0.0.1
remote:        │ │ ├─┬ supports-color@3.2.3
remote:        │ │ │ └── has-flag@1.0.0
remote:        │ │ ├── tapable@0.2.6
remote:        │ │ ├─┬ uglify-js@2.7.5
remote:        │ │ │ ├── async@0.2.10
remote:        │ │ │ ├── uglify-to-browserify@1.0.2
remote:        │ │ │ └─┬ yargs@3.10.0
remote:        │ │ │   ├── camelcase@1.2.1
remote:        │ │ │   ├─┬ cliui@2.1.0
remote:        │ │ │   │ ├─┬ center-align@0.1.3
remote:        │ │ │   │ │ ├─┬ align-text@0.1.4
remote:        │ │ │   │ │ │ ├── longest@1.0.1
remote:        │ │ │   │ │ │ └── repeat-string@1.6.1
remote:        │ │ │   │ │ └── lazy-cache@1.0.4
remote:        │ │ │   │ ├── right-align@0.1.3
remote:        │ │ │   │ └── wordwrap@0.0.2
remote:        │ │ │   └── window-size@0.1.0
remote:        │ │ ├── watchpack@1.2.1
remote:        │ │ └─┬ yargs@6.6.0
remote:        │ │   ├── camelcase@3.0.0
remote:        │ │   ├─┬ cliui@3.2.0
remote:        │ │   │ └─┬ wrap-ansi@2.1.0
remote:        │ │   │   └─┬ string-width@1.0.2
remote:        │ │   │     └── is-fullwidth-code-point@1.0.0
remote:        │ │   ├─┬ os-locale@1.4.0
remote:        │ │   │ └─┬ lcid@1.0.0
remote:        │ │   │   └── invert-kv@1.0.0
remote:        │ │   ├── require-directory@2.1.1
remote:        │ │   ├── require-main-filename@1.0.1
remote:        │ │   ├─┬ string-width@1.0.2
remote:        │ │   │ ├── code-point-at@1.1.0
remote:        │ │   │ └─┬ is-fullwidth-code-point@1.0.0
remote:        │ │   │   └── number-is-nan@1.0.1
remote:        │ │   ├── which-module@1.0.0
remote:        │ │   ├── y18n@3.2.1
remote:        │ │   └── yargs-parser@4.2.1
remote:        │ ├─┬ webpack-dev-server@2.3.0
remote:        │ │ ├── ansi-html@0.0.7
remote:        │ │ ├─┬ chokidar@1.6.1
remote:        │ │ │ ├─┬ anymatch@1.3.0
remote:        │ │ │ │ └── arrify@1.0.1
remote:        │ │ │ ├── async-each@1.0.1
remote:        │ │ │ ├── glob-parent@2.0.0
remote:        │ │ │ ├─┬ is-binary-path@1.0.1
remote:        │ │ │ │ └── binary-extensions@1.8.0
remote:        │ │ │ ├─┬ is-glob@2.0.1
remote:        │ │ │ │ └── is-extglob@1.0.0
remote:        │ │ │ └─┬ readdirp@2.1.0
remote:        │ │ │   └── set-immediate-shim@1.0.1
remote:        │ │ ├─┬ compression@1.6.2
remote:        │ │ │ ├─┬ accepts@1.3.3
remote:        │ │ │ │ └── negotiator@0.6.1
remote:        │ │ │ ├── bytes@2.3.0
remote:        │ │ │ ├── compressible@2.0.9
remote:        │ │ │ ├─┬ debug@2.2.0
remote:        │ │ │ │ └── ms@0.7.1
remote:        │ │ │ ├── on-headers@1.0.1
remote:        │ │ │ └── vary@1.1.0
remote:        │ │ ├── connect-history-api-fallback@1.3.0
remote:        │ │ ├─┬ express@4.14.1
remote:        │ │ │ ├── array-flatten@1.1.1
remote:        │ │ │ ├── content-disposition@0.5.2
remote:        │ │ │ ├── content-type@1.0.2
remote:        │ │ │ ├── cookie@0.3.1
remote:        │ │ │ ├── cookie-signature@1.0.6
remote:        │ │ │ ├─┬ debug@2.2.0
remote:        │ │ │ │ └── ms@0.7.1
remote:        │ │ │ ├── depd@1.1.0
remote:        │ │ │ ├── encodeurl@1.0.1
remote:        │ │ │ ├── escape-html@1.0.3
remote:        │ │ │ ├── etag@1.7.0
remote:        │ │ │ ├─┬ finalhandler@0.5.1
remote:        │ │ │ │ ├─┬ debug@2.2.0
remote:        │ │ │ │ │ └── ms@0.7.1
remote:        │ │ │ │ ├── statuses@1.3.1
remote:        │ │ │ │ └── unpipe@1.0.0
remote:        │ │ │ ├── fresh@0.3.0
remote:        │ │ │ ├── merge-descriptors@1.0.1
remote:        │ │ │ ├── methods@1.1.2
remote:        │ │ │ ├─┬ on-finished@2.3.0
remote:        │ │ │ │ └── ee-first@1.1.1
remote:        │ │ │ ├── parseurl@1.3.1
remote:        │ │ │ ├── path-to-regexp@0.1.7
remote:        │ │ │ ├─┬ proxy-addr@1.1.3
remote:        │ │ │ │ ├── forwarded@0.1.0
remote:        │ │ │ │ └── ipaddr.js@1.2.0
remote:        │ │ │ ├── qs@6.2.0
remote:        │ │ │ ├─┬ send@0.14.2
remote:        │ │ │ │ ├─┬ debug@2.2.0
remote:        │ │ │ │ │ └── ms@0.7.1
remote:        │ │ │ │ └── destroy@1.0.4
remote:        │ │ │ ├── serve-static@1.11.2
remote:        │ │ │ ├─┬ type-is@1.6.14
remote:        │ │ │ │ └── media-typer@0.3.0
remote:        │ │ │ └── utils-merge@1.0.0
remote:        │ │ ├── html-entities@1.2.0
remote:        │ │ ├─┬ http-proxy-middleware@0.17.3
remote:        │ │ │ ├─┬ http-proxy@1.16.2
remote:        │ │ │ │ ├── eventemitter3@1.2.0
remote:        │ │ │ │ └── requires-port@1.0.0
remote:        │ │ │ ├─┬ is-glob@3.1.0
remote:        │ │ │ │ └── is-extglob@2.1.1
remote:        │ │ │ └─┬ micromatch@2.3.11
remote:        │ │ │   ├─┬ arr-diff@2.0.0
remote:        │ │ │   │ └── arr-flatten@1.0.1
remote:        │ │ │   ├── array-unique@0.2.1
remote:        │ │ │   ├─┬ braces@1.8.5
remote:        │ │ │   │ ├─┬ expand-range@1.8.2
remote:        │ │ │   │ │ └─┬ fill-range@2.2.3
remote:        │ │ │   │ │   ├── is-number@2.1.0
remote:        │ │ │   │ │   ├── isobject@2.1.0
remote:        │ │ │   │ │   └── randomatic@1.1.6
remote:        │ │ │   │ ├── preserve@0.2.0
remote:        │ │ │   │ └── repeat-element@1.1.2
remote:        │ │ │   ├─┬ expand-brackets@0.1.5
remote:        │ │ │   │ └── is-posix-bracket@0.1.1
remote:        │ │ │   ├── extglob@0.3.2
remote:        │ │ │   ├── filename-regex@2.0.0
remote:        │ │ │   ├─┬ kind-of@3.1.0
remote:        │ │ │   │ └── is-buffer@1.1.4
remote:        │ │ │   ├── normalize-path@2.0.1
remote:        │ │ │   ├─┬ object.omit@2.0.1
remote:        │ │ │   │ ├─┬ for-own@0.1.4
remote:        │ │ │   │ │ └── for-in@0.1.6
remote:        │ │ │   │ └── is-extendable@0.1.1
remote:        │ │ │   ├─┬ parse-glob@3.0.4
remote:        │ │ │   │ ├── glob-base@0.3.0
remote:        │ │ │   │ └── is-dotfile@1.0.2
remote:        │ │ │   └─┬ regex-cache@0.4.3
remote:        │ │ │     ├── is-equal-shallow@0.1.3
remote:        │ │ │     └── is-primitive@2.0.0
remote:        │ │ ├─┬ serve-index@1.8.0
remote:        │ │ │ ├── batch@0.5.3
remote:        │ │ │ ├─┬ debug@2.2.0
remote:        │ │ │ │ └── ms@0.7.1
remote:        │ │ │ └─┬ http-errors@1.5.1
remote:        │ │ │   └── setprototypeof@1.0.2
remote:        │ │ ├─┬ sockjs@0.3.18
remote:        │ │ │ ├─┬ faye-websocket@0.10.0
remote:        │ │ │ │ └─┬ websocket-driver@0.6.5
remote:        │ │ │ │   └── websocket-extensions@0.1.1
remote:        │ │ │ └── uuid@2.0.3
remote:        │ │ ├─┬ sockjs-client@1.1.1
remote:        │ │ │ ├─┬ eventsource@0.1.6
remote:        │ │ │ │ └─┬ original@1.0.0
remote:        │ │ │ │   └── url-parse@1.0.5
remote:        │ │ │ ├── faye-websocket@0.11.1
remote:        │ │ │ ├── json3@3.3.2
remote:        │ │ │ └─┬ url-parse@1.1.8
remote:        │ │ │   └── querystringify@0.0.4
remote:        │ │ ├─┬ spdy@3.4.4
remote:        │ │ │ ├── handle-thing@1.2.5
remote:        │ │ │ ├── http-deceiver@1.2.7
remote:        │ │ │ ├── select-hose@2.0.0
remote:        │ │ │ └─┬ spdy-transport@2.0.18
remote:        │ │ │   ├── hpack.js@2.1.6
remote:        │ │ │   ├── obuf@1.1.1
remote:        │ │ │   └─┬ wbuf@1.7.2
remote:        │ │ │     └── minimalistic-assert@1.0.0
remote:        │ │ └─┬ yargs@6.6.0
remote:        │ │   ├── camelcase@3.0.0
remote:        │ │   ├── cliui@3.2.0
remote:        │ │   ├─┬ string-width@1.0.2
remote:        │ │   │ └── is-fullwidth-code-point@1.0.0
remote:        │ │   └── yargs-parser@4.2.1
remote:        │ └── webpack-merge@2.6.1
remote:        ├─┬ @angular/compiler-cli@2.4.8
remote:        │ ├── minimist@1.2.0
remote:        │ └── reflect-metadata@0.1.10
remote:        ├── @types/jasmine@2.5.38
remote:        ├── @types/node@6.0.63
remote:        └── typescript@2.0.10
remote:        
remote:        Running heroku-postbuild
remote:        
remote:        > gadai-frontend@0.0.0 heroku-postbuild /tmp/build_c7338dda5882ea9895288e3d1b9dd570
remote:        > ng build
remote:        
remote:  10% building modules 5/5 modules 0 active(node:236) DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56
remote: parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
       Hash: c04ef1e11acaf945fbd0
remote:        Time: 14151ms
remote:        chunk    {0} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 153 kB {4} [initial] [rendered]
remote:        chunk    {1} main.bundle.js, main.bundle.js.map (main) 47 kB {3} [initial] [rendered]
remote:        chunk    {2} styles.bundle.js, styles.bundle.js.map (styles) 131 kB {4} [initial] [rendered]
remote:        chunk    {3} vendor.bundle.js, vendor.bundle.js.map (vendor) 3.45 MB [initial] [rendered]
remote:        chunk    {4} inline.bundle.js, inline.bundle.js.map (inline) 0 bytes [entry] [rendered]
remote:
remote: -----> Caching build
remote:        Clearing previous node cache
remote:        Saving 2 cacheDirectories (default):
remote:        - node_modules
remote:        - bower_components (nothing to cache)
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 37.3M
remote: -----> Launching...
remote:        Released v4
remote:        https://gadai-angular2.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy.... done.
To https://git.heroku.com/gadai-angular2.git
   c0a9a7e..3a38690  3a3869012ca14d92cb38df8af86513431ee53ca4 -> master
```

Kita bisa browse aplikasinya di `https://gadai-angular2.herokuapp.com/`.

Bila ada error, kita bisa lihat logs aplikasinya.

```
heroku logs --tail
```

Outputnya seperti ini

```
2017-02-22T08:41:52.021570+00:00 app[api]: Release v4 created by user endy.muhardin@gmail.com
2017-02-22T08:41:51.856061+00:00 app[api]: Deploy 3a38690 by user endy.muhardin@gmail.com
2017-02-22T08:41:52.081430+00:00 heroku[web.1]: State changed from crashed to starting
2017-02-22T08:40:43.000000+00:00 app[api]: Build succeeded
2017-02-22T08:41:57.312765+00:00 heroku[web.1]: Starting process with command `npm start`
2017-02-22T08:42:00.505116+00:00 app[web.1]:
2017-02-22T08:42:00.505138+00:00 app[web.1]: > http-server dist/
2017-02-22T08:42:00.505138+00:00 app[web.1]:
2017-02-22T08:42:00.505137+00:00 app[web.1]: > gadai-frontend@0.0.0 start /app
2017-02-22T08:42:00.804658+00:00 app[web.1]: Starting up http-server, serving dist/
2017-02-22T08:42:00.804669+00:00 app[web.1]: Available on:
2017-02-22T08:42:00.804676+00:00 app[web.1]:   http://127.0.0.1:42332
2017-02-22T08:42:00.804677+00:00 app[web.1]:   http://172.18.3.158:42332
2017-02-22T08:42:00.804678+00:00 app[web.1]: Hit CTRL-C to stop the server
2017-02-22T08:42:01.150380+00:00 heroku[web.1]: State changed from starting to up
2017-02-22T08:42:01.748020+00:00 heroku[router]: at=info method=GET path="/" host=gadai-angular2.herokuapp.com request_id=dcd39066-43f0-4f41-961e-bcfa97cf5968 fwd="119.18.159.66" dyno=web.1 connect=0ms service=29ms status=200 bytes=900
```
