declare module 'koa-static' {
    export default function(arg: string, opts?: { maxage: number }): import('koa').Middleware
}
