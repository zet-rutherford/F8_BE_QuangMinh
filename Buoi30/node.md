* Các gói cần có
passport
passport-local
* import passport và passport-local trong app.js
`const passport = require("passport")`
`const LocalStrategy = require("passport-local").Strategy`
* config passport
`app.use(passport.initialize())
app.use(passport.session())`
Lưu ý cần phải thiết lập trước session
* tạo folder passport
tạo file localPassport (phân loại theo dạng đăng nhập ví dụ như GooglePassport)
import passport và LocalStrategy
```javascript

new LocalStrategy(function(username,password,done){

})
```