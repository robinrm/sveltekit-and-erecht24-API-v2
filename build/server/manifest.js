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
		client: {start:"_app/immutable/entry/start.DOhKCv0D.js",app:"_app/immutable/entry/app.rAekvw_9.js",imports:["_app/immutable/entry/start.DOhKCv0D.js","_app/immutable/chunks/C8E--EF8.js","_app/immutable/chunks/DyjbJ_Nr.js","_app/immutable/chunks/Dw38WHNR.js","_app/immutable/entry/app.rAekvw_9.js","_app/immutable/chunks/DyjbJ_Nr.js","_app/immutable/chunks/DkCPv214.js","_app/immutable/chunks/zKfbbJIh.js","_app/immutable/chunks/DbDjbU46.js","_app/immutable/chunks/DoJ4FQ80.js","_app/immutable/chunks/ozF4whhL.js","_app/immutable/chunks/DcUZX_cE.js","_app/immutable/chunks/Dw38WHNR.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DuKQTFyv.js')),
			__memo(() => import('./chunks/1-qAEmFWuW.js')),
			__memo(() => import('./chunks/3-TXqGd07K.js')),
			__memo(() => import('./chunks/4-CMI-nxxh.js')),
			__memo(() => import('./chunks/5-BO8zeaw7.js')),
			__memo(() => import('./chunks/6-CcToIMxj.js'))
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
