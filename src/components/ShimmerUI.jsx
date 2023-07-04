const ShimmerUI = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-2 xl:gap-8 m-8">
      {Array(32)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="flex items-center border-4 border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
          >
            <div className="w-full animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
