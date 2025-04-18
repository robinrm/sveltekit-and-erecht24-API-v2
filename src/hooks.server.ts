import helmet from "sveltekit-helmet";

// With default helmet options
// export const handle = helmet();

// With custom helmet options
export const handle = helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: [
                "'self'",
                "https://api.e-recht24.de/v2/imprint",
                "https://api.e-recht24.de/v2/privacyPolicy",
            ],
            scriptSrc: [
                "'self'",
                "'unsafe-inline'", // Allow SvelteKit hot reload
                "https://api.e-recht24.de/v2/imprint",
                "https://api.e-recht24.de/v2/privacyPolicy",
            ],
            objectSrc: ["'self'"],
        },
    },
});

// Works with other middlewares
// import { sequence } from "@sveltejs/kit/hooks";
// export const handle = sequence(helmet(), fooMiddleware, barMiddleware);
