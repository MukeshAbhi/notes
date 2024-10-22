import { Hono } from 'hono'

const app = new Hono()

// body, headers, queery parameters, middlewares, connecting to a database 


//middleware
app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
})




app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})




app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/123', (c) => {
  return c.json({
    message : "post hi"
  })
})

export default app
