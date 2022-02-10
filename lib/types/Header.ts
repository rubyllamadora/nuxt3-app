import Menu from "./Menu";

/**
 * @swagger
 * components:
 *   schemas:
 *     Header:
 *       type: object
 *       properties:
 *         phoneNumber:
 *           type: string
 *           example: 1300 456 336
 *         mainMenu:
 *           type: array
 *           items:
 *             type: object
 *             $ref: '#/components/schemas/Menu'
 */
type Header = {
  phoneNumber: string;
  mainMenu: Menu[];
};

export default Header;
