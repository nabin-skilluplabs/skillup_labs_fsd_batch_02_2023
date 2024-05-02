import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

function JobReadyProgram() {
    return(
        <div>
            <Header />
            <h1>Job Ready Program</h1>
            <HeroBanner
            banner="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            heading="Nested Routing"
            intro="Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data."
            />
        </div>
    );
}

export default JobReadyProgram;