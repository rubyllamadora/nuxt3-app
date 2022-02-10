type Image = {
  src: string;
  alt: string;
  height: number;
  width: number;
  srcSet?: {
    src: string;
    size: string;
  }[];
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Image:
 *       type: object
 *       properties:
 *         src:
 *           type: string
 *           example: /images/mexico.jpg
 *         alt:
 *           type: string
 *           example: Mexico
 *         height:
 *           type: integer
 *           example: 1285
 *         width:
 *           type: integer
 *           example: 1920
 *         srcSet:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *              src:
 *                type: string
 *                example: /images/mexico.jpg?width=75
 *              size:
 *                type: string
 *                example: 75w
 */
export default Image;
