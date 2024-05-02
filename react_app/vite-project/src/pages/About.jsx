import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

function About() {
    return (
        <div>
            <Header />
            <h1>About</h1>
            <HeroBanner banner="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             heading="Become a Full stack developer"
              intro="Empower your journey into full-stack development with our comprehensive job-ready program." />
        </div>
    );
}

export default About;