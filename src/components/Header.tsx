import "./Header.css";

const folders = ["Cabinet","Gallery","Projects"]

interface props {
    page: string;
}

export const Header = ({ page }: props) => {
    return (
        <header id="Main-Header">
            <div id="Main-Header-Top">
                <h1><a href="/Parlier-Welding-Website/">Parlier Welding Club</a></h1>
                <nav>
                <a href="/Parlier-Welding-Website/">Home</a>
                    {folders.map((text) => {
                        return <a href={"/Parlier-Welding-Website/"+text}>{text}</a>;
                    })}
                </nav>
            </div>
            <div id="Main-Header-Shine"></div>
        </header>
    );
};
