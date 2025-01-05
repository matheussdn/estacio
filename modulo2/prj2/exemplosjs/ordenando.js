const swap = (vetor, pos1, pos2) => {
  [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];

};

const shuffle = (vetor, numShuffles) => {
  for (let i = 0; i < numShuffles; i++) {
      const pos1 = Math.floor(Math.random() * vetor.length);
      const pos2 = Math.floor(Math.random() * vetor.length);
      [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
  }
};


const bubble_sort = (vetor) => {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (vetor[j] > vetor[j + 1]) {
              [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
          }
      }
  }
};

const selection_sort = (vetor) => {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (vetor[j] < vetor[minIndex]) {
              minIndex = j;
          }
      }
      if (minIndex !== i) {
          [vetor[i], vetor[minIndex]] = [vetor[minIndex], vetor[i]];
      }
  }
};

const quickSort = (array, low, high) => {
  if (low < high) {
      
      const partitionIndex = partition(array, low, high);

    
      quickSort(array, low, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, high);
  }
};

const partition = (array, low, high) => {
  const pivot = array[high]; 
  let i = low - 1; 

  for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
          i++;
         
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

 
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
};

