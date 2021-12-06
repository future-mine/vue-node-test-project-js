import { Request, Response } from "express";
import {
  createProvider,
  deleteProvider,
  getAllProviders,
  providerById,
  updateProvider,
} from "../db";

export class ProviderController {
  /**
   * @openapi
   * /provider/{id}:
   *   get:
   *      parameters:
   *       - name: id
   *         in: path
   *         schema:
   *            type: string
   *         required: true
   *      responses:
   *         200:
   *            description: Returns a provider.
   */
  static getById = async (request, response) => {
    try {
      const id = request.params.id;
      const provider = await providerById(id);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  /**
   * @openapi
   * /provider:
   *   get:
   *     responses:
   *       200:
   *         description: Returns providers.
   */
  static getAll = async (request, response) => {
    try {
      const id = request.params.id;
      const getAllProviders = await getAllProviders(id);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  /**
   * @openapi
   * /provider:
   *   post:
   *      parameters:
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *      responses:
   *         200:
   *            description: Create a provider.
   */
  static create = async (request, response) => {
    try {
      const dto = request.body;
      const provider = await createProvider(dto);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  /**
   * @openapi
   * /provider/{id}:
   *   put:
   *      parameters:
   *       - name: id
   *         in: path
   *         schema:
   *            type: string
   *         required: true
   *       - name: body
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *      responses:
   *         200:
   *            description: Update a provider.
   */
  static update = async (request, response) => {
    try {
      const id = request.params.id;
      const dto = request.body;
      const provider = await updateProvider(id, dto);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };

  /**
   * @openapi
   * /provider/{id}:
   *   delete:
   *      parameters:
   *       - name: id
   *         in: path
   *         schema:
   *            type: string
   *         required: true
   *      responses:
   *         200:
   *            description: Delete a provider.
   */
  static delete = async (request, response) => {
    try {
      const id = request.params.id;
      const provider = await deleteProvider(id);
      response.status(200).send(provider);
    } catch (err) {
      response.status(500).send(err);
    }
  };
}
