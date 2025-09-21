import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  SkipBack,
  Code,
  BarChart3,
  Clock,
  Calculator,
  Search,
  SortAsc,
  BookOpen
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { visualizations } from '../data/visualizations';
import { AlgorithmVisualization } from '../types';

const Visualize = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmVisualization | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [showCode, setShowCode] = useState(true);

  useEffect(() => {
    if (visualizations.length > 0 && !selectedAlgorithm) {
      setSelectedAlgorithm(visualizations[0]);
    }
  }, [selectedAlgorithm]);

  useEffect(() => {
    let interval: number;
    
    if (isPlaying && selectedAlgorithm) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= selectedAlgorithm.steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, selectedAlgorithm, speed]);

  const handlePlay = () => {
    if (currentStep >= (selectedAlgorithm?.steps.length || 0) - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleStepForward = () => {
    if (selectedAlgorithm && currentStep < selectedAlgorithm.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleStepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tri':
        return SortAsc;
      case 'Recherche':
        return Search;
      case 'Arithmétique':
        return Calculator;
      case 'Fonctions':
        return Code;
      default:
        return BookOpen;
    }
  };

  const renderVisualization = () => {
    if (!selectedAlgorithm) return null;

    const step = selectedAlgorithm.steps[currentStep];
    
    return (
      <div className="space-y-6">
        {/* Step Description */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Étape {step.step}: {step.description}
          </h3>
          <div className="text-sm text-slate-600">
            {currentStep + 1} sur {selectedAlgorithm.steps.length}
          </div>
        </div>

        {/* Data Visualization */}
        <div className="mobile-viz-container">
          <div className="mobile-viz-content">
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
              <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-4 overflow-x-auto">
                {Array.isArray(step.data) ? (
                  step.data.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: step.highlightedIndices.includes(index) ? 1.1 : 1,
                        backgroundColor: step.highlightedIndices.includes(index) ? '#3b82f6' : '#e2e8f0'
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg flex-shrink-0"
                    >
                      {value}
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">Visualisation de Graphe</div>
                    <div className="w-48 sm:w-64 h-24 sm:h-32 bg-white rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Variables */}
        <div className="bg-slate-900 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-3">Variables</h4>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(step.variables).map(([key, value]) => (
              <div key={key} className="bg-slate-800 rounded p-2">
                <div className="text-slate-400 text-sm">{key}</div>
                <div className="text-white font-mono">{String(value)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto mobile-container py-6 sm:py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="mobile-heading text-slate-900 mb-4">Visualiseur d'Algorithmes</h1>
        <p className="mobile-text text-slate-600">
          Regardez les algorithmes en action avec des visualisations étape par étape
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Algorithm Selection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="mobile-subheading text-slate-900">Choisir un Algorithme</h2>
          <div className="space-y-3">
            {visualizations.map((algo) => {
              const CategoryIcon = getCategoryIcon(algo.category);
              return (
                <button
                  key={algo.id}
                  onClick={() => {
                    setSelectedAlgorithm(algo);
                    setCurrentStep(0);
                    setIsPlaying(false);
                  }}
                  className={`w-full text-left p-4 rounded-lg border transition-colors touch-target ${
                    selectedAlgorithm?.id === algo.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <CategoryIcon className="w-5 h-5 text-slate-600" />
                    <h3 className="font-semibold text-slate-900">{algo.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{algo.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <span className="badge bg-slate-100 text-slate-700">{algo.category}</span>
                    <span>Temps: {algo.complexity.time}</span>
                    <span>Espace: {algo.complexity.space}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Visualization Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-4 sm:space-y-6"
        >
          {selectedAlgorithm ? (
            <>
              {/* Controls */}
              <div className="mobile-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
                  <h2 className="mobile-subheading text-slate-900">
                    {selectedAlgorithm.name}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowCode(!showCode)}
                      className="btn btn-secondary px-3 py-2 text-sm touch-target"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      {showCode ? 'Masquer' : 'Afficher'} le Code
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <button
                    onClick={handleStepBackward}
                    disabled={currentStep === 0}
                    className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed touch-target"
                  >
                    <SkipBack className="w-5 h-5 text-slate-600" />
                  </button>
                  
                  <button
                    onClick={handlePlay}
                    className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors touch-target"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  
                  <button
                    onClick={handleStepForward}
                    disabled={currentStep >= (selectedAlgorithm?.steps.length || 0) - 1}
                    className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed touch-target"
                  >
                    <SkipForward className="w-5 h-5 text-slate-600" />
                  </button>
                  
                  <button
                    onClick={handleReset}
                    className="p-2 rounded-lg hover:bg-slate-100 touch-target"
                  >
                    <RotateCcw className="w-5 h-5 text-slate-600" />
                  </button>

                  <div className="flex items-center space-x-2 sm:ml-4">
                    <Clock className="w-4 h-4 text-slate-600" />
                    <select
                      value={speed}
                      onChange={(e) => setSpeed(Number(e.target.value))}
                      className="input text-sm py-2 touch-target"
                    >
                      <option value={2000}>0.5x</option>
                      <option value={1000}>1x</option>
                      <option value={500}>2x</option>
                      <option value={250}>4x</option>
                    </select>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((currentStep + 1) / selectedAlgorithm.steps.length) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Visualization */}
              <div className="card p-6">
                {renderVisualization()}
              </div>

              {/* Code */}
              {showCode && (
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Implémentation</h3>
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <SyntaxHighlighter
                      language="python"
                      style={tomorrow}
                      customStyle={{ margin: 0, fontSize: '14px' }}
                    >
                      {selectedAlgorithm.code}
                    </SyntaxHighlighter>
                  </div>
                </div>
              )}

              {/* Algorithm Details */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Détails de l'Algorithme</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Complexité</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Temps:</span>
                        <span className="font-mono text-slate-900">{selectedAlgorithm.complexity.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Espace:</span>
                        <span className="font-mono text-slate-900">{selectedAlgorithm.complexity.space}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Catégorie</h4>
                    <div className="flex items-center space-x-2">
                      {(() => {
                        const CategoryIcon = getCategoryIcon(selectedAlgorithm.category);
                        return <CategoryIcon className="w-4 h-4 text-slate-600" />;
                      })()}
                      <span className="text-slate-900">{selectedAlgorithm.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="card p-12 text-center">
              <BarChart3 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Sélectionnez un Algorithme</h3>
              <p className="text-slate-600">Choisissez un algorithme dans la barre latérale pour commencer la visualisation</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Visualize;