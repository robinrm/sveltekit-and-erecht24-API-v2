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
		client: {"start":"_app/immutable/entry/start.BfxzV5DN.js","app":"_app/immutable/entry/app.GzaOuky8.js","imports":["_app/immutable/entry/start.BfxzV5DN.js","_app/immutable/chunks/entry.BhWV3RhV.js","_app/immutable/chunks/runtime.s4LxpMgD.js","_app/immutable/entry/app.GzaOuky8.js","_app/immutable/chunks/runtime.s4LxpMgD.js","_app/immutable/chunks/render.Cx1vX2M6.js","_app/immutable/chunks/store.BV25xDdQ.js","_app/immutable/chunks/svelte-head.BL-8Fur5.js","_app/immutable/chunks/disclose-version.CzQY0kcY.js","_app/immutable/chunks/props.Bqh0rTSG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-ByGBq0tf.js')),
			__memo(() => import('./chunks/1-B_JE-d35.js')),
			__memo(() => import('./chunks/3-DatKtqQz.js')),
			__memo(() => import('./chunks/4-B5HPwzdK.js')),
			__memo(() => import('./chunks/5-CRRyHV0H.js')),
			__memo(() => import('./chunks/6-Y2jSL2F9.js'))
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
