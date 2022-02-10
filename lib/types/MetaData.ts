import { MetaPropertyName, MetaPropertyProperty } from "vue-meta";

type MetaData = {
  ogUrl: MetaPropertyProperty;
  description: MetaPropertyName;
  ogType: MetaPropertyProperty;
  ogTitle: MetaPropertyProperty;
  ogDescription: MetaPropertyProperty;
};

/**
 * @swagger
 * components:
 *   schemas:
 *     MetaData:
 *       type: object
 *       properties:
 *         ogUrl:
 *           type: object
 *           $ref: '#/components/schemas/Meta'
 *         description:
 *           type: object
 *           $ref: '#/components/schemas/Meta'
 *         ogType:
 *           type: object
 *           $ref: '#/components/schemas/Meta'
 *         ogTitle:
 *           type: object
 *           $ref: '#/components/schemas/Meta'
 *         ogDescription:
 *           type: object
 *           $ref: '#/components/schemas/Meta'
 *       example:
 *         name: description
 *         content: This is an awesome website
 */
export default MetaData;
