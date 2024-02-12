const express=require('express');
require("dotenv").config()
const app=express();
const port =process.env.PORT
const {connection}=require('./db')
const {sliderRouter}=require("./routers/SliderRoute");
const {categoryRoute}=require('./routers/CategoryRoute')
const {shopRoute}=require('./routers/shopRoute');
const {trendingRoute}=require('./routers/TrendingRoute');
const {productRoute}=require('./routers/ProductRoute');
const {userRoute}=require('./routers/UserRoute')
const {threadRoute}=require('./routers/threadRoute')
const {networthyRouter}=require('./routers/NetworthyRouter')
const {netsliderRouter}=require('./routers/netsliderRouter')
const {bannerRoute}=require('./routers/BannerRoute')


const cors=require('cors')
app.use(express.json());
app.use(cors({
    origin:"*"
}))
app.use(sliderRouter)
app.use(categoryRoute)
app.use(shopRoute)
app.use(trendingRoute)
app.use(productRoute)
app.use("/users",userRoute)
app.use('/thread',threadRoute)
app.use('/networthy',networthyRouter)
app.use('/sliderdata1',netsliderRouter)
app.use('/banner',bannerRoute)
app.get('/',(req,res)=>{
    try {
        res.status(200).json({msg:"welcome you are on Home page"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
app.get('/demo',(req,res)=>{
    try {
        res.status(200).json({msg:"welcome you are on demo page"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

app.listen(port,async (req,res)=>{
    try {
        await connection
        console.log(`your server is running on port ${port}`)
    } catch (error) {
        console.log(error.message)
    }
})