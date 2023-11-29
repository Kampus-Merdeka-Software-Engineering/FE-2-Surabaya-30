// import library http
// harus masuk folder js dulu kalo gabisa di running

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ini adalah halaman utama');
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ini adalah halaman tentang kita');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Halaman tidak ditemukan');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
