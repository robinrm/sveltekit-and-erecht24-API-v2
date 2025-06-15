import helmet from 'sveltekit-helmet';

const handle = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [
        "'self'",
        "https://api.e-recht24.de/v2/imprint",
        "https://api.e-recht24.de/v2/privacyPolicy"
      ],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        // Allow SvelteKit hot reload
        "https://api.e-recht24.de/v2/imprint",
        "https://api.e-recht24.de/v2/privacyPolicy"
      ],
      objectSrc: ["'self'"]
    }
  }
});

export { handle };
//# sourceMappingURL=hooks.server-DSWOt5FP.js.map
