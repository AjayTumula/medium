import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Circle } from "./Circle";

interface BlogCardProps {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard =({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
                <div className="flex">
                        <Avatar size={"small"} name={"ajay"}/>
                    <div className="flex justify-center flex-col font-extralight pl-2 text-sm">{authorName}</div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className="flex justify-center flex-col pl-2 font-thin text-slate-300 text-sm">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2"> 
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-400 text-sm font-thin pt-4">
                    {`${Math.ceil(content.length /100)} minutes(s) read`}
                </div>
        </div>
    </Link>
}