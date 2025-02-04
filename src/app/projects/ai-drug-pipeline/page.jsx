import React from "react";

export default function AIDrugPipeline() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">AI Drug Analysis Pipeline</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A machine learning pipeline designed to predict molecular properties,
          including drug toxicity, with high accuracy and interpretability.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">SHAP Explainability</h3>
            <p className="text-gray-400 mt-2">
              Interpret model predictions with SHAP visualisations for insights
              into feature importance.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Partitioned Data Processing</h3>
            <p className="text-gray-400 mt-2">
              Handle large datasets efficiently with memory-optimised
              partitioning.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Model Evaluation</h3>
            <p className="text-gray-400 mt-2">
              Achieved RMSE: 0.1577 and R²: 0.99 on test datasets, ensuring
              robust performance.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">Python</li>
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">XGBoost</li>
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">SHAP</li>
          <li className="bg-gray-800 p-4 rounded-lg shadow-md">PyArrow</li>
        </ul>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6">Results</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold">Model Performance</h3>
          <p className="text-gray-400 mt-2">
            RMSE: <strong>0.1577</strong>, R²: <strong>0.99</strong>
          </p>
          <p className="text-gray-400 mt-4">
            SHAP visualisations highlighted the top features contributing to
            drug toxicity predictions.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">See the Full Project</h2>
        <a
          href="https://gitlab.com/Sheldon01/AI_Powered_Drug_Analysis_Pipeline#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          View on GitLab
        </a>
      </section>
    </div>
  );
}
