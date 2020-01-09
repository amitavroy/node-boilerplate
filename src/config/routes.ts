export default [
  {url: '/', callBack: (req, resp, next) => {
    console.log('Inside login callback')
    resp.json("Hi from routes")
  }},
  {url: '/home', callBack: (req, resp, next) => {
    console.log('Inside home callback')
    resp.json("Hi from routes Home")
  }},
  {url: '/login', callBack: (req, resp, next) => {
    console.log('Inside / callback')
    resp.json("Login")
  }}
]
