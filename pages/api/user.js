export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({name: 'John Doe'}))
}
// http://localhost:3000/api/user