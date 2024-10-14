// Schema for signup
const signupSchema = zod.object({
    username: zod.string().email(),
    password:zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string()
});
// Signup route
router.post('/signup')


// Schema for signin
const signinSchema = zod.object({
    username: zod.string().email(),
    password:zod.string().min(6)
})
// Signin route
router.post('/signin')


const updateSchema = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});
// Update user route
router.put('/')


// Bulk user search route
router.get('/bulk)


// to get account balance
router.get('/balance')

// to send money to others
router.post('/transfer')