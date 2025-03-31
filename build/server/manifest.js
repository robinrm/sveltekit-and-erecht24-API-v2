const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.koq5s7V-.js",app:"_app/immutable/entry/app.BxnIeZYe.js",imports:["_app/immutable/entry/start.koq5s7V-.js","_app/immutable/chunks/CTVDkcWg.js","_app/immutable/chunks/BbrY2rfu.js","_app/immutable/chunks/Dnln1GsD.js","_app/immutable/entry/app.BxnIeZYe.js","_app/immutable/chunks/BbrY2rfu.js","_app/immutable/chunks/BruzhX4F.js","_app/immutable/chunks/CjyUIBZi.js","_app/immutable/chunks/d1PZQcUy.js","_app/immutable/chunks/DdaFM6B8.js","_app/immutable/chunks/cwAgvQ1A.js","_app/immutable/chunks/Dnln1GsD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BDGPg1pF.js')),
			__memo(() => import('./chunks/1-DE1WMSQ7.js')),
			__memo(() => import('./chunks/3-CbiIMoPY.js')),
			__memo(() => import('./chunks/4-DYavqVCw.js')),
			__memo(() => import('./chunks/5-DcYY0bau.js')),
			__memo(() => import('./chunks/6-bImpHJ38.js')),
			__memo(() => import('./chunks/7-9fcizJea.js'))
		],
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
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
