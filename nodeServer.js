const http = require('http') // http communication module
const fs = require('fs') // file system module

const server = http.createServer((req, res) => {
  /**
   * Home Page
   */
  console.log(`A request was made to ${req.url}`)
  if(req.url === '/') { // path requested
    res.writeHead(200, {'content-type': 'text/html'})
    const homePageHtml = fs.readFileSync('node.html') // get contents of file
    res.write(homePageHtml)
    res.end()
  } else { // 404 for everything else
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h4>404: Page not found</h4>')
    res.end()
  }
})

server.listen(3000)
