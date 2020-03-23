/*
const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use((req, res, next) => {
  res.setHeader('Authorization', '123456789')
  res.cookie('Authorization', 'abcdefghijklmn')
  next()
})

server.use(router)
server.listen(3003, () => {
  console.log('http://localhost:3003')
})
*/
module.exports = (req, res, next) => {
  const headersToExpose      = [ 'Authorization' ];
  const currentExposedHeaders = res.get('Access-Control-Expose-Headers')
  if ( currentExposedHeaders ) {
    res.header( 'Access-Control-Expose-Headers', headersToExpose.concat( currentExposedHeaders.split(',') ).join( ',' ) )
  } else {
    res.header( 'Access-Control-Expose-Headers', headersToExpose.join( ',' ) );
  }
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Authorization')
  //res.header('Access-Control-Expose-Headers', '*')
  res.header('Authorization', 'abcdefg')
  next()
}
