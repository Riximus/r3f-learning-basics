import './App.css'
import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {Loader, OrbitControls} from "@react-three/drei";
import Delivery from "./models/Delivery.jsx";

const App = () => {
    return (
        <Canvas
            camera={{near: 0.1, far: 1000}}
        >
            <Suspense fallback={ <Loader /> }>
                <directionalLight position={[0,0,2]} />
                <Delivery
                    position={[0, 0, 0]}
                    scale={[1, 1, 1]}
                />
                <OrbitControls />

            </Suspense>

            {/*<directionalLight position={[0,0,2]} />
            <mesh position={[-2, -1, 0]}>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>*/}
        </Canvas>
    )
}

export default App
