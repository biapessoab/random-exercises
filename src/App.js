import React, { useState } from 'react';

function App() {
  const [totalExercises, setTotalExercises] = useState('');
  const [randomExercises, setRandomExercises] = useState('');
  const [generatedRandoms, setGeneratedRandoms] = useState([]);

  const handleTotalExercisesChange = (event) => {
    setTotalExercises(event.target.value);
  };

  const handleRandomExercisesChange = (event) => {
    setRandomExercises(event.target.value);
  };

  const generateUniqueRandomNumber = (maxValue, usedNumbers) => {
    let randomValue;
    do {
      randomValue = Math.floor(Math.random() * maxValue) + 1;
    } while (usedNumbers.includes(randomValue));
    return randomValue;
  };
  

  const handleGenerateRandomExercises = () => {
    const totalExercisesValue = parseInt(totalExercises, 10);
    const randomExercisesValue = parseInt(randomExercises, 10);
  
    if (!isNaN(totalExercisesValue) && !isNaN(randomExercisesValue)) {
      const maxRandomValue = totalExercisesValue;
      const usedNumbers = [];
      const generatedRandomNumbers = [];
  
      for (let i = 0; i < randomExercisesValue; i++) {
        const randomValue = generateUniqueRandomNumber(maxRandomValue, usedNumbers);
        usedNumbers.push(randomValue);
        generatedRandomNumbers.push(randomValue);
      }
  
      const sortedNumbers = generatedRandomNumbers.sort((a, b) => a - b);
      setGeneratedRandoms(sortedNumbers);
    }
  };

  return (
    <div className='bg-indigo-100 h-screen flex justify-center items-center'>
      <div className='w-[400px] p-6 bg-white rounded-lg shadow-md'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Número de exercícios totais:
          </label>
          <input
            className='border rounded w-full py-2 px-3'
            type='number'
            value={totalExercises}
            onChange={handleTotalExercisesChange}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Número de exercícios aleatórios:
          </label>
          <input
            className='border rounded w-full py-2 px-3'
            type='number'
            value={randomExercises}
            onChange={handleRandomExercisesChange}
          />
        </div>

        <button
          className='bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700'
          onClick={handleGenerateRandomExercises}
        >
          Gerar Números Aleatórios
        </button>

        <div className='mt-4'>
          {generatedRandoms.length > 0 && (
            <div>
              <p>Números Aleatórios Gerados:</p>
              <ul>
                {generatedRandoms.map((number, index) => (
                  index == (generatedRandoms.length - 1) ?
                  <li key={index} className='inline'>{number}</li>
                  :
                  <li key={index} className='inline'>{number}, </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
