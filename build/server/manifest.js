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
		client: {"start":"_app/immutable/entry/start.BuFrAeWo.js","app":"_app/immutable/entry/app.CNXGk8Ti.js","imports":["_app/immutable/entry/start.BuFrAeWo.js","_app/immutable/chunks/entry.ChGHFnb5.js","_app/immutable/chunks/runtime.s4LxpMgD.js","_app/immutable/entry/app.CNXGk8Ti.js","_app/immutable/chunks/runtime.s4LxpMgD.js","_app/immutable/chunks/render.Cx1vX2M6.js","_app/immutable/chunks/store.BV25xDdQ.js","_app/immutable/chunks/svelte-head.BL-8Fur5.js","_app/immutable/chunks/disclose-version.CzQY0kcY.js","_app/immutable/chunks/props.Bqh0rTSG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BJ52iC6h.js')),
			__memo(() => import('./chunks/1-C_1oQRCI.js')),
			__memo(() => import('./chunks/3-DVTZOJ_0.js')),
			__memo(() => import('./chunks/4-Csr-1oF0.js')),
			__memo(() => import('./chunks/5-DMi9dIEv.js')),
			__memo(() => import('./chunks/6-C5NRJ1_4.js'))
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
