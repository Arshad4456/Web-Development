export default async function Page({ params }) {
    throw new Error("error hai")
    //fetch your blog post by its slug
    let languages = ["python", "javascript", "java", "c++"]
    if(languages.includes(params.slug)) {
        return <div>My Post: {params.slug}</div>
    }
    else {
        return <div>Post not found</div>
    }
    return <div>My Post: {params.slug}</div>

}
