const expertsService = new ExpertsService();

async function App() {
  const experts = await expertsService.getAllExperts();
  expertsService.renderExpertsList(experts);
 }
 
App();

