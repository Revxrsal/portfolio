// @refresh reload
import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start";
import {Suspense} from "solid-js";
import "./app.css";
import TopWave from "~/components/wave/TopWave";
import BottomWave from "~/components/wave/BottomWave";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Suspense>
            <header class={"absolute w-full"}>
              <TopWave/>
            </header>
            {props.children}
            <footer class={"absolute w-full"}>
              <BottomWave/>
            </footer>
          </Suspense>
        </>
      )}
    >
      <FileRoutes/>
    </Router>
  );
}