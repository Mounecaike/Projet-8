// Appel api //
export const fetchProperties = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/properties');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
      throw error; 
    }
  };

  export const fetchPropertyById = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/properties/${id}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
      throw error;
    }
  };