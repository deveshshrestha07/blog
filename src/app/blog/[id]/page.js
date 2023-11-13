import client from "@/sanity/client";
import {PortableText} from '@portabletext/react'


const BlogContext = async(context) =>{
    const id = context.params.id;
    console.log(id);

    const res = await client.fetch(`*[_type == "blog" && slug.current=="${id}" ]{blogdescription}`);
    console.log(res);
    return(
        <div className="pl-[80px] pr-[55px]">
        <PortableText value={res[0].blogdescription} />
        </div>
    )
}

export default BlogContext