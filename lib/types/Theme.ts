import Image from "./Image";

/**
 * @swagger
 * components:
 *   schemas:
 *     Theme:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: Cycling
 *         url:
 *           type: string
 *           example: /theme/cycling
 *         heroImage:
 *           type: object
 *           $ref: '#/components/schemas/Image'
 */
type Theme = {
  heroImage: Image;
  url: string;
  title: string;
};

export { Theme };
