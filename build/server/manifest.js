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
		client: {start:"_app/immutable/entry/start.FTVla4SI.js",app:"_app/immutable/entry/app.YJMAbP8h.js",imports:["_app/immutable/entry/start.FTVla4SI.js","_app/immutable/chunks/D1j6As27.js","_app/immutable/chunks/D65nL8m3.js","_app/immutable/chunks/DSze3bgh.js","_app/immutable/entry/app.YJMAbP8h.js","_app/immutable/chunks/D65nL8m3.js","_app/immutable/chunks/CutkM_hP.js","_app/immutable/chunks/lwbMhMiE.js","_app/immutable/chunks/CIoTbYV3.js","_app/immutable/chunks/BntLBAS7.js","_app/immutable/chunks/NcKODrK9.js","_app/immutable/chunks/Blc4UyLb.js","_app/immutable/chunks/DSze3bgh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-0elKXTec.js')),
			__memo(() => import('./chunks/1-CHGVNkJK.js')),
			__memo(() => import('./chunks/3-C2Tdnzp-.js')),
			__memo(() => import('./chunks/4-B0S8njZ8.js')),
			__memo(() => import('./chunks/5-POws3srq.js')),
			__memo(() => import('./chunks/6-ByeSCGSX.js'))
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
