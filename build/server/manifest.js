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
		client: {start:"_app/immutable/entry/start.CzuOH0mD.js",app:"_app/immutable/entry/app.D78l_wmf.js",imports:["_app/immutable/entry/start.CzuOH0mD.js","_app/immutable/chunks/CiLTIPUC.js","_app/immutable/chunks/CaePOEcs.js","_app/immutable/chunks/SG3_qa5J.js","_app/immutable/entry/app.D78l_wmf.js","_app/immutable/chunks/CaePOEcs.js","_app/immutable/chunks/Cu8SJ2k_.js","_app/immutable/chunks/BvgXXCUp.js","_app/immutable/chunks/DdFkB--J.js","_app/immutable/chunks/SG3_qa5J.js","_app/immutable/chunks/R3ihUTx2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CyRAO22g.js')),
			__memo(() => import('./chunks/1-Dvxf6Ek6.js')),
			__memo(() => import('./chunks/3-ktIsH3ia.js')),
			__memo(() => import('./chunks/4-DJPoRvOt.js')),
			__memo(() => import('./chunks/5-Bl5gpmWm.js')),
			__memo(() => import('./chunks/6-Cuj177ja.js'))
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
