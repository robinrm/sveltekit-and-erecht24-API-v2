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
		client: {"start":"_app/immutable/entry/start.BMC3ohDs.js","app":"_app/immutable/entry/app.CZ2REtEy.js","imports":["_app/immutable/entry/start.BMC3ohDs.js","_app/immutable/chunks/entry.D2rsygvg.js","_app/immutable/chunks/runtime.s4LxpMgD.js","_app/immutable/entry/app.CZ2REtEy.js","_app/immutable/chunks/runtime.s4LxpMgD.js","_app/immutable/chunks/render.Cx1vX2M6.js","_app/immutable/chunks/store.BV25xDdQ.js","_app/immutable/chunks/svelte-head.BL-8Fur5.js","_app/immutable/chunks/disclose-version.CzQY0kcY.js","_app/immutable/chunks/props.Bqh0rTSG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D1oKyPmT.js')),
			__memo(() => import('./chunks/1-Ds07YUhv.js')),
			__memo(() => import('./chunks/3-D9AKOCAO.js')),
			__memo(() => import('./chunks/4-E0u3hEYE.js')),
			__memo(() => import('./chunks/5-D8Huu1vz.js')),
			__memo(() => import('./chunks/6-B8Iq51XT.js'))
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
