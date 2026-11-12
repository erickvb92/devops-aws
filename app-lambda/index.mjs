   // adaptador para ALB: añade la frase al statusDescription ("200 OK").
   // sin tocar el codigo original de la aplicacion queda intacto ya que renombre el archivo en app.mjs.
   import { handler as app } from './app.mjs';

   const frases = { 200: 'OK', 404: 'Not Found' };

   export const handler = async (event, context) => {
     const respuesta = await app(event, context);
     return {
       ...respuesta,
       statusDescription: `${respuesta.statusCode} ${frases[respuesta.statusCode] ?? 'Status'}`,
     };
   };