## Generall

this is only an example project to show the usage of the erecht24 API version 2.

> You can only get the imprint and privacy and display them on your page. There is no sync or push functionality implemented in this scripts. Also see the information in the landingpage!

For more details on how to use this API see the documentation on `https://api-docs.e-recht24.de`

## Installing the project

to install the project use

```bash
npm install
```

## Testing the project

to test the project use

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

> add your project key from erecht24 to apisettings.ts and disable test mode to display your data.

## Building the project

to create a production ready version of the project use

```bash
npm run build
```

you can preview the production build by using

```bash
npm run preview
```

> to deploy the project, you may need to install an different [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
