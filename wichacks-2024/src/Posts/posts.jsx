import "./posts.css"

export default function Post({post}){
    console.log(post)
    return (
        <div className = "post">
            <div className = "postWrapper">
                <div className = "postTop">
                    <div className = "postTopLeft">
                        <h3>Username</h3>
                    </div>
                </div>
                <div className = "postCenter">
                    <span className = "postText">{post.desc}</span>
                </div>
                <div className = "postBottom">
                    {/* <div className = "postBottonLeft"> */}
                        <button className = "commentBtn">Add Song</button>
                    {/* </div> */}
                    {/* <div className = "postBottonRight"> */}
                        <button className = "addBtn">Export Playlist</button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}