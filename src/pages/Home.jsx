import { useState } from "react";
import ComplaintForm from "../components/ComplaintForm";
import ResultCard from "../components/ResultCard";

const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <>
      {result ? (
        <ResultCard result={result} onBack={() => setResult(null)} />
      ) : (
        <ComplaintForm onSubmit={setResult} />
      )}
    </>
  );
};

export default Home;
