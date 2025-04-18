import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function Shape() {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial color="#DB8B9B" distort={0.5} speed={2} />
      </Sphere>

      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
}

export default Shape;
