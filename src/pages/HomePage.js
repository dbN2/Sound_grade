import AddAlbumForm from "../components/AddAlbum"

export const HomePage = () => {



    return(
        <div className="Homepage">

        <h1> Welcome to Sound Grade</h1>
        <p style={{ textAlign: "center" }}>Explore albums using the navigation tab or add a new album below</p>
        
        <AddAlbumForm/>

        </div>
    )
}