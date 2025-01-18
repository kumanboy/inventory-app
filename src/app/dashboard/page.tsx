"use client"
import CardPopularProducts from "@/app/dashboard/CardPopularProducts";
import CardSalesSummary from "@/app/dashboard/CardSalesSummary";
import CardPurchaseSummary from "@/app/dashboard/CardPurchaseSummary";
import CardExpensesSummary from "@/app/dashboard/CardExpensesSummary";

const Dashboard = () => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows`}>
            <CardPopularProducts/>
            <CardSalesSummary/>
            <CardPurchaseSummary/>
            <CardExpensesSummary/>
            <div className={`row-span-1 xl:row-span-2`}/>
            <div className={`row-span-1 xl:row-span-2`}/>
            <div className={`row-span-1 xl:row-span-2`}/>
        </div>
    )
}
export default Dashboard

