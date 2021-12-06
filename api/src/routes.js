import { ClientController } from "./controllers/client";
import { ProviderController } from "./controllers/provider";

export function RegisterRoutes(app) {
  app.get("/client", ClientController.getAll);
  app.get("/client/:id", ClientController.getById);
  app.post("/client", ClientController.create);
  app.put("/client/:id", ClientController.update);
  app.delete("/client/:id", ClientController.delete);
  app.get("/provider", ProviderController.getAll);
  app.get("/provider/:id", ProviderController.getById);
  app.post("/provider", ProviderController.create);
  app.put("/provider/:id", ProviderController.update);
  app.delete("/provider/:id", ProviderController.delete);
}
