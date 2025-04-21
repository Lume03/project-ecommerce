"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// config/server.ts
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'), // Asegura que Strapi esté accesible desde cualquier host
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS'),
    },
    allowedHosts: [
        'rnzfp-38-25-26-75.a.free.pinggy.link', // Agrega el dominio de Pinggy aquí
        'localhost', // Asegúrate de permitir localhost también
    ],
});
