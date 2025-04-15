import helmet from "sveltekit-helmet";

// With default helmet options
// export const handle = helmet();

// With custom helmet options
export const handle = helmet({
    contentSecurityPolicy: {
        directives: {
            scriptSrc: [
                "'self'",
                "'unsafe-inline'", // Allow SvelteKit hot reload
            ],
        },
    },
});

// Works with other middlewares
// import { sequence } from "@sveltejs/kit/hooks";
// export const handle = sequence(helmet(), fooMiddleware, barMiddleware);