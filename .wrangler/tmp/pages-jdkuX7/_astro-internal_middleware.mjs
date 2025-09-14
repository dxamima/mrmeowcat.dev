globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_5JY9kFMV.mjs';
import './chunks/astro/server_BWZSO3ey.mjs';
import { s as sequence } from './chunks/index_CP6Ed_uI.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
