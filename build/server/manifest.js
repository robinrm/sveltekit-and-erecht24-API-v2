const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apidata/imprint.json","apidata/lastpull-imprint.log","apidata/lastpull-privacy.log","apidata/privacy.json","favicon.png"]),
	mimeTypes: {".json":"application/json",".log":"text/plain",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Copu1IqN.js",app:"_app/immutable/entry/app.BaV5XZBZ.js",imports:["_app/immutable/entry/start.Copu1IqN.js","_app/immutable/chunks/BHrqZzbu.js","_app/immutable/chunks/DSIQN05n.js","_app/immutable/chunks/CxaBVJg1.js","_app/immutable/entry/app.BaV5XZBZ.js","_app/immutable/chunks/DSIQN05n.js","_app/immutable/chunks/XtHQpmrf.js","_app/immutable/chunks/B2YaYGee.js","_app/immutable/chunks/Bl9b3Z-2.js","_app/immutable/chunks/CxaBVJg1.js","_app/immutable/chunks/D1cgDPj7.js","_app/immutable/chunks/hlBhQlEl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CfoQGNNt.js')),
			__memo(() => import('./chunks/1-B4eZ0UyU.js')),
			__memo(() => import('./chunks/3-gRDtvYo_.js')),
			__memo(() => import('./chunks/4-BKnvY1gW.js')),
			__memo(() => import('./chunks/5-B-b3J2sc.js')),
			__memo(() => import('./chunks/6-4f6eXE3j.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/imprint_DE",
				pattern: /^\/imprint_DE\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/imprint_EN",
				pattern: /^\/imprint_EN\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/privacy_DE",
				pattern: /^\/privacy_DE\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/privacy_EN",
				pattern: /^\/privacy_EN\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
