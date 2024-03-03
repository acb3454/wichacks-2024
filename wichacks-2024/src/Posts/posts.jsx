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
                    <span className = "postText">{post.playlistName}</span>
                    <p>Tag name here</p>
                </div>
                <div className = "postBottom">
                        <button className = "commentBtn">Add Song</button>
                        <button className = "addBtn">Export Playlist</button>
                </div>
            </div>
        </div>
    )
}