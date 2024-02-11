import Image from "next/image"

const BlogCard: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-blue-bg border-blue-text border-2 w-60 rounded-md">
            <div className="pt-4">
                <Image
                    src="/food.webp"
                    alt="Food Image"
                    width={150}
                    height={150}
                    className="rounded-md"
                />
            </div>
            <div className="text-black-text pt-4 italic font-bold">Stuffed Stuff</div>
            <div className="text-black-text text-center pt-2">Stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff</div>
        </div>
    )
}

export default BlogCard