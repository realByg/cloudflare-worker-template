# 📝 `cloudflare-worker-template`
### A Cloudflare worker template

#### 💼 Useful docs
* wrangler: https://developers.cloudflare.com/workers/cli-wrangler
* cfworker: https://github.com/cfworker/cfworker

#### 📚 Examples
* worker-typescript-template: https://github.com/cloudflare/worker-typescript-template
* TypeScript-Babel-Starter: https://github.com/microsoft/TypeScript-Babel-Starter

#### 🧱 Usage
```
$ wrangler generate my-project https://github.com/zayabighead/cloudflare-worker-template
```

#### 🤨 Limitations
* Some Node.js built-in modules won't be available, you can set webpack `node` option to use some of them.
    * available modules: https://github.com/webpack/node-libs-browser/blob/master/README.md
    * webpack configuration: https://v4.webpack.js.org/configuration/node/
* Other runtime limitations for Cloudflare workers: https://developers.cloudflare.com/workers/runtime-apis/web-standards