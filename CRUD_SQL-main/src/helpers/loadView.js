export const loadView = async (app, template) => {
    try {
      const response = await fetch(`/src/views/${template}`);
      if (!response.ok) throw new Error("Vista no encontrada");
  
      const html = await response.text();
      const divmain = document.getElementById('main');
      divmain.innerHTML = html;
    } catch (error) {
      console.error(`Error cargando vista "${template}":`, error);
    }
  };
  