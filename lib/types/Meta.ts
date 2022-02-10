import {
  MetaPropertyCharset,
  MetaPropertyEquiv,
  MetaPropertyName,
  MetaPropertyMicrodata,
  MetaPropertyProperty,
} from "vue-meta";

type Meta =
  | MetaPropertyCharset
  | MetaPropertyEquiv
  | MetaPropertyName
  | MetaPropertyMicrodata
  | MetaPropertyProperty;

/**
 * @swagger
 * components:
 *   schemas:
 *     Meta:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         property:
 *           type: string
 *         content:
 *           type: string
 *       example:
 *         name: description
 *         content: This is an awesome website
 */
export default Meta;
