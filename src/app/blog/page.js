"use client"
import Cards from '@/components/Cards'
import client from '@/sanity/client'
 
const blog = async() => {
  const res = await client.fetch(`*[_type == "blog"]`);
  console.log(res);

  return (

    <main>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <h1 className="sm:text-3xl text-5xl font-medium title-font mb-4 text-gray-900 text-center">Blogs</h1>
    <div className="flex flex-wrap -m-4 mt-10">
      {
        res.map(val=>{
          return(
            <Cards views={val.views} comments={val.comments} description={val.description} title={val.title} img={val.image} slug={val.slug.current} />
          )
        })
      }
   
    </div>
  </div>
</section>

    </main>
  )
}

export default blog