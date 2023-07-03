import React from "react";
import Layout from "../Layout";
import ShopByCategory from "../components/ShopByCategory";
import MarketingBanner from "../components/Marketing_banner";
import LatestProducts from "../components/Latest_products";


function HomePage(){
    return(
        <Layout>
            <MarketingBanner/>
            <ShopByCategory/>
            <LatestProducts/>
        </Layout>
    )
}

export default HomePage