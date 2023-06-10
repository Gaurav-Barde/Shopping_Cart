const Success = () => {
  return (
    <>
      <h1>Success! Thank You for Your Purchase.</h1>
      <button
        className="border-b-2 border-blue-600 mt-2"
        onClick={() => window.location.assign("http://localhost:3000")}
      >
        Back to Store
      </button>
    </>
  );
};
export default Success;
