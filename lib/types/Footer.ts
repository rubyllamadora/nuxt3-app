import { LinkPropertyHref } from "vue-meta/types";
import Image from "./Image";
import Menu from "./Menu";

type Footer = {
  footerMenu: Menu[];
  acknowledgement: string;
  accreditations: {
    link?: LinkPropertyHref;
    target?: string;
    image: Image;
  }[];
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Footer:
 *       type: object
 *       properties:
 *         footerMenu:
 *           type: array
 *           items:
 *             type: object
 *             $ref: '#/components/schemas/Menu'
 *         acknowledgement:
 *           type: string
 *           example: As an Australian-owned business, we acknowledge the Traditional Owners of Country throughout Australia and their continuing connection to land, waters and community. We pay our respects to them and their cultures, and to their Elders past, present and future.
 *         accreditations:
 *           type: array
 *           items:
 *             type: object
 *             example: {
 *               image: {
 *                 $ref: '#/components/schemas/Image'
 *               }
 *             }
 */
export default Footer;
