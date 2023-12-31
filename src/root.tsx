// @refresh reload
import {Suspense} from "solid-js";
import {Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title,} from "solid-start";
import "./root.css";
import TopWave from "~/components/wave/TopWave";
import BottomWave from "~/components/wave/BottomWave";

export default function Root() {
    return (
        <Html lang="en" class="dark">
            <Head>
                <Title>Ali</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>

                <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <Link rel="manifest" href="/site.webmanifest"/>
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <header class={"absolute w-full"}>
                            <TopWave/>
                        </header>
                        <Routes>
                            <FileRoutes/>
                        </Routes>
                        <footer class={"absolute w-full"}>
                            <BottomWave/>
                        </footer>
                    </ErrorBoundary>
                </Suspense>
                <Scripts/>
            </Body>
        </Html>
    );
}
