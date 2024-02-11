import BlogCard from "./blog-card";

const RecentRecipes: React.FC = () => {
    return (
    <>
        <div className="flex justify-center items-center bg-white-text gap-32 pt-8">
            <div>
                <BlogCard />
            </div>
            <div>
                <BlogCard />
            </div>
            <div>
                <BlogCard />
            </div>
        </div>
        <div className="flex justify-center items-center bg-white-text py-8">
            <button className="w-48 h-10 bg-blue-text text-white-text rounded-md italic font-black">
                More Recipes
            </button>
        </div>
    </>
    )
}

export default RecentRecipes;