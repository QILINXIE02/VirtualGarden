const plants = [
  { id: '1', name: 'Rose', description: 'A beautiful red flower.', healthStatus: 'Healthy' },
  { id: '2', name: 'Tulip', description: 'A vibrant spring flower.', healthStatus: 'Healthy' },
  // Add more plants here
];

export const getPlantById = (id) => plants.find((plant) => plant.id === id);

export default plants;
