import { cn } from "@/lib/utils";
import Image from "next/image";

type PostImageCardProps = {
    image: string;
    title: string;
}

const PostImageCard = ({title, image}: PostImageCardProps) => {
    return <figure
    className={cn(
      "relative w-52 h-52 overflow-hidden rounded-xl border p-4",
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
    )}
  >
    <div className="absolute inset-0">
      <Image data-type="link"
             data-text="Open"
             loading={'lazy'}
             sizes="208px"
             priority={false}
             className="object-contain object-center"
             fill
             alt=""
             unoptimized={true}
             src={image} />
    </div>
    <blockquote className="mt-2 text-sm">{title}</blockquote>
  </figure>
}

export default PostImageCard;