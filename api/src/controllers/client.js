import {
  clientById,
  createClient,
  deleteClient,
  getAllClients,
  updateClient,
} from "../db";

export class ClientController {
  /**
   * @openapi
   * /client:
   *   get:
   *     responses:
   *       200:
   *         description: Returns clients.
   */
  static getAll = async (request, response) => {
    try {
      const clients = await getAllClients();
      response.status(200).send(clients);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  /**
   * @openapi
   * /client/{id}:
   *   get:
   *      parameters:
   *       - name: id
   *         in: path
   *         schema:
   *            type: string
   *         required: true
   *      responses:
   *         200:
   *            description: Returns a client.
   */
  static getById = async (request, response) => {
    try {
      const id = request.params.id;
      const client = await clientById(id);
      response.status(200).send(client);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  /**
   * @openapi
   * /client:
   *   post:
   *      parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *      responses:
   *         200:
   *            description: Create a client.
   */

  static create = async (request, response) => {
    try {
      const dto = request.body;
      const client = await createClient(dto);
      response.status(200).send(client);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  /**
   * @openapi
   * /client/{id}:
   *   put:
   *      parameters:
   *       - name: id
   *         in: path
   *         schema:
   *            type: string
   *         required: true
   *       - name: body
   *         description: data to post
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *      responses:
   *         200:
   *            description: Update a client.
   */
  static update = async (request, response) => {
    try {
      const id = request.params.id;
      const dto = request.body;
      const client = await updateClient(id, dto);
      response.status(200).send(client);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  /**
   * @openapi
   * /client/{id}:
   *   delete:
   *      parameters:
   *       - name: id
   *         in: path
   *         schema:
   *            type: string
   *         required: true
   *      responses:
   *         200:
   *            description: Delete a client.
   */
  static delete = async (request, response) => {
    try {
      const client = await deleteClient(id);
      response.status(200).send(client);
    } catch (err) {
      response.status(500).send(err);
    }
  };
}
