import ParticlesBackground from "./components/ParticlesBackground";
import { Home, TemplateSelection, Resume, Result } from "./pages";

function App() {
    return (
        <>
            <ParticlesBackground />
            <main className="app transition-all ease-in">
                <Home />
                <TemplateSelection />
                <Resume />
                <Result />
            </main>
        </>
    );
}

export default App;
