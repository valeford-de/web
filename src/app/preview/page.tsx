// src/app/preview/page.tsx
import React from "react";

const PreviewPage = () => {
  return (
    <div className="min-h-screen bg-background text-text p-10">
      <h1 className="text-center text-5xl font-bold mb-6">
        Valeford Design Preview
      </h1>

      {/* Beispiel-Button */}
      <div className="text-center mb-6">
        <button className="px-8 py-3 text-lg font-medium rounded-lg">
          Test Button
        </button>
      </div>

      {/* Beispiel-Link */}
      <div className="text-center mb-6">
        <a href="#" className="text-xl">
          Beispiel-Link zu einer externen Seite
        </a>
      </div>

      {/* Beispiel-Text */}
      <div className="text-center mb-6">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra
          nunc sit amet dolor vulputate, id faucibus enim malesuada. Sed
          bibendum quam sit amet lectus tincidunt, eu feugiat felis egestas.
        </p>
      </div>

      {/* Beispiel für den Dark Mode */}
      <div className="text-center mt-10">
        <button className="px-8 py-3 text-lg font-medium rounded-lg bg-primary text-background">
          Dark Mode Test
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;
