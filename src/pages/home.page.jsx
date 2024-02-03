import AnimationWrapper from "../common/page-animation";
// import BlogPostCard from "../components/blog-post.component";
import InPageNavigation from "../components/inpage-navigation.component";
// blogs=[

// ]
const HomePage = () => {
  return (
    <AnimationWrapper>
      <section className="h-cover flex justify-center gap-10">
        <div className="w-full">
          <InPageNavigation
            routes={["home", "trending blogs"]}
            defaulthidden={["trending blogs"]}
          >
            <h1>Latest Blogs Here</h1>
            <h1>Trending Blogs Here</h1>
            {/* <>
            {
            blogs==null?<Loader/>:
            blogs.map((blog,i)=>{
              return <AnimationWrapper key={i} transition={{duration:1,delay:i*.1}}>
                <BlogPostCard />
              </AnimationWrapper>
            })
}
</> */}
          </InPageNavigation>
        </div>
        <div></div>
      </section>
    </AnimationWrapper>
  );
};

export default HomePage;
