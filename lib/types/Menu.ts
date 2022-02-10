type Menu = {
  name: string;
  href?: string;
  children?: Menu[];
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Menu:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         href:
 *           type: string
 *         children:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Menu'
 *       example:
 *         name: Destinations
 *         href: /destinations
 *         children:
 *           name: Africa
 *           href: /destinations/africa
 *           children:
 *             name: Benin
 *             href: /destinations/benin
 *             children: []
 */
export default Menu;
