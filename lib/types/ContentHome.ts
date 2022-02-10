import Content from "./Content";
import { Theme } from "./Theme";

type ContentHome = Content & {
  introduction: string;
  tagline: string;
  themes?: Array<Theme>;
};

/**
 * @swagger
 * components:
 *   schemas:
 *     ContentHome:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: It’s time for a new journey
 *         banner:
 *           type: object
 *           $ref: '#/components/schemas/Image'
 *         links:
 *           type: array
 *           items:
 *             type: object
 *             $ref: '#/components/schemas/Link'
 *         metadata:
 *           type: object
 *           $ref: '#/components/schemas/MetaData'
 *         introduction:
 *           type: string
 *           example: Creating positive change through the joy of travel
 *         tagline:
 *           type: string
 *           example: People & planet-friendly adventures. For the real. For the curious. For you.
 *         themes:
 *           type: array
 *           items:
 *             type: object
 *             $ref: '#/components/schemas/Theme'
 */
export default ContentHome;
